// src/app/components/Footer.js
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Левая часть с контактами */}
        <div className="md:w-1/2 bg-gray-50 p-8 rounded-2xl flex flex-col justify-between">
          <div>
            <Image src="/logo.png" alt="Доктор Тома" width={150} height={50} className="mb-6 grayscale opacity-80 object-contain" />
            <p className="text-sm text-gray-600 mb-2">Парковый пр., Чайковского, 48А</p>
            <p className="text-sm font-bold text-gray-800 mb-8">+7 (966) 076 43 66</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 text-xs text-gray-400">
            <a href="#" className="hover:text-vetOrange transition">Политика конфиденциальности</a>
            <a href="#" className="hover:text-vetOrange transition">Согласие на обработку персональных данных</a>
          </div>
        </div>
        
        {/* Правая часть с картой */}
        <div className="md:w-1/2 h-[300px] rounded-2xl overflow-hidden bg-gray-200 relative">
          <iframe 
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a2b3c4d5e6f7g8h9i0j&source=constructor" 
            width="100%" height="100%" frameBorder="0" title="Карта" className="absolute inset-0">
          </iframe>
        </div>
      </div>
    </footer>
  );
}