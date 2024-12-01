"use client";
import Image from "next/image";
import ProfilePic from "./i/profile_pic.jpg";
import { MutableRefObject, useRef } from "react";

export default function Home() {
  const contentWrapper = "bg-red-500 w-50 h-screen m-10";
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
  return (
    <div className="flex">
      <div className="flex flex-col h-screen items-center justify-center w-1/3">
        <div className="pb-3">Jordan Barton</div>
        <Image
          alt="my face"
          className="max-w-[100px] max-h-[100px] rounded-full"
          src={ProfilePic}
        />
        <div className="pt-4" onClick={() => handleScroll(aboutRef)}>
          About
        </div>
        <div className="pt-2" onClick={() => handleScroll(projectsRef)}>
          Projects
        </div>
      </div>
      <div className="w-0.5 bg-red-500" />
      <div className="flex flex-col justify-around overflow-y-auto w-2/3 px-8">
        <div className={contentWrapper} ref={aboutRef}>
          About
        </div>
        <div className={contentWrapper} ref={projectsRef}>
          Project 1
        </div>
        <div className={contentWrapper}>Project 2</div>
        <div className={contentWrapper}>Project 3</div>
        <div className={contentWrapper}>Project 4</div>
      </div>
    </div>
  );
}
