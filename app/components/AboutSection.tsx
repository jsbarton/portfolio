import { MutableRefObject } from "react";
import { contentWrapper, title } from "../styles";
import {
  about,
  companyOne,
  companyTwo,
  degree,
  education,
  experience,
  experiencesOne,
  experiencesTwo,
  school,
} from "../utils";

type Props = {
  ref: MutableRefObject<any>;
};

const AboutSection = ({ ref }: Props) => {
  return (
    <div className={`${contentWrapper} items-center`} ref={ref}>
      <div className={title}>{about}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-[16px]">
        <div className="bg-babyBlue p-8 rounded-2xl text-m md:text-2xl">
          <div className="text-center pb-4">{education}</div>
          <div>{degree}</div>
          <div className="font-extrabold">{school}</div>
        </div>
        <div className="bg-babyBlue p-8 rounded-2xl text-m md:text-2xl">
          <div className="text-center pb-4">{experience}</div>
          <div className="pb-4">
            <div className="font-bold">{companyOne}</div>
            {experiencesOne.map((exp, i) => (
              <div key={i}>{exp}</div>
            ))}
          </div>
          <div className="font-extrabold">{companyTwo}</div>
          {experiencesTwo.map((exp, i) => (
            <div key={i}>{exp}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
