"use client";
import Image from "next/image";
import ProfilePic from "./i/profile-pic.jpg";
import GitHubLogo from "./i/github-mark-white.svg";
import LinkedInLogo from "./i/linked-in-logo.png";
import { MutableRefObject, useRef } from "react";

export default function Home() {
  const contentWrapper = "w-50 h-screen my-10";
  const title = "text-3xl pb-6";
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const handleScroll = (ref: MutableRefObject<any>) => {
    console.log("clicked");
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const introMessages: string[] = [
    "Hi, I'm Jordan. I'm a Software Engineer,",
    "Welcome to my portfolio.",
  ];

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col h-screen items-center justify-center w-full relative">
          {/** enter animation */}
          <div className="flex w-[300px]">
            <span className="inline-block animate-typingWithBackspace pb-3 h-6 overflow-hidden bg-red-500 whitespace-nowrap w-0">
              Hi, I'm Jordan. I'm a Software Engineer.
            </span>
            <span className="inline-block h-5 w-[1px] animate-blinkCaret bg-white ml-1" />
          </div>
          <div className="flex">
            <div className="inline-block animate-typing pb-3 h-6 overflow-hidden bg-red-500 whitespace-nowrap">
              Welcome to my portfolio.
            </div>
            <span className="inline-block h-5 w-[1px] animate-blinkCaret bg-white ml-1" />
          </div>
          <Image
            alt="my-face"
            className="max-w-[100px] max-h-[100px] rounded-full"
            src={ProfilePic}
          />
          <div className="pt-4" onClick={() => handleScroll(aboutRef)}>
            About
          </div>
          <div className="pt-2" onClick={() => handleScroll(projectsRef)}>
            Projects
          </div>
          <div className="flex h-5 w-5 my-5">
            <Image alt="github-logo" src={GitHubLogo} />
            <Image alt="linkedin-logo" src={LinkedInLogo} />
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col justify-around overflow-y-auto px-8">
            <div className={contentWrapper} ref={aboutRef}>
              <p className={title}>About</p>
              <p>
                My name is Jordan Barton and I am a Software Developer from
                Prince George's County Maryland
              </p>
              <p>
                When I'm not coding, I enjoy sewing, trying new recipes,
                shopping, and traveling
              </p>
              <p>
                I've compiled some of my work here, and would love to connect
                with you!
              </p>
            </div>
            <div className={contentWrapper} ref={projectsRef}>
              <p className={title}>Project 1</p>
              <p>Here's information about project 1</p>
              <p>Maybe a demo will be here too</p>
            </div>

            <div className={contentWrapper}>
              <p className={title}>Project 2</p>
              <p>Here's information about project 1</p>
              <p>Maybe a demo will be here too</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
