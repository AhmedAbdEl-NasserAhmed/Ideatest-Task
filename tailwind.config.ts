import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        main: "#fafafa",
        secondary: "#f4f4f4",
        borderLight: "#DCE0E5",
        textMuted: "#808B9A"
      }
    }
  },
  plugins: []
};
export default config;
