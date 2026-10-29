import { Montserrat, Caveat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata = {
  title: 'Доктор Тома — ветеринарная клиника',
  description:
    'Полный спектр услуг: от диагностики и лечения, до медицинского сопровождения питомцев разного вида и возраста',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}