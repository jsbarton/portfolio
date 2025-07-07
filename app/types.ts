import { StaticImageData } from "next/image";

export type Project = {
  name: string;
  gifUrl: string;
  link: string;
};

export type Skill = {
  name: string;
  image: StaticImageData;
};
