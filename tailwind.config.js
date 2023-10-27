/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        silver: "#a7bfc7",
        esmeralda: "#3b7a7d",
        black: "#000",
        lightblue: "#9bc0c2",
        teal: "#157075",
        darkslategray: "#0c6267",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        lato: "Lato",
        "open-sans-hebrew": "'Open Sans Hebrew'",
      },
    },
    fontSize: {
      xl: "20px",
      "21xl": "40px",
      "13xl": "32px",
      "45xl": "64px",
      "11xl": "30px",
      mini: "15px",
      "29xl": "48px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
