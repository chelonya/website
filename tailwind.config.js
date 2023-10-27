/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        silver: "#a7bfc7",
        black: "#000",
        esmeralda: "#3b7a7d",
        teal: "#157075",
        darkslategray: "#0c6267",
        lightblue: "#9bc0c2",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        lato: "Lato",
        inherit: "inherit",
        "open-sans-hebrew": "'Open Sans Hebrew'",
      },
    },
    fontSize: {
      "21xl": "40px",
      xl: "20px",
      "13xl": "32px",
      mini: "15px",
      "29xl": "48px",
      "11xl": "30px",
      "45xl": "64px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
