module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": {
          100: "#202022",
          200: "#31363c ",
          300: "#1d222a",
          400: "#1d222a",
        },
        "green": {
          100: "#29a587",
          200: "#29a587",
          300: "rgb(100, 244, 172, .7)",
          400: "#05ff82",
          500: "#28e98c",
          600: "#28e98c",
          700:"#29A587"
        },
        "red": {
          100: "#rgb(255, 0, 0, .4)",
          200: "#ff0000",
        },
        "white": {
          100: "#FBF9F7",
          200: "#fff",
          300: "#fff"
        },
        "gray": {
          100:"#FBF9F7"
        },
        "blue": {
          200: "#4898f0",
          400: "#503cef",
          600: "#513cef",
          800: "#140e32"
        }

      }
    },
  },
  plugins: [],
}
