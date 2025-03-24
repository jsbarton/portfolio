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
      animation: {
        blinkCaretLineOne: "blinkCaret 1s steps(1) 2",
        blinkCaretLineTwo: "blinkCaret 1s steps(1) 5 2s", 
        blinkCaretLineThree: "blinkCaret 1s steps(1) infinite 7s", 
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
      }
    },
  },
  plugins: [],
  safelist: [{ pattern: /animate-blinkCaret.*/ }],
} satisfies Config;
