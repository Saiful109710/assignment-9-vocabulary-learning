/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'text-gradient': 'linear-gradient(90deg, #6F00FF, #ff758c, #ff6a63)',
      },
    },
  },
  plugins: [require('daisyui'),],
}

