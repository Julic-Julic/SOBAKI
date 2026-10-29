// src/app/page.js
import HeroSection from './components/HeroSection';
import PromoSlider from './components/PromoSlider';
import FeaturesGrid from './components/FeaturesGrid';
import ContactForm from './components/ContactForm';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PromoSlider />
      <FeaturesGrid />
      
      {/* Секция: Вызов врача на дом */}
      <section className="bg-vetGreenLight py-20 relative">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
             <Image src="/dog-hero.png" alt="Врач на дом" fill className="object-cover" />
          </div>
          <div className="md:w-1/2 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Вызов врача на дом</h2>
            <p className="text-white/80 mb-8 max-w-sm">Вашему питомцу требуется неотложная помощь? Приедем в течение 40 минут!</p>
            <ContactForm buttonText="ОТПРАВИТЬ" />
          </div>
        </div>
      </section>

      <ServicesSection />
      <TeamSection />

      {/* Секция: Записаться на прием */}
      <section className="bg-vetGreenLight py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="md:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
             <Image src="/dog-hero.png" alt="Собака" fill className="object-cover" />
          </div>
          <div className="md:w-1/2 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Запишитесь на прием <br/><span className="italic font-light">прямо сейчас!</span></h2>
            <p className="text-white/80 mb-8 max-w-sm">Не откладывайте профилактику и лечение заболеваний питомца, оставьте заявку и наш менеджер свяжется с вами</p>
            <ContactForm buttonText="ОТПРАВИТЬ" />
          </div>
        </div>
      </section>
    </>
  );
}