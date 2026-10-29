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
        vetOrange: '#E76F20', // Цвет кнопок и акцентов
        vetGreenDark: '#3A5B44', // Темно-зеленый фон
        vetGreenLight: '#537A5D', // Светло-зеленый фон
        vetBgLight: '#F8F8F8', // Светлый фон страницы
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};