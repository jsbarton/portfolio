"use client";
import { useRef } from "react";
import { pageWrapper } from "./styles";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import IntroSection from "./components/IntroSection";
import NavigationSection from "./components/NavigationSection";
import { DarkModeProvider } from "./hooks/useIsDarkMode";

export default function Home() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  return (
    <DarkModeProvider>
      <div className={pageWrapper}>
        <NavigationSection
          aboutRef={aboutRef}
          interestsRef={skillsRef}
          projectsRef={projectsRef}
        />
        <IntroSection />
        <ProjectsSection ref={projectsRef} />
        <AboutSection ref={aboutRef} />
        <SkillsSection ref={skillsRef} />
      </div>
    </DarkModeProvider>
  );
}
