import { MutableRefObject } from "react";
import { about, projectsTitle, skillsTitle } from "../utils";
import DisplayModeButton from "./DarkModeButton";

type Props = {
  aboutRef: MutableRefObject<HTMLDivElement | null>;
  interestsRef: MutableRefObject<HTMLDivElement | null>;
  projectsRef: MutableRefObject<HTMLDivElement | null>;
};

const NavigationSection = ({ aboutRef, interestsRef, projectsRef }: Props) => {
  const handleScroll = (ref: MutableRefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="bg-gradient-to-l from-babyBlue dark:from-slate-700 to-transparent flex font-medium justify-evenly py-6 self-end sticky top-0 w-full md:w-[500px] z-50">
      <DisplayModeButton />
      <div onClick={() => handleScroll(projectsRef)}>{projectsTitle}</div>
      <div onClick={() => handleScroll(aboutRef)}>{about}</div>
      <div onClick={() => handleScroll(interestsRef)}>{skillsTitle}</div>
    </div>
  );
};

export default NavigationSection;
