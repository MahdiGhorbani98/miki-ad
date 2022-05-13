module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    scale: {
      0: "0",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      97: ".97",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
    },
    extend: {
      colors: {
        primary: "#F7AE04",
        secondary: "#e93e68",
        "gray-750": "#2b3544",
      },
      boxShadow: {
        "my-shadow":
          "0 0px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
