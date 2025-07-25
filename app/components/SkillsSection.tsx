import { MutableRefObject } from "react";
import { contentWrapper, skillImageWrapper, subTitle, title } from "../styles";

import { languages, skillsTitle, technologiesFrameworks } from "../utils";
import Image from "next/image";
import { useIsDarkMode } from "../hooks/useIsDarkMode";

type Props = {
  ref: MutableRefObject<HTMLDivElement | null>;
};

const SkillsSection = ({ ref }: Props) => {
  const { isDarkMode } = useIsDarkMode();
  return (
    <div className={contentWrapper} ref={ref}>
      <div className={title}>{skillsTitle}</div>
      <div className={subTitle}>Languages</div>
      <div className="grid grid-cols-2 md:grid-cols-7 md:gap-8 px-10 py-8">
        {languages(isDarkMode).map((language, i) => (
          <div key={i} className={`flex flex-col items-center group`}>
            <Image
              alt=""
              className={`${skillImageWrapper} transition duration-300 ease-in`}
              src={language.image}
            />
            <div className="opacity-0 group-hover:opacity-100">
              {language.name}
            </div>
          </div>
        ))}
      </div>
      <div className={subTitle}>Technologies & Frameworks</div>
      <div className="grid grid-cols-2 md:grid-cols-5 md:gap-8  px-10 py-8">
        {technologiesFrameworks(isDarkMode).map((framework, i) => (
          <div key={i} className={`flex flex-col items-center group`}>
            <Image
              alt=""
              className={`${skillImageWrapper} transition duration-300 ease-in`}
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
