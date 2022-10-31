/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "769px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
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
