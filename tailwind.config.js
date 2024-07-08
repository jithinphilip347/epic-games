/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
      
    },
    screens: {
      sm:'640px',
      md:'768px',
      lg:'960px',
      xl:'1200px',
     },
     fontFamily: {
     'roboto': ['Roboto', 'sans-serif'],
     'poppins': ["Poppins", 'sans-serif'],
      },

    extend: {
      colors: {
        primary:'#000000',
        secondary: '#ffffff',  

       },
    },
  },
  plugins: [],
}