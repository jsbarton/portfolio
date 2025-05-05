import { MutableRefObject } from "react";
import { contentWrapper, gridBlock, title } from "../styles";
import OpenTabIcon from "./OpenTabIcon";
import { Project } from "../types";

type Props = {
  ref: MutableRefObject<any>;
};

const projects: Project[] = [
  { name: "Familiar Faces CRM", imgUrl: "", link: "" },
  { name: "Coming soon!", imgUrl: "", link: "" },
  { name: "Coming soon!", imgUrl: "", link: "" },
];
const ProjectsSection = ({ ref }: Props) => {
  return (
    <div className={contentWrapper} ref={ref}>
      <p className={title}>Projects</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {projects.map((project, i) => (
          <div key={i} className={gridBlock}>
            <div className="group-hover:opacity-100 duration-300 ease-in font-bold pr-1 transition-opacity text-center opacity-0">
              {project.name}
            </div>
            <OpenTabIcon />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
