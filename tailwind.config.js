/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: { // Usado para adicionar la nueva fuente
        sans: 'Fira Code, sans-serif',
      },
    extend: {},
  },
  plugins: [],
}
