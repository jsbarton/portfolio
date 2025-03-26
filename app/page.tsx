"use client";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import {
  pageWrapper,
} from "./styles";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import IntroSection from "./components/IntroSection";

export default function Home() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  
  return (
    <>
      <div className={pageWrapper}>
        <IntroSection aboutRef={aboutRef} interestsRef={skillsRef} projectsRef={projectsRef}/>
        <ProjectsSection ref={projectsRef} />
        <AboutSection ref={aboutRef} />
        <SkillsSection ref={skillsRef} />
      </div>
    </>
  );
}
