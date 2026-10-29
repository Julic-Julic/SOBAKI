// src/app/layout.js
import { Montserrat, Marck_Script } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

// ВАЖНО: добавить variable
const montserrat = Montserrat({ 
  subsets: ['latin', 'cyrillic'], 
  variable: '--font-montserrat' 
});

const marckScript = Marck_Script({ 
  weight: '400', 
  subsets: ['cyrillic', 'latin'], 
  variable: '--font-marck' 
});

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      {/* Добавляем font-sans по умолчанию для всего body */}
      <body className={`${montserrat.variable} ${marckScript.variable} font-sans bg-white antialiased overflow-x-hidden`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}