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
        neutralSilver: "orange",
        neutralDgrey: "blue",
        brandPrimary: "red",
        neutralGray: "skyblue",
        gray900: "gray",
      },
    },
  },
  plugins: [ flowbite.plugin(),
  ],
};
