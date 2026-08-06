import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
                aria-label="Toggle Menu"
            >
                {isOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
            </button>

            {isOpen && (
                <div className="absolute top-20 inset-x-4 rounded-3xl border border-white/20 bg-black/90 p-6 backdrop-blur-2xl shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 duration-300">
                    <ul className="flex flex-col gap-3">
                        {[
                            "About",
                            "Skills",
                            "Work",
                            "Education",
                            "Hackathons",
                            "Resume",
                            "Contact",
                        ].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setIsOpen(false)}
                                    className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white transition-all"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}