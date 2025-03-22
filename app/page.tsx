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

export default function Home() {
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
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
            {/** These aren't visible because they're white/transparent */}
            <div className={externalLinksWrapper}>
              <Image alt="github-logo" src={GitHubLogo} />
              <Image alt="linkedin-logo" src={LinkedInLogo} />
            </div>
          </div>
          <div className={`${sectionWrapper} min-w-[50%] ml-[50px]`}>
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
        {/** Section inspo: https://fonts.google.com/download/next-steps - fill empty space with "coming soon!" */}
        <div className={contentWrapper} ref={projectsRef}>
          <p className={title}>Projects</p>
          {/** Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            <div className={gridBlock}>Item 1</div>
            <div className={gridBlock}>Item 2</div>
            <div className={gridBlock}>Item 3</div>
            <div className={gridBlock}>Item 4</div>
            <div className={gridBlock}>Item 5</div>
            <div className={gridBlock}>Item 6</div>
          </div>
        </div>
        <div className={contentWrapper} ref={aboutRef}>
          {/** TODO: Make About its own component */}
          <p className={title}>About</p>
        </div>
      </div>
    </>
  );
}
