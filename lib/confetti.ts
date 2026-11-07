import confetti from "canvas-confetti";

/**
 * Fires a celebratory burst of gold, metallic amber, and white confetti.
 */
export function triggerGoldConfetti() {
  if (typeof window === "undefined") return;

  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    colors: ["#D9A441", "#F5D061", "#C9A063", "#FFFFFF", "#E07040", "#10B981"],
    disableForReducedMotion: true,
    zIndex: 9999,
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });

  fire(0.2, {
    spread: 60,
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

/**
 * Fires dual cannons from the bottom left and right of the screen.
 */
export function triggerSideCannons() {
  if (typeof window === "undefined") return;

  const end = Date.now() + 1.2 * 1000;
  const colors = ["#D9A441", "#F5D061", "#FFFFFF", "#B8860B"];

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.85 },
      colors: colors,
      zIndex: 9999,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.85 },
      colors: colors,
      zIndex: 9999,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
