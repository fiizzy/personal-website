import { ReactNode } from "react";

interface ISection {
  id: string;
  title: string;
  children: ReactNode;
}

// Headings sit in a side column on wide screens so content runs to the
// container's right edge. The Intro uses the same columns.
export const sectionColumns = "lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12";

export const Section = ({ id, title, children }: ISection) => {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`mt-24 grid gap-8 md:mt-32 ${sectionColumns}`}
    >
      <h2
        id={`${id}-heading`}
        className="text-4 font-normal uppercase leading-snug tracking-[0.16em] text-fg/70 lg:sticky lg:top-8 lg:self-start lg:pt-1"
      >
        {title}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
};
