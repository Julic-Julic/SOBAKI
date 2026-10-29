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
      
      <section className="bg-[#496937] py-20">
      <div className="container mx-auto px-4 max-w-[1100px]">

          <div className="relative bg-[#43453F] rounded-[50px] overflow-hidden min-h-[450px] flex items-center shadow-xl">
            
            <Image 
              src="/doctor-call.png" 
              alt="Врач на дом" 
              fill 
              className="object-cover object-left" 
            />

            <div className="relative z-10 w-full md:w-1/2 p-10 md:p-14 ml-auto text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Вызов врача на дом</h2>
              <p className="text-white/80 mb-8 text-sm max-w-sm">
                Вашему питомцу требуется неотложная помощь? Приедем в течение 40 минут!
              </p>
              
              <ContactForm buttonText="ОТПРАВИТЬ" />
            </div>
            
          </div>
        </div>
      </section>

      <ServicesSection />
      <TeamSection />
    </main>
  );
}