"use client";

import { useEffect, useState } from "react";

const roles = [
    "Full Stack Developer",
    "Mobile App Builder",
    "API Architect",
    "Clean Code Advocate",
];

export default function TypewriterText() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = roles[roleIndex];
        const speed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === current.length) {
            const timeout = setTimeout(() => setIsDeleting(true), 2200);
            return () => clearTimeout(timeout);
        }

        if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
            return;
        }

        const timeout = setTimeout(() => {
            setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
        }, speed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

    return (
        <span className="inline-flex items-center">
      <span className="bg-gradient-to-r from-[color:var(--brand)] to-[color:var(--accent-gold)] bg-clip-text text-transparent">
        {roles[roleIndex].slice(0, charIndex)}
      </span>
      <span className="ml-0.5 inline-block h-[1.1em] w-[2px] animate-pulse bg-[color:var(--brand)]" />
    </span>
    );
}
