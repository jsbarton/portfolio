import { MutableRefObject } from "react";
import { contentWrapper, title } from "../styles";
import {
  about,
  degree,
  education,
  experience,
  experiences,
  school,
} from "../messages";

type Props = {
  ref: MutableRefObject<any>;
};

const AboutSection = ({ ref }: Props) => {
  return (
    <div className={contentWrapper} ref={ref}>
      <div className={title}>{about}</div>
      <div className="grid grid-cols-2 ml-[16px]">
        <div className="">
          {education}
          <div>{degree}</div>
          {/** TODO: Make bold font work */}
          <div className="font-bold">{school}</div>
        </div>
        <div className="">
          {experience}
          {experiences.map((exp, i) => (
            <div key={i}>{exp}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
