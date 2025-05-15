import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // 'media' for system preference
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        babyBlue: "#e1f1ff",
        ivory: "#FFFFF0",
      },
      animation: {
        blinkCaretLineOne: "blinkCaret 1s steps(1) 2",
        blinkCaretLineTwo: "blinkCaret 1s steps(1) 4 2s",
        blinkCaretLineThree: "blinkCaret 1s steps(1) 2 6s",
        blinkCaretLineFour: "blinkCaret 1s steps(1) infinite 8s",
        "ring-fill": "fill 2s ease-out forwards",
      },
      keyframes: {
        fill: {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
        typing: {
          "0%": { width: "0" },
          "50%": { width: "50%" },
          "100%": { width: "100%" },
        },
        blinkCaret: {
          "0%, 100%": { backgroundColor: "transparent" },
          "50%": { backgroundColor: "var(--midpoint-bg)" }, // this is going to be a problem in light/dark mode
        },
      },
    },
  },
  plugins: [],
  safelist: [{ pattern: /animate-blinkCaret.*/ }],
} satisfies Config;
