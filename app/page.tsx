"use client";
import Image from "next/image";
import ProfilePic from "./i/profile-pic.jpg";
import GitHubLogo from "./i/github-mark-white.svg";
import LinkedInLogo from "./i/linked-in-logo.png";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import {
  contentWrapper,
  externalLinksWrapper,
  introWrapper,
  pageWrapper,
  profilePicture,
  refsWrapper,
  sectionWrapper,
  title,
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
          <div className={sectionWrapper}>
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
          <div className={sectionWrapper}>
            <div>
              <span
                className={`inline-block overflow-hidden text-2xl whitespace-nowrap`}
              >
                {currentWelcomeText}
              </span>
              <span className="inline-block h-6 mb-[2px] w-[2px] animate-blinkCaret bg-white ml-2" />
            </div>
            <div>
              <span
                className={`inline-block overflow-hidden text-2xl whitespace-nowrap`}
              >
                {secondLineWelcomeText}
              </span>
              <span className="inline-block h-6 mb-[2px] w-[2px] animate-blinkCaretv2 bg-white ml-2" />
            </div>
            <div>
              <span
                className={`inline-block overflow-hidden text-2xl whitespace-nowrap`}
              >
                {thirdLineWelcomeText}
              </span>
              <span className="inline-block h-6 mb-[2px] w-[2px] animate-blinkCaretv3 bg-white ml-2" />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col justify-around overflow-y-auto px-8">
            <div className={contentWrapper} ref={projectsRef}>
              <p className={title}>Project 1</p>
              <p>Here's information about project 1</p>
              <p>Maybe a demo will be here too</p>
            </div>

            <div className={contentWrapper}>
              <p className={title}>Project 2</p>
              <p>Here's information about project 2</p>
              <p>Maybe a demo will be here too</p>
            </div>
          </div>
        </div>
        <div className={contentWrapper} ref={aboutRef}>
          <p className={title}>About</p>
          {/* Move messages to another file */}
          <p>
            I'm Jordan, I grew up in Prince George's County, Maryland and
            attended the University of Maryland, College Park where I received
            my Bachelor's in Computer Science.
          </p>
          <p>
            When I'm not coding, I enjoy sewing, trying new recipes, shopping,
            and traveling.
          </p>
          <p>
            I've compiled some of my work here. If you'd like to collaborate on
            a project, chat about my work, or just say hi, please feel free to
            reach out!
          </p>
        </div>
      </div>
    </>
  );
}
