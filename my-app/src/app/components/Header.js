// src/app/components/Header.js
"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 w-full z-50 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Логотип */}
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="Доктор Тома" 
            width={150} 
            height={50} 
            className="object-contain" 
          />
        </Link>
        
        {/* Контакты (десктоп) */}
        <div className="hidden md:flex items-center space-x-8 text-sm">
          <span>Парковый, ул.Чайковского, 48А</span>
          <a href="tel:+79660764366" className="font-bold text-lg hover:text-vetOrange transition">
            +7 (966) 076 43 66
          </a>
        </div>

        {/* Кнопка мобильного меню (бургер) */}
        <button 
          className="md:hidden z-50 flex flex-col gap-1.5" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Меню"
        >
          <div className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Выпадающее мобильное меню */}
      {isOpen && (
        <div className="fixed inset-0 bg-vetGreenDark flex flex-col items-center justify-center space-y-6 text-xl md:hidden">
          <Link href="/" onClick={() => setIsOpen(false)}>Главная</Link>
          <Link href="/#services" onClick={() => setIsOpen(false)}>Услуги</Link>
          <Link href="/#team" onClick={() => setIsOpen(false)}>Специалисты</Link>
          <a href="tel:+79660764366" className="font-bold text-vetOrange mt-4">+7 (966) 076 43 66</a>
        </div>
      )}
    </header>
  );
}