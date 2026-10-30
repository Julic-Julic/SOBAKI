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
      
      <section id="appointment" className="bg-[#496937] py-20">
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
      <section className="bg-[#496937] py-20">
        <div className="container mx-auto px-4 max-w-[1100px]">
    
          <div className="relative bg-[#74806A] rounded-[50px] overflow-hidden min-h-[500px] flex items-center shadow-xl">

            <Image 
              src="/dog-collar.jpg" 
              alt="Собака в ошейнике" 
              fill 
              className="object-cover object-left-bottom md:object-center" 
            />
   
            <div className="relative z-10 w-full md:w-1/2 p-10 md:p-14 ml-auto text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
                Запишитесь на прием <br/>
                <span className="font-cursive font-normal text-4xl md:text-[44px] text-white/95">прямо сейчас!</span>
              </h2>
              
              <p className="text-white/80 mb-8 max-w-sm text-sm">
                Не откладывайте профилактику и лечение заболеваний питомца, оставьте заявку и наш менеджер свяжется с вами
              </p>
              
              <ContactForm buttonText="ОТПРАВИТЬ" />
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}