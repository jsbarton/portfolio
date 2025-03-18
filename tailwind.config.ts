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
        blinkCaret: "blinkCaret 1s steps(1) infinite", // Cursor blink
      },
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "50%": { width: "50%" },
          "100%": { width: "100%" },
        },
        blinkCaret: {
          "0%, 100%": { backgroundColor: "transparent" },
          "50%": { backgroundColor: "black" }, // this is going to be a problem in light/dark mode
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
