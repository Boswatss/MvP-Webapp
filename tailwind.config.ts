
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        prompt: ["Prompt", "sans-serif"]
      },
      colors: {
        highlight: "#FEC6A1", // Soft orange
      },
      boxShadow: {
        card: "0 4px 32px 0 rgba(122,122,122,0.09)",
      },
      transitionProperty: {
        size: "width, height",
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-in-out",
        "scale-up": "scale-in 0.2s ease-in",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.97)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
