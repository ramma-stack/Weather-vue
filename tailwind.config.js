/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: ["Ubuntu"],
        custom: ['CustomFont', 'rudaw'],
      },
      fontWeight: {
        custom: {
          regular: 400,
          medium: 500,
          semibold: 600,
          bold: 700,
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}