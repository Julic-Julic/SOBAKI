// src/app/layout.js
import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
  title: 'Доктор Тома — Ветеринарная клиника',
  description: 'Полный спектр услуг: от диагностики и лечения, до медицинского сопровождения питомцев разного вида и возраста',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${montserrat.className} bg-vetBgLight flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}