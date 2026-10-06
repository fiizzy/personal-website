import { ReactNode } from "react";

interface ISection {
  id: string;
  title: string;
  children: ReactNode;
}

export const Section = ({ id, title, children }: ISection) => {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="mt-24 md:mt-32">
      <h2
        id={`${id}-heading`}
        className="mb-8 md:mb-10 text-5 md:text-7 font-light uppercase tracking-[0.18em] text-fg/70"
      >
        {title}
      </h2>
      {children}
    </section>
  );
};
