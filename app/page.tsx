"use client";
import Image from "next/image";
import ProfilePic from "./i/profile-pic.jpg";
import GitHubLogo from "./i/github-mark-white.svg";
import LinkedInLogo from "./i/linked-in-logo.png";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import {
  blinkCaretAnimation,
  contentWrapper,
  externalLinksWrapper,
  gridBlock,
  introWrapper,
  pageWrapper,
  profilePicture,
  refsWrapper,
  sectionWrapper,
  title,
  typingAnimationText,
} from "./styles";
import { about, projects } from "./messages";
import OpenTabIcon from "./OpenTabIcon";

export default function Home() {
  const aboutRef = useRef(null);
  const interestsRef = useRef(null);
  const projectsRef = useRef(null);
  const [currentWelcomeText, setCurrentWelcomeText] = useState<string>("");
  const [isFirstLineComplete, setIsFirstLineComplete] =
    useState<boolean>(false);
  const [isSecondLineComplete, setIsSecondLineComplete] =
    useState<boolean>(false);
  const [secondLineWelcomeText, setSecondLineWelcomeText] =
    useState<string>("");
  const [thirdLineWelcomeText, setThirdLineWelcomeText] = useState<string>("");

  const handleScroll = (ref: MutableRefObject<any>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // TODO: Refactor
  let firstLineBuilder = "";
  let secondLineBuilder = "";
  let thirdLineBuilder = "";
  let firstLineCounter = 0;
  let secondLineCounter = 0;
  let thirdLineCounter = 0;
  const firstLineWelcomeText = "Name: Jordan Barton";
  const secondLineFinalText =
    "Current Position: Fullstack Engineer II @ Quizlet";
  const thirdLineFinalText = "Location: New York, NY";
  useEffect(() => {
    setInterval(() => {
      if (
        firstLineCounter < firstLineWelcomeText.length &&
        isFirstLineComplete === false
      ) {
        firstLineBuilder += firstLineWelcomeText.charAt(firstLineCounter);
        setCurrentWelcomeText(firstLineBuilder);
        firstLineCounter++;
      }
      if (
        firstLineCounter === firstLineWelcomeText.length &&
        secondLineCounter < secondLineFinalText.length &&
        isSecondLineComplete === false
      ) {
        setIsFirstLineComplete(true);
        secondLineBuilder += secondLineFinalText.charAt(secondLineCounter++);
        setSecondLineWelcomeText(secondLineBuilder);
      }

      if (
        secondLineCounter === secondLineFinalText.length &&
        thirdLineCounter < thirdLineFinalText.length
      ) {
        setIsSecondLineComplete(true);
        thirdLineBuilder += thirdLineFinalText.charAt(thirdLineCounter++);
        setThirdLineWelcomeText(thirdLineBuilder);
      }
    }, 100);
  }, []);
  // END TODO

  return (
    <>
      <div className={pageWrapper}>
        <div className={introWrapper}>
          <div className={`${sectionWrapper} items-center mt-[125px]`}>
            <Image alt="my-face" className={profilePicture} src={ProfilePic} />
            <div
              className={refsWrapper}
              onClick={() => handleScroll(projectsRef)}
            >
              {projects}
            </div>
            <div className={refsWrapper} onClick={() => handleScroll(aboutRef)}>
              {about}
            </div>
            <div
              className={refsWrapper}
              onClick={() => handleScroll(interestsRef)}
            >
              Interests
            </div>
            {/** These aren't visible because they're white/transparent */}
            <div className={externalLinksWrapper}>
              <Image alt="github-logo" src={GitHubLogo} />
              <Image alt="linkedin-logo" src={LinkedInLogo} />
            </div>
          </div>
          <div className={`${sectionWrapper} min-w-[55%] ml-[50px]`}>
            <div>
              <span className={typingAnimationText}>{currentWelcomeText}</span>
              <span className={blinkCaretAnimation("LineOne")} />
            </div>
            <div>
              <span className={typingAnimationText}>
                {secondLineWelcomeText}
              </span>
              <span className={blinkCaretAnimation("LineTwo")} />
            </div>
            <div>
              <span className={typingAnimationText}>
                {thirdLineWelcomeText}
              </span>
              <span className={blinkCaretAnimation("LineThree")} />
            </div>
          </div>
        </div>
        {/** TODO: Make Projects its own component */}
        <div className={contentWrapper} ref={projectsRef}>
          <p className={title}>Projects</p>
          {/** Responsive Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            <div className={gridBlock}>
              <OpenTabIcon />
            </div>
            <div className={gridBlock}>
              <OpenTabIcon />
            </div>
            <div className={gridBlock}>
              <OpenTabIcon />
            </div>
            <div className={gridBlock}>
              <OpenTabIcon />
            </div>
            <div className={gridBlock}>
              <OpenTabIcon />
            </div>
            <div className={gridBlock}>
              <OpenTabIcon />
            </div>
          </div>
        </div>
        <div className={contentWrapper} ref={aboutRef}>
          {/** TODO: Make About its own component */}
          <div className={title}>About</div>
          <div className="grid grid-cols-2 ml-[16px]">
            <div className="">
              Education
              <div>Bachelor of Science Computer Science, Statistics Minor</div>
              {/** TODO: Make bold font work */}
              <div className="font-bold">
                University of Maryland, College Park
              </div>
            </div>
            <div className="">
              Experience
              <div>
                Fullstack Engineer II | Activation & Retention | Quizlet, Inc.
              </div>
              <div>
                Fullstack Engineer I | SEO, Search & Recommendations | Quizlet,
                Inc.
              </div>
              <div>Fullstack Engineer Intern | SEO | Quizlet, Inc.</div>
              <div>CodeU Participant | Google </div>
            </div>
          </div>
        </div>
        <div className={contentWrapper} ref={interestsRef}>
          {/** TODO: Make Interests its own component */}
          <div className={title}>Interests</div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <div className="bg-yellow-200 p-4">Food</div>
            <div className="bg-yellow-200 p-4">Fashion</div>
            <div className="bg-yellow-200 p-4">Travel</div>
            <div className="bg-yellow-200 p-4">Health, Wellness, & Community</div>
            <div className="bg-yellow-200 p-4">Animals</div>
          </div>
        </div>
      </div>
    </>
  );
}
