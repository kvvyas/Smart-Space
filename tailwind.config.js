/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Ensure these match your file structure
      "./index.html"
    ],
    theme: {
        extend: {
            colors: {
              customGray: "rgb(58, 58, 58)",
            },
          },
    },
    plugins: [],
  };
    