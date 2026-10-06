import React, { Children, isValidElement, ReactNode } from "react";

interface IBlurWords {
  children: ReactNode;
  // Delay before the first word, in ms
  delay?: number;
  // Gap between consecutive words, in ms
  stagger?: number;
}

// Splits text into words that sharpen in one after another, inspired by
// React Bits BlurText. Unlike BlurText it accepts nested elements such as
// links, which animate as a single unit so their underline stays continuous.
// It is pure CSS, so it renders on the server and needs no extra library.
export const BlurWords = ({ children, delay = 0, stagger = 32 }: IBlurWords) => {
  let index = 0;
  const nextStyle = () => ({
    animationDelay: `${delay + index++ * stagger}ms`,
  });

  return (
    <>
      {Children.map(children, (child) => {
        if (typeof child === "string") {
          return child.split(/(\s+)/).map((part, i) =>
            part === "" || /^\s+$/.test(part) ? (
              part
            ) : (
              <span key={i} className="blur-word" style={nextStyle()}>
                {part}
              </span>
            )
          );
        }
        if (isValidElement(child)) {
          return (
            <span className="blur-word" style={nextStyle()}>
              {child}
            </span>
          );
        }
        return child;
      })}
    </>
  );
};
