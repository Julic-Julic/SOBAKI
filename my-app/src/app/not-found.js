// src/app/not-found.js
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-vetBgLight">
      <h1 className="text-7xl font-bold text-vetOrange mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-vetGreenDark mb-6">Упс! Страница не найдена</h2>
      <p className="text-gray-500 mb-8 max-w-md">Возможно, вы ввели неверный адрес, или эта страница была удалена. Но наши врачи всё ещё на месте!</p>
      <Link href="/" className="bg-vetOrange text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg">
        Вернуться на главную
      </Link>
    </div>
  );
}