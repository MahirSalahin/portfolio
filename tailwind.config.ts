import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Modern color palette with both light and dark variants
        primary: {
          50: "#eef7ff",
          100: "#d9edff",
          200: "#bce0ff",
          300: "#8accff",
          400: "#4eb1ff",
          500: "#2493ff",
          600: "#0a75ff",
          700: "#0061eb",
          800: "#084ec2",
          900: "#0c4499",
          950: "#0a2657",
        },
        accent: {
          50: "#f4f7ff",
          100: "#e8eeff",
          200: "#d1deff",
          300: "#abc4ff",
          400: "#819dff",
          500: "#5b73ff",
          600: "#3e4aff",
          700: "#2f35eb",
          800: "#272dbd",
          900: "#252b95",
          950: "#171a54",
        },
        dark: {
          100: "#d5d7e0",
          200: "#acaebf",
          300: "#8c8fa3",
          400: "#666980",
          500: "#4d4f66",
          600: "#34354a",
          700: "#292a3d",
          800: "#141625",
          900: "#0c0d1a",
        },
      },
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "slide-down": "slideDown 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
        "gradient-subtle": "linear-gradient(to right, var(--tw-gradient-stops))",
        "dot-pattern": "radial-gradient(circle, currentColor 1px, transparent 1px)",
      },
      boxShadow: {
        "inner-lg": "inset 0 2px 15px 0 rgb(0 0 0 / 0.05)",
        glow: "0 0 15px 2px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;