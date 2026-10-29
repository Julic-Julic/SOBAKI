import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-vetOrange pt-32 pb-0 md:pt-40 min-h-[600px] flex items-end overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between w-full h-full">
        
        {/* Текстовая часть */}
        <div className="md:w-1/2 pb-20 md:pb-32">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.15] mb-6">
            Доктор Тома — ветеринарная<br/>
            клиника <span className="italic font-light">добрых сердец</span>
          </h1>
          <p className="text-white text-sm md:text-base mb-8 font-medium max-w-md">
            Полный спектр услуг: от диагностики<br/>и лечения, до медицинского сопровождения<br/>питомцев разного вида и возраста
          </p>
          <button className="bg-vetDark text-white px-8 py-4 rounded-xl font-semibold hover:bg-black transition flex items-center gap-3">
            <Image src="/paws 1 (1).png" alt="Лапка" width={20} height={20} className="object-contain brightness-0 invert" />
            записаться на прием
          </button>
        </div>

        {/* Фото собаки */}
        <div className="md:w-1/2 relative h-[300px] md:h-[600px] w-full mt-10 md:mt-0">
          <Image 
            src="/dog-hero.png" 
            alt="Собака" 
            fill 
            className="object-contain object-bottom md:object-right-bottom" 
            priority
          />
        </div>

      </div>
    </section>
  );
}