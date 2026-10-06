import Image from "next/image";
import { Button } from "../button/Button";
import { Section } from "../section/Section";
import { IProject, projectData } from "./projectsData";

import appstore from "../../public/appstore.png";
import playstore from "../../public/playstore.png";

export const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projectData.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
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
