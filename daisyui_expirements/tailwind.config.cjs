/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
    
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a4e9d5",
          secondary: "#6e0d25",
          accent: "#c1aba6",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
       
      },
      "dark",
      "cupcake",
    ],
  },

}
