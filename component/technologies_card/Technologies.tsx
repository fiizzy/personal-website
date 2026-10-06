import Image from "next/image";
import { Section } from "../section/Section";
import { ITechnology, stack } from "./stack";

export const Technologies = () => {
  return (
    <Section id="stack" title="Stack">
      <dl className="divide-y divide-fg/10 rounded-2xl border border-fg/10 bg-surface px-6 md:px-10">
        {stack.map((group) => (
          <div
            key={group.type}
            className="grid gap-3 py-6 md:grid-cols-[220px_1fr] md:items-center md:gap-8 md:py-7"
          >
            <dt className="text-2 uppercase tracking-[0.16em] text-fg/65">
              {group.type}
            </dt>
            <dd className="m-0">
              <ul className="flex flex-wrap gap-2">
                {group.data.map((tech) => (
                  <li key={tech.name}>
                    <Tag tech={tech} />
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
};

const Tag = ({ tech }: { tech: ITechnology }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={tech.url}
      className="inline-flex items-center gap-2 rounded-lg border border-fg/10 bg-fg/[0.03] px-3 py-2 text-3 md:text-4 text-fg/85 transition-colors hover:border-fg/25 hover:bg-fg/[0.07] hover:text-fg"
    >
      <span className={`flex ${tech.mono ? "mono-icon" : ""}`}>
        <Image src={tech.image} alt="" height={18} width={18} />
      </span>
      {tech.name}
    </a>
  );
};
