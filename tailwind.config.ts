import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#16202B",
        steel: "#5B6B7C",
        mist: "#9FB0BE",
        cloud: "#F5F7F8",
        paper: "#FCFDFD",
        aqua: "#14B8C6",
        cobalt: "#2E6FE0",
        gold: "#C7A249",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        "smile-gradient": "linear-gradient(90deg, #14B8C6 0%, #2E6FE0 100%)",
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        drawline: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        drawline: "drawline 0.9s cubic-bezier(.22,1,.36,1) forwards",
        fadeUp: "fadeUp 0.7s cubic-bezier(.22,1,.36,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
