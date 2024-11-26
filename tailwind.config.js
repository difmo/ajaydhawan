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
        neutralSilver: "#0000",
        neutralDgrey: "#fff",
        brandPrimary: "#FF4200",
        neutralGray: "#fff",
        mybg: "#003049",
      },
    },
  },
  plugins: [],
};
