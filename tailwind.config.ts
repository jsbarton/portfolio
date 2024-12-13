import localFont from "next/font/local";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // animation: [name] [duration] [timing-function] [delay] [iteration-count] [direction];
      animation: {
        typingWithBackspace: "typingWithBackspace 5s steps(25, end) infinite", // Typing effect
        typing: "typing 5s steps(25, end) 1", // Typing effect
        blinkCaret: "blinkCaret 1s steps(1) infinite", // Cursor blink
      },
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "50%": { width: "50%" },
          "100%": { width: "100%" },
        },
        typingWithBackspace: {
          "0%": { width: "0" },
          "25%": { width: "50%" },
          "50%": { width: "100%" },
          "75%": { width: "50%" },
          "100%": { width: "0" },
        },
        blinkCaret: {
          "0%, 100%": { backgroundColor: "transparent" },
          "50%": { backgroundColor: "white" }, // this is going to be a problem in light/dark mode
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
