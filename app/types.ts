import { StaticImageData } from "next/image";

export type Project = {
  name: string;
  videoUrl: string;
  link: string;
};

export type Skill = {
  name: string;
  image: StaticImageData;
};
