import { MutableRefObject } from "react";
import { contentWrapper, gridBlock, title } from "../styles";
import OpenTabIcon from "./OpenTabIcon";
import { Project } from "../types";

type Props = {
  ref: MutableRefObject<any>;
};

const projects: Project[] = [
  { name: "sample name", imgUrl: "", link: "" },
  { name: "sample name", imgUrl: "", link: "" },
  { name: "sample name", imgUrl: "", link: "" },
];
const ProjectsSection = ({ ref }: Props) => {
  return (
    <div className={contentWrapper} ref={ref}>
      <p className={title}>Projects</p>
      {/** Responsive Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {projects.map((project, i) => (
          <div key={i} className={gridBlock}>
            <OpenTabIcon />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
