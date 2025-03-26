import { MutableRefObject } from "react";
import {
  contentWrapper,
  interestWrapper,
  skillImageWrapper,
  title,
} from "../styles";
import PHPIcon from "../i/php.svg";
import ReactIcon from "../i/react.svg";
import CSSIcon from "../i/css.svg";
import SQLIcon from "../i/sql.svg";
import TypescriptIcon from "../i/ts.png";
import PythonIcon from "../i/python.svg";
import KotlinIcon from "../i/kotlin.svg";
import ElasticSearchIcon from "../i/elasticsearch.svg";
import GitIcon from "../i/git.svg";
import TailwindIcon from "../i/tailwind.svg";
import NextIcon from "../i/nextjs.svg";
import JavaIcon from "../i/java.svg";
import { Skill } from "../types";
import { skillsTitle } from "../messages";
import Image from "next/image";

type Props = {
  ref: MutableRefObject<any>;
};

const languages: Skill[] = [
  {
    name: "Typescript",
    image: TypescriptIcon,
  },
  {
    name: "CSS",
    image: CSSIcon,
  },
  {
    name: "PHP",
    image: PHPIcon,
  },
  {
    name: "SQL",
    image: SQLIcon,
  },
  {
    name: "Python",
    image: PythonIcon,
  },
  {
    name: "Java",
    image: JavaIcon,
  },
  {
    name: "Kotlin",
    image: KotlinIcon,
  },
];

const technologiesFrameworks: Skill[] = [
  {
    name: "React",
    image: ReactIcon,
  },
  {
    name: "Next.js",
    image: NextIcon,
  },
  {
    name: "Git",
    image: GitIcon,
  },
  {
    name: "ElasticSearch",
    image: ElasticSearchIcon,
  },
  {
    name: "TailwindCSS",
    image: TailwindIcon,
  },
];

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
