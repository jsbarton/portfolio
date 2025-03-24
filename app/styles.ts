/**
 * Global styles.
 */

export const pageWrapper = 'flex flex-col';
export const sectionWrapper = 'flex flex-col';

/**
 * Styles for Portfolio intro.
 */

export const introWrapper = 'flex h-screen items-center justify-center w-full relative';
export const profilePicture = 'max-w-[200px] max-h-[200px] rounded-full'
export const refsWrapper = 'pt-2';
export const externalLinksWrapper = 'flex h-5 my-5 w-5';
export const typingAnimationText = 'inline-block overflow-hidden text-2xl whitespace-nowrap';
export const blinkCaretAnimation = (lineVersion: string) => `inline-block h-5 mb-[5px] w-[6px] animate-blinkCaret${lineVersion} bg-white ml-2`;

/**
 * Styles for Projects and About section.
 */

export const contentWrapper = 'h-screen my-10 w-50';
export const title = 'mt-8 ml-[16px] pb-6 text-3xl';
export const gridBlock = 'bg-gray-100 hover:bg-gray-300 h-[200px] p-4 relative group rounded transition duration-300 ease-in';