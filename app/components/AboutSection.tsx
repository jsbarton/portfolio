import { MutableRefObject } from "react";
import { contentWrapper, title } from "../styles";
import {
  about,
  degree,
  education,
  experience,
  experiences,
  school,
} from "../utils";

type Props = {
  ref: MutableRefObject<any>;
};

const AboutSection = ({ ref }: Props) => {
  return (
    <div className={contentWrapper} ref={ref}>
      <div className={title}>{about}</div>
      <div className="grid grid-cols-2 gap-6 ml-[16px]">
        <div className="bg-gray-300 p-8 rounded-2xl text-2xl">
          <div className="pb-4">{education}</div>
          <div>{degree}</div>
          <div className="font-bold">{school}</div>
        </div>
        <div className="bg-gray-300 p-8 rounded-2xl text-2xl">
          <div className="pb-4">{experience}</div>
          {experiences.map((exp, i) => (
            <div key={i}>{exp}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
