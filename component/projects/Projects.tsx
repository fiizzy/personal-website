import Image from "next/image";
import { useState } from "react";
import { Button } from "../button/Button";
import { Section } from "../section/Section";
import { IProject, projectData } from "./projectsData";

import appstore from "../../public/appstore.png";
import playstore from "../../public/playstore.png";

// Enough to show range without burying the rest of the page
const INITIAL_COUNT = 6;

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projectData : projectData.slice(0, INITIAL_COUNT);
  const hiddenCount = projectData.length - INITIAL_COUNT;

  const toggle = () => {
    if (showAll) {
      document.getElementById("projects")?.scrollIntoView({ block: "start" });
    }
    setShowAll(!showAll);
  };

  return (
    <Section id="projects" title="Projects">
      <div id="project-grid" className="grid gap-6 md:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      {hiddenCount > 0 && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={toggle}
            aria-expanded={showAll}
            aria-controls="project-grid"
            className="group inline-flex h-12 items-center gap-2 rounded-xl border border-fg/15 bg-fg/[0.03] px-6 font-normal text-fg/90 transition-colors hover:border-fg/30 hover:bg-fg/[0.08] hover:text-fg"
          >
            {showAll
              ? "Show fewer projects"
              : `Show all ${projectData.length} projects`}
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className={`h-3.5 w-3.5 transition-transform duration-200 ${showAll ? "rotate-180" : ""}`}
            >
              <path
                d="M4 6l4 4 4-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </Section>
  );
};

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <article className="project-card flex flex-col overflow-hidden rounded-2xl border border-fg/10">
      <div className="project-media flex h-72 items-center justify-center p-6 md:h-80">
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          loading="lazy"
          className="h-auto max-h-full w-auto max-w-full rounded-xl object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <h3 className="text-7 font-bold">{project.name}</h3>
        <p className="mt-3 max-w-[60ch] text-4 leading-relaxed text-fg/80">
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
          {project.website && (
            <Button link={project.website} title="Visit website" />
          )}
          {project.github && <Button link={project.github} title="GitHub" />}
          {project.ios && (
            <a
              href={project.ios}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Download ${project.name} on the App Store`}
              className="flex rounded-lg transition-opacity hover:opacity-80"
            >
              <Image src={appstore} alt="" height={44} width={157} />
            </a>
          )}
          {project.android && (
            <a
              href={project.android}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Get ${project.name} on Google Play`}
              className="flex rounded-lg transition-opacity hover:opacity-80"
            >
              <Image src={playstore} alt="" height={44} width={158} />
            </a>
          )}
          {project.readMore && (
            <Button link={project.readMore} title="Read More" />
          )}
        </div>
      </div>
    </article>
  );
};
