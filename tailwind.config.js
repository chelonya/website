/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: "#0c6267",
        teal: "#157075",
        silver: "#a7bfc7",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        lato: "Lato",
      },
    },
    fontSize: {
      "29xl": "48px",
      mini: "15px",
      "21xl": "40px",
      xl: "20px",
      "11xl": "30px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
