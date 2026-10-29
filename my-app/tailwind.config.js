// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        vetOrange: '#F17021',
        vetDark: '#3D5B43',
        vetLight: '#557A5F',
        vetGray: '#F2F2F2',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        cursive: ['var(--font-marck)', 'cursive'],
      },
    },
  },
  plugins: [],
};