import { MutableRefObject } from "react";
import { contentWrapper, gridBlock, title } from "../styles";
import OpenTabIcon from "./OpenTabIcon";
import { Project } from "../types";

type Props = {
  ref: MutableRefObject<HTMLDivElement | null>;
};

const projects: Project[] = [
  {
    name: "Scratch Notes App",
    gifUrl: "/scratch.gif",
    link: "https://scratchserverless.com/",
  },
  {
    name: "Coming soon!",
    gifUrl: "",
    link: "",
  },
  {
    name: "Coming soon!",
    gifUrl: "",
    link: "",
  },
];

const ProjectsSection = ({ ref }: Props) => {
  return (
    <div className={contentWrapper} ref={ref}>
      <p className={title}>Projects</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 dark:text-slate-700">
        {projects.map((project, i) => (
          <a
            key={i}
            className={gridBlock}
            href={project.link.length > 0 ? project.link : "/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.gifUrl && (
              <div
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                style={{
                  backgroundImage: `url(${project.gifUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            )}
            <div className="relative z-10 group-hover:opacity-100 duration-300 ease-in font-bold pr-1 transition-opacity text-center opacity-0">
              {project.name}
            </div>
            <OpenTabIcon />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
