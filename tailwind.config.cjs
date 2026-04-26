/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Instrument Serif", "serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"]
      },
      colors: {
        brand: {
          900: "#0E2A20",
          800: "#14382B",
          700: "#1D4B39"
        },
        mint: {
          200: "#EAF3EC",
          100: "#F3F8F4"
        },
        sage: {
          300: "#9DBA93"
        },
        neutral: {
          950: "#101614",
          900: "#1B241F",
          700: "#4C5A53",
          100: "#DCE7DF",
          50: "#F7FAF8"
        },
        accent: {
          gold: "#C8B27A"
        }
      },
      spacing: {
        section: "clamp(4.25rem, 8vw, 8rem)",
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem"
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      },
      boxShadow: {
        card: "0 24px 54px -34px rgba(14, 42, 32, 0.45)",
        soft: "0 18px 38px -28px rgba(14, 42, 32, 0.42)",
        glow: "0 24px 65px -35px rgba(5, 26, 19, 0.76)"
      }
    }
  },
  plugins: []
};
