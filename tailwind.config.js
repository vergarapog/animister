/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#489FB5",
        primarydark: "#16697A",
        accent: "#FFA62B",
        // primary: "#001959",
        // secondary: "#ec0047",
        lighttext: "black",
        darktext: "white",
        textoffwhite: "#EDE7E3",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
