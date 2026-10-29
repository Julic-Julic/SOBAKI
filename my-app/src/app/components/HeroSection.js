// src/app/components/HeroSection.js
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[600px] bg-vetOrange flex items-center justify-center overflow-hidden">
      {/* Фоновая картинка собаки */}
      <div className="absolute inset-0">
        <Image 
          src="/dog-hero.png" 
          alt="Собака Доктор Тома" 
          fill 
          className="object-contain object-bottom md:object-right" 
          priority
        />
      </div>
      
      {/* Текстовый контент */}
      <div className="relative z-10 container mx-auto px-4 text-center md:text-left md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
          Доктор Тома — ветеринарная<br/>
          клиника <span className="italic font-light">добрых сердец</span>
        </h1>
        <p className="text-white text-lg md:text-xl mb-8">
          Полный спектр услуг: от диагностики<br/>и лечения, до медицинского сопровождения<br/>питомцев разного вида и возраста
        </p>
        
        {/* Кнопка с иконкой лапки (используем картинку лапки) */}
        <button className="bg-vetGreenDark text-white px-8 py-4 rounded-full font-semibold hover:bg-black transition flex items-center gap-2 mx-auto md:mx-0">
          <Image src="/paws 1 (1).png" alt="Лапка" width={20} height={20} className="object-contain" />
          Записаться на прием
        </button>
      </div>
    </section>
  );
}