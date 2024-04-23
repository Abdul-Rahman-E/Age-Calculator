/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Smokey: "hsl(0, 1%, 44%)",
        Off_white: "hsl(0, 0%, 94%)",
        purple: "hsl(259, 100%, 65%)",
      },
      fontFamily: {
        Poppins: ["Poppins"],
      },
      fontSize: {
        myinput: "36px",
        spanmyinput: "39px",
        lginput: "45px",
        spaninput: "48px",
      },
    },
  },
  plugins: [],
};
