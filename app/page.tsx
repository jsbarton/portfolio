"use client";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import {
  pageWrapper,
} from "./styles";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import InterestsSection from "./components/InterestsSection";
import IntroSection from "./components/IntroSection";

export default function Home() {
  const aboutRef = useRef(null);
  const interestsRef = useRef(null);
  const projectsRef = useRef(null);
  
  return (
    <>
      <div className={pageWrapper}>
        <IntroSection aboutRef={aboutRef} interestsRef={interestsRef} projectsRef={projectsRef}/>
        <ProjectsSection ref={projectsRef} />
        <AboutSection ref={aboutRef} />
        <InterestsSection ref={interestsRef} />
      </div>
    </>
  );
}
