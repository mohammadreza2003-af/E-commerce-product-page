module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColorOrange: "hsl(26, 100%, 55%)",
        primaryColorPaleOrange: "hsl(25, 100%, 94%)",
        darkBlue: "hsl(220, 13%, 13%)",
        darkGrayishBlue: "hsl(219, 9%, 45%)",
        grayishBlue: "hsl(220, 14%, 75%)",
        lightGrayishBlue: "hsl(223, 64%, 98%)",
      },
      fontFamily: {
        kum: ["Kumbh Sans"],
      },
    },
  },
  plugins: [],
};
