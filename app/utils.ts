import PHPIcon from "./i/php.svg";
import PHPIconLight from "./i/php-light.png";
import ReactIcon from "./i/react.svg";
import CSSIcon from "./i/css.svg";
import SQLIcon from "./i/sql.svg";
import TypescriptIcon from "./i/ts.png";
import PythonIcon from "./i/python.svg";
import KotlinIcon from "./i/kotlin.svg";
import ElasticSearchIcon from "./i/elasticsearch.svg";
import GitIcon from "./i/git.svg";
import TailwindIcon from "./i/tailwind.svg";
import NextIcon from "./i/nextjs.svg";
import NextIconLight from "./i/next-light.png";
import JavaIcon from "./i/java.svg";
import JavaIconLight from "./i/java-light.png";
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
export const companyOne: string = "Quizlet, Inc.";
export const companyTwo: string = "Google";
export const experiencesOne: string[] = [
  "Fullstack Engineer II | Activation & Retention",
  "Fullstack Engineer I | SEO, Search, & Recommendations",
  "Fullstack Engineer Intern | SEO",
];
export const experiencesTwo: string[] = ["CodeU Participant"];
export const school: string = "University of Maryland, College Park";

/**
 * Messages for Interests section.
 */

export const skillsTitle: string = "Skills";

export const fashionInterestDescription: string = "";

// ========== Skills Section ==========
export const languages = (isDarkMode: boolean): Skill[] => [
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
    image: isDarkMode ? PHPIconLight : PHPIcon,
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
    image: isDarkMode ? JavaIconLight : JavaIcon,
  },
  {
    name: "Kotlin",
    image: KotlinIcon,
  },
];

export const technologiesFrameworks = (isDarkMode: boolean): Skill[] => [
  {
    name: "React",
    image: ReactIcon,
  },
  {
    name: "Next.js",
    image: isDarkMode ? NextIconLight : NextIcon,
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
