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
        neutralSilver: "#E5E1DA",
        neutralDgrey: "#365486",
        brandPrimary: "#365486",
        neutralGray: "#3D3B40",
        mybg: "#92C7CF",
      },
    },
  },
  plugins: [ flowbite.plugin(),
  ],
};
