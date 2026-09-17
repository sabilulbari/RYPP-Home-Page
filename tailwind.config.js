/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#FF1E36',
          'red-hover': '#E01B32',
          dark: '#0B0F19',
          navy: '#111827',
          pink: '#FFF0F2',
          light: '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        script: ['var(--font-caveat)', 'cursive'],
      },
    },
  },
  plugins: [],
}
