import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Adjust based on your project structure
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}"
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
