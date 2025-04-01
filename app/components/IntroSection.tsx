import {
  blinkCaretAnimation,
  externalLinksWrapper,
  introWrapper,
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

  useEffect(() => {
    const lines = [
      { text: "Name: Jordan Barton", setter: setCurrentWelcomeText },
      {
        text: "Current Position: Fullstack Engineer II @ Quizlet",
        setter: setSecondLineWelcomeText,
      },
      { text: "Location: New York, NY", setter: setThirdLineWelcomeText },
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
    <div className={introWrapper}>
      <div className={`${sectionWrapper} items-center mt-[125px]`}>
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
      <div className={`${sectionWrapper} min-w-[55%] ml-[50px]`}>
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
      </div>
    </div>
  );
};

export default IntroSection;
