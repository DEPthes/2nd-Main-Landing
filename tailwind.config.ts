import type { Config } from "tailwindcss";

const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) } as any;
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) } as any;
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) } as any;
const px0_1000 = { ...Array.from(Array(1001)).map((_, i) => `${i}px`) } as any;
const rem0_5 = {
  ...Array.from(Array(60)).map((_, i) => `${i / 10}rem`),
} as any;

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "!./node_modules",
  ],
  theme: {
    extend: {
      borderWidth: px0_10,
      fontSize: px0_200,
      lineHeight: px0_100,
      width: px0_1000,
      height: px0_1000,
      maxWidth: px0_1000,
      maxHeight: px0_1000,
      minWidth: px0_1000,
      minHeight: px0_1000,
      spacing: px0_200,
      borderRadius: px0_100,
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      zIndex: {
        toggle: "1",
        header: "50",
      },
      screens: {
        mobile: "768px",
        tablet: "820px",
      },
    },
    fontFamily: {
      pretendard: ["pretendard"],
    },
  },

  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("tailwindcss-animated"),
  ],
};

export default config;
