/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // import the poppins font from google fonts
      extend: {
        fontFamily: {
          body: ['Poppins'],
        },
      },
  },
  plugins: [],
}

