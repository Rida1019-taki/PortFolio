"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let x = -300;
        let y = -300;
        let targetX = -300;
        let targetY = -300;

        const onMove = (e: MouseEvent) => {
            targetX = e.clientX;
            targetY = e.clientY;
        };

        const animate = () => {
            x += (targetX - x) * 0.08;
            y += (targetY - y) * 0.08;

            if (ref.current) {
                ref.current.style.transform = `translate(${x - 200}px, ${y - 200}px)`;
            }

            requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", onMove);
        const id = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(id);
        };
    }, []);

    return (
        <div
            ref={ref}
            className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block"
            style={{
                width: 400,
                height: 400,
                borderRadius: "50%",
                background:
                    "radial-gradient(circle, rgba(224,112,64,0.05) 0%, rgba(212,168,83,0.02) 40%, transparent 70%)",
                willChange: "transform",
            }}
        />
    );
}
