/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'flip-rotate': 'flipRotate 0.7s linear infinite',
      },
    },
  },
  plugins: [],
}