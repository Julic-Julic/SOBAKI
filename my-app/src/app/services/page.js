import HeroSection from './components/HeroSection';
import PromoSlider from './components/PromoSlider';
import FeaturesGrid from './components/FeaturesGrid';
import ContactForm from './components/ContactForm';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PromoSlider />
      <FeaturesGrid />
      
      {/* Вызов врача на дом */}
      <section className="bg-vetLight py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 relative h-[400px] w-full rounded-3xl overflow-hidden">
             {/* Временно используем dog-hero.png */}
             <Image src="/dog-hero.png" alt="Врач" fill className="object-cover object-bottom" />
          </div>
          <div className="md:w-1/2 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Вызов врача на дом</h2>
            <p className="text-white/80 mb-8 max-w-sm text-sm">Вашему питомцу требуется неотложная помощь? Приедем в течение 40 минут!</p>
            <ContactForm buttonText="отправить" />
          </div>
        </div>
      </section>

      <ServicesSection />
      <TeamSection />

      {/* Записаться на прием */}
      <section className="bg-vetLight py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="md:w-1/2 relative h-[400px] w-full rounded-3xl overflow-hidden">
             {/* Временно используем dog-hero.png */}
             <Image src="/dog-hero.png" alt="Собака" fill className="object-cover" />
          </div>
          <div className="md:w-1/2 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Запишитесь на прием <br/><span className="italic font-light">прямо сейчас!</span></h2>
            <p className="text-white/80 mb-8 max-w-sm text-sm">Не откладывайте профилактику и лечение заболеваний питомца, оставляйте заявку и наш менеджер свяжется с вами</p>
            <ContactForm buttonText="отправить" />
          </div>
        </div>
      </section>
    </main>
  );
}