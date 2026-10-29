import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-vetOrange pt-32 pb-20 md:pt-40 md:pb-32 min-h-[600px] flex items-center">
      {/* Картинка собаки на фоне */}
      <div className="absolute bottom-0 right-0 w-full md:w-[60%] h-[50%] md:h-full pointer-events-none">
        <Image 
          src="/dog-hero.png" 
          alt="Собака" 
          fill 
          className="object-contain object-bottom md:object-right" 
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2] mb-6">
            Доктор Тома — ветеринарная<br/>
            клиника <span className="italic font-light">добрых сердец</span>
          </h1>
          <p className="text-white text-base md:text-lg mb-8 font-medium max-w-md">
            Полный спектр услуг: от диагностики<br/>и лечения, до медицинского сопровождения<br/>питомцев разного вида и возраста
          </p>
          <button className="bg-vetDark text-white px-8 py-4 rounded-xl font-semibold hover:bg-black transition flex items-center gap-3">
            <Image src="/paws 1 (1).png" alt="Лапка" width={20} height={20} className="object-contain" />
            записаться на прием
          </button>
        </div>
      </div>
    </section>
  );
}