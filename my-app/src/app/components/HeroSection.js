import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-[#F07020] pt-40 pb-20 min-h-[750px] flex flex-col items-center justify-start overflow-hidden">

      <div className="absolute inset-0 flex justify-center items-end z-0">
        <div className="relative w-full max-w-[800px] h-[80%]">
          <Image 
            src="/dog-hero.png" 
            alt="Собака Доктор Тома" 
            fill 
            className="object-contain object-bottom" 
            priority
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.2] mb-6 max-w-4xl">
          Доктор Тома — ветеринарная<br/>
          клиника <span className="font-cursive font-normal text-[64px] leading-none">безусловной любви</span>
        </h1>
        
        <p className="text-white text-sm md:text-base font-medium max-w-md mx-auto mb-8">
          Полный спектр услуг: от диагностики<br/>и лечения, до медицинского сопровождения<br/>питомцев разного вида и возраста
        </p>
        
        <button className="bg-[#3D5B43] text-white px-8 py-4 rounded-xl font-semibold hover:bg-black transition flex items-center gap-3 mx-auto shadow-lg">
          {/* Убедитесь, что картинка лапки белая */}
          <Image src="/paws.png" alt="Лапка" width={20} height={20} className="object-contain brightness-0 invert" />
          записаться на прием
        </button>
      </div>
    </section>
  );
}