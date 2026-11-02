"use client";

import { useEffect, useState } from "react";

const defaultRoles = [
    "Full Stack Developer",
    "Spring Boot & Java Architect",
    "React & Modern UI Builder",
    "Mobile App Engineer",
    "Clean Code Advocate",
];

export default function TypewriterText({ roles = defaultRoles }: { roles?: string[] }) {
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Reset indices when roles array changes (e.g., language switch)
    useEffect(() => {
        setRoleIndex(0);
        setCharIndex(0);
        setIsDeleting(false);
    }, [roles]);

    useEffect(() => {
        const activeRoles = roles && roles.length > 0 ? roles : defaultRoles;
        const current = activeRoles[roleIndex % activeRoles.length];
        const speed = isDeleting ? 35 : 75;

        if (!isDeleting && charIndex === current.length) {
            const timeout = setTimeout(() => setIsDeleting(true), 2000);
            return () => clearTimeout(timeout);
        }

        if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % activeRoles.length);
            return;
        }

        const timeout = setTimeout(() => {
            setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
        }, speed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex, roles]);

    const activeRoles = roles && roles.length > 0 ? roles : defaultRoles;
    const current = activeRoles[roleIndex % activeRoles.length] || "";

    return (
        <span className="inline-flex items-center">
            <span className="bg-gradient-to-r from-[color:var(--brand)] to-[color:var(--accent-gold)] bg-clip-text text-transparent">
                {current.slice(0, charIndex)}
            </span>
            <span className="ml-0.5 inline-block h-[1.1em] w-[2px] animate-pulse bg-[color:var(--brand)]" />
        </span>
    );
}
