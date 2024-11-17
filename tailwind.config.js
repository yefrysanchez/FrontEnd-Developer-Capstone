/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: "#495E57",
        yellow: "#F4CE14",
        cream: "#FBDABB",
        salmon: "#EE9972",
        black: "#333333",
      },
      borderRadius: {
        corners: "16px"
      }
    },
  },
  plugins: [],
}