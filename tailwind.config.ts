import type { Config } from "tailwindcss";
// import bgMob from "/public/img/heroMob.webp";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "hero-image": `url(${bgMob})`,
      // },
      fontFamily: {
        nastup: ["Nastup", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
    },
    screens: {
      sm: "834px",
      xl: "1440px",
    },
  },
  plugins: [],
};
export default config;
