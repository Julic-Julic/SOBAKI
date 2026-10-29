import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
  title: 'Доктор Тома — Ветеринарная клиника',
  description: 'Полный спектр услуг',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${montserrat.className} bg-white antialiased overflow-x-hidden`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}