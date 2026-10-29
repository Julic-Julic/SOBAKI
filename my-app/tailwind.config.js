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
        vetOrange: '#F17021', // Оранжевый
        vetDark: '#3D5B43',   // Темно-зеленый
        vetLight: '#557A5F',  // Светло-зеленый (для фонов форм)
        vetGray: '#F2F2F2',   // Светло-серый для карточек
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};