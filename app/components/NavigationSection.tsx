import { MutableRefObject } from "react";
import { refsWrapper } from "../styles";
import { about, projectsTitle, skillsTitle } from "../utils";
import DisplayMode from "../i/light-mode.png";
import Image from "next/image";

type Props = {
  aboutRef: MutableRefObject<any>;
  interestsRef: MutableRefObject<any>;
  projectsRef: MutableRefObject<any>;
};

const NavigationSection = ({ aboutRef, interestsRef, projectsRef }: Props) => {
  const handleScroll = (ref: MutableRefObject<any>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="flex font-medium justify-evenly py-6 self-end sticky top-0 w-[500px] z-50">
      <Image className="w-[25px] h-[25px]" src={DisplayMode} alt="light mode" />
      <div onClick={() => handleScroll(projectsRef)}>{projectsTitle}</div>
      <div onClick={() => handleScroll(aboutRef)}>{about}</div>
      <div onClick={() => handleScroll(interestsRef)}>{skillsTitle}</div>
    </div>
  );
};

export default NavigationSection;
