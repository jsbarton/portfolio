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
    videoUrl: "/scratch.mp4",
    link: "https://scratchserverless.com/",
  },
  {
    name: "Python AI Agent",
    videoUrl: "/ai_agent.mp4",
    link: "https://github.com/jsbarton/python_ai_agent",
  },
  {
    name: "Coming soon!",
    videoUrl: "",
    link: "",
  },
];

// Helper function to determine if URL is a video
const isVideoUrl = (url: string): boolean => {
  const videoExtensions = [".mp4", ".webm", ".ogg", ".mov", ".avi"];
  return videoExtensions.some((ext) => url.toLowerCase().endsWith(ext));
};

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
            {project.videoUrl &&
              (isVideoUrl(project.videoUrl) ? (
                <video
                  className="absolute top-0 left-0 w-full h-full z-0"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={project.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div
                  className="absolute top-0 left-0 w-full h-full object-cover z-0"
                  style={{
                    backgroundImage: `url(${project.videoUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              ))}
            <div
              className={`relative z-10 group-hover:opacity-100 duration-300 ease-in font-bold pr-1 transition-opacity text-center opacity-0 ${i === 1 ? "text-white" : ""}`}
            >
              {project.name}
            </div>
            <OpenTabIcon color={i == 1 ? "white" : undefined} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
