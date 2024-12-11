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
        typing: "typing 2s steps(10, end) infinite", // Typing effect
        blinkCaret: "blinkCaret 1s steps(1) infinite", // Cursor blink
      },
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
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
