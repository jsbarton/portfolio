import {
  blinkCaretAnimation,
  externalLinksWrapper,
  introSectionWrapper,
  profilePicture,
  sectionWrapper,
  typingAnimationText,
} from "../styles";
import Image from "next/image";
import ProfilePic from "../i/profile-pic.jpg";
import GitHubLogo from "../i/github-mark.svg";
import LinkedInLogo from "../i/linked-in-logo.png";
import { useEffect, useState } from "react";

const IntroSection = () => {
  const [currentWelcomeText, setCurrentWelcomeText] = useState<string>("");
  const [secondLineWelcomeText, setSecondLineWelcomeText] =
    useState<string>("");
  const [thirdLineWelcomeText, setThirdLineWelcomeText] = useState<string>("");
  const [fourthLineWelcomeText, setFourthLineWelcomeText] =
    useState<string>("");

  useEffect(() => {
    const lines = [
      { text: "Name: Jordan Barton", setter: setCurrentWelcomeText },
      {
        text: "Current Position: Fullstack Engineer II",
        setter: setSecondLineWelcomeText,
      },
      { text: "Company: Quizlet, Inc.", setter: setThirdLineWelcomeText },
      { text: "Location: New York, NY", setter: setFourthLineWelcomeText },
    ];

    let lineIndex = 0;
    let charIndex = 0;
    const interval = setInterval(() => {
      if (lineIndex >= lines.length) {
        clearInterval(interval);
      } else {
        const { text, setter } = lines[lineIndex];
        charIndex++;

        setter(text.slice(0, charIndex));

        if (charIndex === text.length) {
          lineIndex++;
          charIndex = 0;
        }
      }
    }, 100);

    /** If this effect runs again or the component unmounts, clean up this interval */
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={introSectionWrapper}>
      <div className={`${sectionWrapper} items-center justify-center`}>
        <Image alt="my-face" className={profilePicture} src={ProfilePic} />
        <div className={externalLinksWrapper}>
          <Image
            className="max-w-[100%] mr-2"
            alt="github-logo"
            onClick={() => window.open("https://github.com/jsbarton", "_blank")}
            src={GitHubLogo}
          />
          <Image
            className="min-w-[100%]"
            alt="linkedin-logo"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/jordan-barton-88350b159/",
                "_blank"
              )
            }
            src={LinkedInLogo}
          />
        </div>
      </div>
      <div
        className={`${sectionWrapper} bg-babyBlue min-h-[175px] lg:mb-[60px] lg:ml-[50px] p-6 rounded-2xl self-center text-[#0a0a0a] min-w-[375px] md:min-w-[675px]`}
      >
        <div>
          <span className={typingAnimationText}>{currentWelcomeText}</span>
          <span className={blinkCaretAnimation("LineOne")} />
        </div>
        <div>
          <span className={typingAnimationText}>{secondLineWelcomeText}</span>
          <span className={blinkCaretAnimation("LineTwo")} />
        </div>
        <div>
          <span className={typingAnimationText}>{thirdLineWelcomeText}</span>
          <span className={blinkCaretAnimation("LineThree")} />
        </div>
        <div>
          <span className={typingAnimationText}>{fourthLineWelcomeText}</span>
          <span className={blinkCaretAnimation("LineFour")} />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
