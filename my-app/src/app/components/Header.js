"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="absolute top-0 w-full z-50 text-white py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          {/* Фильтр делает логотип белым */}
          <Image src="/logo.png" alt="Доктор Тома" width={140} height={50} className="object-contain brightness-0 invert" priority />
        </Link>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <span>Парковый, ул.Чайковского, 48А</span>
          <a href="tel:+79660764366" className="hover:text-vetOrange transition">+7 (966) 076 43 66</a>
        </div>
      </div>
    </header>
  );
}