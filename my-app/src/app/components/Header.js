"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 w-full z-50 pt-2 px-4">
      <div className="container mx-auto max-w-7xl bg-white rounded-[20px] shadow-sm py-4 px-6 flex justify-between items-center">

        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Логотип" width={40} height={40} className="object-contain" />
          <span className="font-bold text-lg text-vetOrange uppercase tracking-wide hidden sm:block">
            Доктор Тома
          </span>
        </Link>

        <div className="hidden md:block text-xs text-gray-500 text-center">
          <p>Работаем круглосуточно</p>
          <p className="font-medium text-gray-700">Подольск, ул.Чайковского, 48А</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="tel:+795667964366" className="font-bold text-sm text-gray-800 hover:text-vetOrange transition">
            +7 (956) 6796 43 66
          </a>

          <button 
            className="flex flex-col gap-1.5 w-6" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Меню"
          >
            <div className="w-full h-[2px] bg-gray-800"></div>
            <div className="w-full h-[2px] bg-gray-800"></div>
            <div className="w-full h-[2px] bg-gray-800"></div>
          </button>
        </div>
      </div>

                  {isOpen && (
        <div className="absolute top-24 left-100 right-20 bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4 z-50">
            <a href="#home" onClick={() => setIsOpen(false)} className="font-semibold text-gray-800 hover:text-[#F17021] transition">Главная</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="font-semibold text-gray-800 hover:text-[#F17021] transition">Услуги</a>
            <a href="#team" onClick={() => setIsOpen(false)} className="font-semibold text-gray-800 hover:text-[#F17021] transition">Специалисты</a>
            <a href="#appointment" onClick={() => setIsOpen(false)} className="font-semibold text-[#F17021] mt-2 border-t border-gray-100 pt-4">Записаться на прием</a>
        </div>
      )}
    </header>
  );
}