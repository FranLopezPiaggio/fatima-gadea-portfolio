/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#083A4F",
        gold: "#A58D66",
        lightGold: "#f3d09aff",
        aqua: "#c0d5d6",
        teal: "#4d7e8c",
        sand: "#e5e1dd",
      },
      fontFamily: {
        heading: ["Playfair Display SC", "serif"],
        body: ["Tenor Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
