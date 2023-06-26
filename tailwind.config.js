/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: 16,
    },
    extend: {
      colors: {
        "mid-gray": {
          1: "#5B6871",
          4: "#9AA6AC",
          5: "#B0BABF",
        },
        "light-gray": {
          2: "#DDE2E4",
          4: "#EEF0F2",
        },
        "dark-gray": {
          2: "#252C32",
        },
        red: {
          600: "#F2271C",
        },
        modal: "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
