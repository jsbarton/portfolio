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
import { Skill } from "./types";
/**
 * Messages for Projects section.
 */


export const projectsTitle: string = "Projects";

/**
 * Messages for About section.
 */
export const about: string = "About";
export const degree: string =
  "Bachelor of Science Computer Science, Statistics Minor";
export const education: string = "Education";
export const experience: string = "Experience";
export const experiences: string[] = [
  "Fullstack Engineer II | Activation & Retention | Quizlet, Inc.",
  "Fullstack Engineer I | SEO, Search, & Recommendations | Quizlet, Inc.",
  "Fullstack Engineer Intern | SEO | Quizlet, Inc.",
  "CodeU Participant | Google",
];
export const school: string = "University of Maryland, College Park";

/**
 * Messages for Interests section.
 */

export const skillsTitle: string = 'Skills';

export const fashionInterestDescription: string = '';

// ========== Skills Section ==========
export const languages: Skill[] = [
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

export const technologiesFrameworks: Skill[] = [
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

