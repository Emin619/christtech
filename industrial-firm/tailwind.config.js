/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          red: '#C41E3A',
          darkRed: '#991B30',
          blue: '#1E40AF',
          darkBlue: '#172554',
          navy: '#0B1120',
          gray: '#F3F4F6',
          orange: '#F97316',
          yellow: '#EAB308',
        }
      },
    },
  },
  plugins: [],
}
