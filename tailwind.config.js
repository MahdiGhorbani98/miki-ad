module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#dd2f6e",
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
