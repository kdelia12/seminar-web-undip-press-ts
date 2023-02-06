/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E5D7FE",
          200: "#CBB0FD",
          300: "#AC88F9",
          400: "#9169F4",
          500: "#693AED",
          600: "#502ACB",
          700: "#3A1DAA",
          800: "#281289",
          900: "#1A0B71",
      },
        succes: {
          100: "#F4FCCD",
          200: "#E6FA9C",
          300: "#D0F16A",
          400: "#B8E344",
          500: "#96D10E",
          600: "#7BB30A",
          700: "#629607",
          800: "#4A7904",
          900: "#3A6402",
      },
        info: {
          100: "#CBFCFE",
          200: "#98F3FD",
          300: "#64E1FA",
          400: "#3DCAF5",
          500: "#00A7EF",
          600: "#0081CD",
          700: "#0061AC",
          800: "#00458A",
          900: "#003172",
      },
        warning: {
          100: "#FFF2CE",
          200: "#FFE19D",
          300: "#FFCC6D",
          400: "#FFB848",
          500: "#FF960C",
          600: "#DB7708",
          700: "#B75B06",
          800: "#934203",
          900: "#7A3102",
      },
        danger: {
          100: "#FFE4D3",
          200: "#FFC2A8",
          300: "#FF997C",
          400: "#FF725C",
          500: "#FF3126",
          600: "#DB1B22",
          700: "#B71326",
          800: "#930C27",
          900: "#7A0728",
      },},
    },
  },
  plugins: [],
}
