// Adapted from React Bits GlareHover (https://reactbits.dev).
// Changes: sizes to its parent instead of fixed pixel dimensions, no pointer
// cursor (the photo isn't clickable), and no motion for reduced-motion users.
import React, { useRef } from "react";

interface GlareHoverProps {
  children?: React.ReactNode;
  className?: string;
  glareColor?: string;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const GlareHover = ({
  children,
  className = "",
  glareColor = "rgba(255, 255, 255, 0.45)",
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 900,
}: GlareHoverProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const animateIn = () => {
    const el = overlayRef.current;
    if (!el || prefersReducedMotion()) return;
    el.style.transition = "none";
    el.style.backgroundPosition = "-100% -100%";
    // Force a reflow so the sweep always restarts from the corner
    void el.offsetWidth;
    el.style.transition = `background-position ${transitionDuration}ms ease-in-out`;
    el.style.backgroundPosition = "100% 100%";
  };

  const animateOut = () => {
    const el = overlayRef.current;
    if (!el) return;
    el.style.transition = `background-position ${transitionDuration}ms ease`;
    el.style.backgroundPosition = "-100% -100%";
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
    >
      {children}
      <div
        ref={overlayRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `linear-gradient(${glareAngle}deg, transparent 60%, ${glareColor} 70%, transparent 100%)`,
          backgroundSize: `${glareSize}% ${glareSize}%`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "-100% -100%",
        }}
      />
    </div>
  );
};
