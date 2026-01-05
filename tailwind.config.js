const config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0bbdb4",
        "primary-dark": "#0a9c94",
        secondary: "#213b8a",
        "secondary-light": "#2f4fb3",
        "background-light": "#ffffff",
        "surface-light": "#f8fafc",
        "text-main": "#1e293b",
        "text-sub": "#64748b",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Noto Sans KR", "sans-serif"],
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
      },
    },
  },
};

export default config;
