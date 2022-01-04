module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: {
          5: "#D0EFED",
          10: "#1EBFC1",
        },
        black: {
          10: "#0D1111",
          20: "#2F3A3B",
          25: "#070707",
        },
        gray: {
          10: "#5D6564",
          20: "#767E7E",
          25: "#9DA6A5",
        },
        orange: {
          10: "#FF8282",
        },
        yellow: {
          10: "#FFC147",
        },
        purple: {
          10: "#BF83FF",
        },
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      fontSize: {
        "2.5xl": ["32px", "40px"],
        "1.5xl": ["22px", "30px"],
        "4.5xl": ["42px", "50px"],
        "7xl": ["62px", "70px"],
      },
    },
  },
  plugins: [],
};
