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
        gold: "#906c37ff",
        beige: "#fbefbfff",
        teal: "#4d7e8c",
        green:"#1c3d1cff",
        sand: "#f3f0edff",
        pink: "#f5a7c1ff"
      },
      fontFamily: {
        heading: ["Playfair Display SC", "serif"],
        body: ["Tenor Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
