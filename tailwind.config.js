/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#685DC5",
        secondary: "#535353",
        third: "#4FA16C",
        furth: "#808080",
        nav: "#523c94",
        "white-200": "#DADADA",
      },
      fontFamily: {
        primary: "Apercu",
      },
      fontSize: {
        title: "48px",
        body: "22px",
        other: "26px",
        sm: "18px",
        xs: "16px",
      },
      lineHeight: {
        title: "56px",
        body: "32px",
      },
    },
    container: {
      padding: "2rem",
      center: true,
    },
  },
  plugins: [],
};
