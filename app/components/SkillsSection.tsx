import { MutableRefObject } from "react";
import { contentWrapper, skillImageWrapper, subTitle, title } from "../styles";

import { languages, skillsTitle, technologiesFrameworks } from "../utils";
import Image from "next/image";

type Props = {
  ref: MutableRefObject<any>;
};

const SkillsSection = ({ ref }: Props) => {
  return (
    <div className={contentWrapper} ref={ref}>
      <div className={title}>{skillsTitle}</div>
      <div className={subTitle}>Languages</div>
      <div className="flex items-center justify-evenly px-10 py-8">
        {languages.map((language, i) => (
          <div key={i} className={`flex flex-col items-center group`}>
            <Image
              alt=""
              className={`group-hover:w-[90px] group-hover:h-[90px] ${skillImageWrapper} transition duration-300 ease-in`}
              src={language.image}
            />
            <div className="opacity-0 group-hover:opacity-100">
              {language.name}
            </div>
          </div>
        ))}
      </div>
      <div className={subTitle}>Technologies & Frameworks</div>
      <div className="flex items-center justify-evenly px-10 py-8">
        {technologiesFrameworks.map((framework, i) => (
          <div key={i} className={`flex flex-col items-center group`}>
            <Image
              alt=""
              className={`group-hover:w-[90px] group-hover:h-[90px] ${skillImageWrapper} transition duration-300 ease-in`}
              src={framework.image}
            />
            <div className="opacity-0 group-hover:opacity-100">
              {framework.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
