/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        silver: "#a7bfc7",
        black: "#000",
        teal: {
          "100": "#3b7a7d",
          "200": "#157075",
        },
        gainsboro: "#d9d9d9",
        darkslategray: "#0c6267",
      },
      spacing: {},
      fontFamily: {
        lato: "Lato",
        "open-sans-hebrew": "'Open Sans Hebrew'",
      },
    },
    fontSize: {
      "21xl": "40px",
      xl: "20px",
      "11xl": "30px",
      "13xl": "32px",
      mini: "15px",
      "29xl": "48px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
