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
        primary: '#000000',
        secondary: '#F7F7F7',
      },
      fontFamily: {
        'nike': ['Futura Bold Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
