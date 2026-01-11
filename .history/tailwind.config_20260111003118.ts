import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0bbdb4",
        "primary-dark": "#0a9c94",
        secondary: "#213b8a",
        "secondary-light": "#2f4fb3",
        "background-light": "#fafafa",
        "background-dark": "#131f1e",
        "surface-light": "#f8fafc",
        // "surface-light": "#fcfdff",
        "text-main": "#1e293b",
        "text-sub": "#64748b",
      },
      fontFamily: {
        sans: ["Montserrat", "Inter", "sans-serif"],
        display: ["Montserrat", "sans-serif"],
        body: [
          "Montserrat",
          "Pretendard",
          "var(--font-pretendard)",
          "sans-serif",
        ],
        pretendard: ["Pretendard", "var(--font-pretendard)"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      animation: {
        "spin-slow": "spin 60s linear infinite",
        "spin-reverse-slow": "spin 60s linear infinite reverse",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in-up": "fadeInUp 1s ease-out forwards",
        marquee: "marquee 60s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
