/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#3B434E",
        primary: "#7653FC",
        primaryRed: "#FC836D",
        primaryGreen: "#1DC37E",
        primaryGreenLight: "#C8F8E4",
      },
    },
    fontFamily: {
      kufi: ["Reem Kufi Fun", "sans-serif"],
      primary: ["Noto Sans", "sans-serif"],
    },
  },
  plugins: [],
};
