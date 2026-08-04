"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#work", label: "Work" },
    { href: "#education", label: "Education" },
    { href: "#hackathons", label: "Hackathons" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
];

export default function MobileMenu() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative md:hidden">
            <button
                onClick={() => setOpen(!open)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[color:var(--foreground)]"
                aria-label="Toggle menu"
            >
                {open ? <X size={20} /> : <Menu size={20} />}
            </button>

            {open && (
                <div className="fixed left-0 right-0 top-24 z-[9999] border-b border-white/5 bg-[color:var(--background)]/95 backdrop-blur-2xl">
                    <div className="flex flex-col gap-1 px-6 py-4">
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className="rounded-xl px-4 py-3 text-sm font-medium text-[color:var(--muted)] transition hover:bg-white/5 hover:text-[color:var(--foreground)]"
                            >
                                {l.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
