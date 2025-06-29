/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#292F36", 
        surfaceDark: "#1A1E23", 
        textPrimary: "#98FAEC", 
        textAccent: "#12F7D6", 
      },
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
