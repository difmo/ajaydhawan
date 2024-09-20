/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx,vue}",
    flowbite.content(),

  ],
  theme: {
    extend: {
      colors: {
        neutralSilver: "#000",
        neutralDgrey: "#fff",
        brandPrimary: "#11baf9",
        neutralGray: "#fff",
        mybg: "#003049",
      },
    },
  },
  plugins: [ flowbite.plugin(),
  ],
};
