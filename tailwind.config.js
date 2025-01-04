/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          700: "#002b5b",
          500: "#0d3663",
          200: "#6887aa"
        },
        green:{
          300: "#6887aa",
        },
        gray:{
          400: "#94a3b8",
          200: "#5f718b"
        }
        
      }

    },
  },
  plugins: [],
}

