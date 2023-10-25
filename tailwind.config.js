/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        silver: "#a7bfc7",
        black: "#000",
        darkslategray: "#0c6267",
        teal: "#157075",
      },
      spacing: {},
      fontFamily: {
        lato: "Lato",
      },
    },
    fontSize: {
      xl: "20px",
      "21xl": "40px",
      "29xl": "48px",
      "11xl": "30px",
      mini: "15px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
