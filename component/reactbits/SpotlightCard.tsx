// Adapted from React Bits SpotlightCard (https://reactbits.dev).
// Changes: themed colour via CSS variable, and the pointer position is written
// to CSS variables instead of React state so moving the cursor never
// re-renders the card's contents.
import React, { useRef } from "react";

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  as?: "div" | "article";
}

export const SpotlightCard = ({
  children,
  className = "",
  as: Tag = "div",
}: SpotlightCardProps) => {
  const ref = useRef<HTMLElement>(null);

  const setVar = (name: string, value: string) =>
    ref.current?.style.setProperty(name, value);

  const handleMouseMove: React.MouseEventHandler<HTMLElement> = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setVar("--spot-x", `${e.clientX - rect.left}px`);
    setVar("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <Tag
      ref={ref as React.RefObject<any>}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVar("--spot-opacity", "1")}
      onMouseLeave={() => setVar("--spot-opacity", "0")}
      onFocus={() => setVar("--spot-opacity", "1")}
      onBlur={() => setVar("--spot-opacity", "0")}
      className={`spotlight-card relative overflow-hidden ${className}`}
    >
      <div aria-hidden="true" className="spotlight-card__glow" />
      {children}
    </Tag>
  );
};
