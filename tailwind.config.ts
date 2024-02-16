import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#F0EDCF",
        primary2: "#EEEDEB",
        secondary: "#0B60B0",
        point: "#40A2D8",
      },
      fontSize: {
        1624: ["16px", "24px"],
        2024: ["20px", "24px"],
        2842: ["28px", "42px"],
      },
    },
  },
  plugins: [],
};
export default config;
