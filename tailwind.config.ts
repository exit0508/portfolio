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
        baseText: "#222600",
        baseTextDark: "#ffffe4",
        bg: "#fff",
        bgDark: "#0e0e11",
        cardBg: "#fff",
        cardBgDark: "#18181b",
        primary: "#d5f200",
        secondPrimary: "#9ab500",
        primaryHover: "#9ab500",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
