/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Plus Jakarta Sans"', "sans-serif"], // Define your primary font
      },
      fontSize: {
        xs: ["1.2rem", { lineHeight: "1rem" }], // 12px
        sm: ["1.4rem", { lineHeight: "1.25rem" }], // 14px
        base: ["1.6rem", { lineHeight: "1.5rem" }], // 16px
        lg: ["1.8rem", { lineHeight: "1.75rem" }], // 18px
        xl: ["2rem", { lineHeight: "1.75rem" }], // 20px
        "2xl": ["2.4rem", { lineHeight: "2rem" }], // 24px
        "3xl": ["3rem", { lineHeight: "2.25rem" }], // 30px
        "4xl": ["3.6rem", { lineHeight: "2.5rem" }], // 36px
        "5xl": ["4.8rem", { lineHeight: "1" }], // 48px
        "6xl": ["6.3rem", { lineHeight: "1" }], // 60px
      },
      colors: {
        black: "#1b0f25",
        secondary: {
          // DEFAULT: "rgba(235 223 207 1)",
          DEFAULT: "rgb(249 242 233 )",
        },
        rojo: "#E31230",
        purple: "#1C1122",
        green: { DEFAULT: "#34C23A", light: "#37CC3F" },
      },
    },
    plugins: [],
  },
};
