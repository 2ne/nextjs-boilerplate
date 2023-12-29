import type { Config } from "tailwindcss";

// Importing defaultTheme from TailwindCSS
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    letterSpacing: {
      "negative-300": "-.05em",
      "negative-200": "-.025em",
      "negative-100": "-.015em",
      normal: "0",
      100: ".015em",
      200: ".025em",
      300: ".05em",
    },
    extend: {
      colors: {
        primary: {
          "500": "oklch(86.18% 0.22 164.98)",
          "400": "oklch(83.12% 0.22 163.22)",
        },
      },
      maxWidth: {
        "8xl": "84rem",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-serif)", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};

export default config;
