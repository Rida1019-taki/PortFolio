"use client";

import React from "react";

interface LogoMonogramProps {
  size?: number;
  className?: string;
}

export default function LogoMonogram({ size = 40, className = "" }: LogoMonogramProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-xl overflow-hidden shadow-[0_0_20px_rgba(217,164,65,0.25)] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(217,164,65,0.45)] group-hover:scale-105 shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="monoGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="40%" stopColor="#D9A441" />
            <stop offset="85%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="monoBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1c1917" />
            <stop offset="60%" stopColor="#0c0a09" />
            <stop offset="100%" stopColor="#040404" />
          </linearGradient>
        </defs>

        {/* Squircle Background with Metallic Rim */}
        <rect
          x="5"
          y="5"
          width="90"
          height="90"
          rx="26"
          fill="url(#monoBg)"
          stroke="url(#monoGold)"
          strokeWidth="3.5"
        />

        {/* Technical Inner Border */}
        <rect
          x="12"
          y="12"
          width="76"
          height="76"
          rx="19"
          stroke="#D9A441"
          strokeWidth="1"
          strokeOpacity="0.25"
          strokeDasharray="4 3"
        />

        {/* Monogram R + T Letters */}
        <g fill="url(#monoGold)">
          {/* Letter R Stem */}
          <path d="M 26 26 L 35 26 L 35 74 L 26 74 Z" />
          
          {/* Letter R Upper Bowl */}
          <path d="M 35 26 L 52 26 C 60 26 64 30 64 38 C 64 45 59 49 52 49 L 35 49 Z M 35 34 L 35 41 L 51 41 C 54 41 56 39 56 38 C 56 36 54 34 51 34 Z" />
          
          {/* Letter R Leg */}
          <path d="M 44 48 L 60 74 L 50 74 L 36 51 Z" />

          {/* Letter T Top Bar */}
          <path d="M 52 26 L 76 26 L 76 34 L 52 34 Z" />
          
          {/* Letter T Stem */}
          <path d="M 67 34 L 75 34 L 75 74 L 67 74 Z" />
        </g>

        {/* Terminal Tech Dot */}
        <circle cx="20" cy="50" r="2" fill="#D9A441" opacity="0.6" />
        <circle cx="80" cy="50" r="2" fill="#D9A441" opacity="0.6" />
      </svg>
    </div>
  );
}
