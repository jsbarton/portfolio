"use client";
import Image from "next/image";
import ProfilePic from "./i/profile-pic.jpg";
import GitHubLogo from "./i/github-mark-white.svg";
import LinkedInLogo from "./i/linked-in-logo.png";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { contentWrapper, title } from "./styles/styles";

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

  // TODO: Break out into its own component
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
      <div className="flex flex-col">
        <div className="flex h-screen items-center justify-center w-full relative">
          <div className="flex flex-col">
            <Image
              alt="my-face"
              className="max-w-[100px] max-h-[100px] rounded-full"
              src={ProfilePic}
            />
            <div className="pt-2" onClick={() => handleScroll(projectsRef)}>
              Projects
            </div>
            <div className="pt-4" onClick={() => handleScroll(aboutRef)}>
              About
            </div>
            <div className="flex h-5 w-5 my-5">
              <Image alt="github-logo" src={GitHubLogo} />
              <Image alt="linkedin-logo" src={LinkedInLogo} />
            </div>
          </div>
          <div className="flex flex-col">
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
