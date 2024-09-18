/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#252B42",
        secondary: "#FF7B47",
        light: "#737373",
        brand: "#EAB308",
        iconColor: "#0D5C63"
      },
      fontSize: {
        subtopic: "40px",
      }
    },
  },
  plugins: [],
};
