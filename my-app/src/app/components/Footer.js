import Image from 'next/image';

export default function Footer() {
  return (

    <footer className="bg-[#496937] py-12 px-4">

      <div className="container mx-auto max-w-[1200px]">
        <div className="bg-white rounded-[40px] overflow-hidden flex flex-col md:flex-row min-h-[450px] shadow-xl">

          <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-between">

            <div>
              <Image 
                src="/log.png" 
                alt="Доктор Тома" 
                width={140} 
                height={120} 
                className="object-contain" 
              />
            </div>
            <div className="mt-auto pt-16">
              <p className="text-gray-900 font-medium mb-1">Подольск, ул. Чайковского, 48А</p>
              <p className="text-gray-900 font-bold mb-6">+7 (956) 6796 43 66</p>
              <p className="text-xs text-gray-400">Круглосуточно</p>
            </div>

            <div className="mt-12 pt-6 border-t border-gray-200 flex flex-wrap gap-x-6 gap-y-2 text-[11px] text-gray-400">
              <a href="#" className="hover:text-[#F17021] transition">Договор оферты</a>
              <a href="#" className="hover:text-[#F17021] transition">Политика конфиденциальности</a>
              <a href="#" className="hover:text-[#F17021] transition">Доктор Тома</a>
            </div>
            
          </div>

          <div className="w-full md:w-1/2 h-[350px] md:h-auto relative bg-gray-200">
            <iframe 
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a2b3c4d5e6f7g8h9i0j&source=constructor" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              title="Карта" 
              className="absolute inset-0 w-full h-full grayscale-[30%] hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>

        </div>
      </div>
    </footer>
  );
}