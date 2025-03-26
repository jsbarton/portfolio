import { MutableRefObject } from "react";
import {
  contentWrapper,
  interestWrapper,
  skillImageWrapper,
  title,
} from "../styles";

import { languages, skillsTitle, technologiesFrameworks } from "../utils";
import Image from "next/image";

type Props = {
  ref: MutableRefObject<any>;
};

const SkillsSection = ({ ref }: Props) => {
  return (
    <div className={contentWrapper} ref={ref}>
      <div className={title}>{skillsTitle}</div>
      <div>Languages</div>
      <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {languages.map((language, i) => (
          <div key={i} className={`p-2 ${interestWrapper}`}>
            <Image
              alt=""
              className={skillImageWrapper}
              src={language.image}
            />
            {/* <div className={interestTitleAndDescription}>
              <div className={interestTitle}>{language.name}</div>
            </div> */}
          </div>
        ))}
      </div>
      <div>Technologies & Frameworks</div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {technologiesFrameworks.map((framework, i) => (
          <div key={i}>
            {/* <div>{framework.name}</div> */}
            <Image alt=""className={skillImageWrapper} src={framework.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
