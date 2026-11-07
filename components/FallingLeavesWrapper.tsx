"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import FallingLeaves with SSR disabled to prevent any canvas/window SSR issues
const FallingLeaves = dynamic(
  () => import("falling-leaves/react").then((mod) => mod.FallingLeaves),
  { ssr: false }
);

interface LeavesProps {
  /** If true, strictly check for autumn months (Sept - Nov). Defaults to true. */
  onlyInFall?: boolean;
}

export default function FallingLeavesWrapper({ onlyInFall = false }: LeavesProps) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (onlyInFall) {
      const month = new Date().getMonth();
      // Month 8 = Sept, 9 = Oct, 10 = Nov
      const isFall = month >= 8 && month <= 10;
      setShouldRender(isFall);
    } else {
      setShouldRender(true);
    }
  }, [onlyInFall]);

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      <FallingLeaves
        fullScreen
        count={28}
        shapes={["maple", "oak", "ginkgo", "birch"]}
        colors={[
          "#D9A441", // Rida's Signature Gold
          "#F5D061", // Bright Gold
          "#C9A063", // Warm Metallic
          "#E07040", // Amber Leaf
          "#B8860B", // Dark Goldenrod
          "#D97706", // Autumn Ochre
        ]}
        speed={[0.8, 1.8]}
        wind={[-0.4, 0.8]}
        sway={[1.2, 2.4]}
        size={[18, 36]}
      />
    </div>
  );
}
