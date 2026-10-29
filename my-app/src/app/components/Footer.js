import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4 h-[300px]">
        <div className="md:w-1/3 bg-gray-50 p-8 rounded-2xl flex flex-col justify-between border border-gray-100">
          <div>
            <Image src="/logo.png" alt="Доктор Тома" width={120} height={40} className="mb-6 object-contain" />
            <p className="text-sm text-gray-800 font-medium mb-1">Парковый пр., Чайковского, 48А</p>
            <p className="text-sm font-bold text-gray-800 mb-6">+7 (966) 076 43 66</p>
          </div>
          <div className="flex flex-col gap-2 text-[10px] text-gray-400">
            <a href="#" className="hover:text-vetOrange transition underline decoration-gray-300">Политика конфиденциальности</a>
            <a href="#" className="hover:text-vetOrange transition underline decoration-gray-300">Согласие на обработку персональных данных</a>
          </div>
        </div>
        
        <div className="md:w-2/3 rounded-2xl overflow-hidden bg-gray-200 relative">
          <iframe 
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a2b3c4d5e6f7g8h9i0j&amp;source=constructor" 
            width="100%" height="100%" frameBorder="0" title="Карта" className="absolute inset-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-500">
          </iframe>
        </div>
      </div>
    </footer>
  );
}