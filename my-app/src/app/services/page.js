// src/app/services/[slug]/page.js
import { notFound } from 'next/navigation';
import { services } from '../../data';
import Link from 'next/link';

export default function ServicePage({ params }) {
  const service = services.find((s) => s.id === params.slug);

  if (!service) {
    notFound(); // Вызовет кастомную 404 страницу
  }

  return (
    <div className="pt-32 pb-20 bg-vetBgLight min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/#services" className="text-vetOrange font-semibold mb-8 inline-block hover:underline">
          &larr; Назад ко всем услугам
        </Link>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm">
          <div className="text-6xl mb-6">{service.icon}</div>
          <h1 className="text-3xl md:text-4xl font-bold text-vetGreenDark mb-6">{service.title}</h1>
          <p className="text-lg text-gray-600 mb-8">{service.desc}</p>
          
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Как проходит процедура?</h3>
            <p className="text-gray-600 mb-4">
              Наши специалисты используют только современное оборудование и проверенные методики. 
              Мы обеспечиваем максимальный комфорт и безопасность для вашего питомца на всех этапах.
            </p>
            <button className="bg-vetOrange text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
              Записаться на услугу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}