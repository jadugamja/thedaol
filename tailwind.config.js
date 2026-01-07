const config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0bbdb4",
        "primary-dark": "#0a9c94",
        secondary: "#213b8a",
        "secondary-light": "#2f4fb3",
        "background-light": "#f6f8f8",
        "background-dark": "#131f1e",
        "surface-light": "#f8fafc",
        "vision-bg": "#f0f2f2",
        "vision-dark-bg": "#1a2625",
        "text-main": "#1e29sb",
        "text-sub": "#64748b",
        "paper-light": "#FFFFFF",
        "paper-dark": "#1E1E1E",
        "text-light": "#333333",
        "text-dark": "#E0E0E0",
      },
      fontFamily: {
        sans: ['"Noto Sans KR"', "Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        body: ["Noto Sans KR", "sans-serif"],
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
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
};

export default config;
