/**
 * Global styles.
 */

export const pageWrapper = "flex flex-col";
export const sectionWrapper = "flex flex-col";
export const introSectionWrapper =
  "flex flex-col lg:flex-row font-medium h-screen justify-center";

/**
 * Styles for Portfolio intro.
 */

export const introWrapper =
  "flex h-screen items-center justify-center w-full relative";
export const profilePicture = "w-[150px] h-[150px] rounded-full";
export const refsWrapper = "pt-2";
export const externalLinksWrapper = "flex h-5 justify-center my-5 w-5";
export const typingAnimationText =
  "inline-block overflow-hidden text-s md:text-2xl whitespace-nowrap";
export const blinkCaretAnimation = (lineVersion: string) =>
  `inline-block h-3 md:h-5 mb-[5px] w-[3px] md:w-[6px] animate-blinkCaret${lineVersion} bg-babyBlue ml-2`;

/**
 * Styles for Projects and About section.
 */

export const contentWrapper = "h-screen flex flex-col my-10 w-50";
export const title = "mt-8 ml-4 mb-6 self-center text-3xl";
export const subTitle = "ml-4 mb-6 self-center text-2xl";
export const gridBlock =
  "bg-gray-100 hover:bg-gray-300 h-[200px] p-4 relative group rounded-2xl transition duration-300 ease-in";
export const skillImageWrapper = "h-[75px] w-[75px] md:w-[100px] md:h-[100px]";
export const interestTitleAndDescription = "flex flex-col";
export const interestTitle = "text-2xl";
