import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#EEF4FF",
          100: "#E0EAFF",
          200: "#C7D7FE",
          300: "#A5BFFC",
          400: "#5F87C5",
          500: "#2D6494",
          600: "#1B3A5C",
          700: "#163050",
          800: "#102440",
          900: "#0F1B2D",
          950: "#080D17",
        },
        gold: {
          50: "#FFF7EE",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#E8852A",
          600: "#C96A15",
          700: "#A35210",
          800: "#7A3D0C",
          900: "#4D2508",
        },
        burgundy: {
          50: "#EFF8FF",
          100: "#DBEFFE",
          400: "#4AABDF",
          500: "#2B86C4",
          600: "#1E6FA8",
          700: "#155888",
          800: "#0F4268",
          900: "#092C48",
        },
        warm: {
          50: "#FAFAF8",
          100: "#F5F2ED",
          200: "#EDE8DF",
          300: "#E0D9CE",
          400: "#C8BFAF",
          500: "#A89F93",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0F1B2D 0%, #1B3A5C 60%, #0F1B2D 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #E8852A 0%, #FB923C 50%, #E8852A 100%)",
        "warm-gradient": "linear-gradient(180deg, #FAFAF8 0%, #F5F2ED 100%)",
        "navy-gradient":
          "linear-gradient(180deg, #0F1B2D 0%, #1B3A5C 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
        "slide-in-right": "slideInRight 0.7s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "live-ping": "livePing 1.5s ease-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        livePing: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "75%, 100%": { transform: "scale(2)", opacity: "0" },
        },
      },
      boxShadow: {
        gold: "0 4px 24px rgba(232, 133, 42, 0.35)",
        navy: "0 4px 32px rgba(15, 27, 45, 0.35)",
        warm: "0 4px 24px rgba(0, 0, 0, 0.07)",
        card: "0 2px 12px rgba(0, 0, 0, 0.06), 0 8px 32px rgba(0, 0, 0, 0.04)",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "88": "22rem",
        "128": "32rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
