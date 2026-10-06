import { experience } from "./experienceData";

export const ExperienceList = () => {
  return (
    <ol className="divide-y divide-fg/10">
      {experience.map((role) => (
        <li key={role.company} className="py-8 first:pt-0 last:pb-0 md:py-10">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <h2 className="text-6 md:text-7 font-bold">{role.company}</h2>
            <p className="shrink-0 text-3 md:text-4 tabular-nums text-fg/65">
              {role.period}
            </p>
          </div>
          <p className="mt-1 text-5 font-normal text-fg/90">
            {role.role}
            <span className="font-light text-fg/65"> · {role.location}</span>
          </p>
          <p className="mt-1 text-4 text-fg/65">{role.about}</p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-4 md:text-5 leading-relaxed text-fg/80 marker:text-fg/30">
            {role.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
};
