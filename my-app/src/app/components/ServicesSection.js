// src/app/components/ServicesSection.js
import Link from 'next/link';
import Image from 'next/image';
import { services } from '../data';

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#496937] text-white relative overflow-hidden" id="services">
      
      
      <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
        

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">

            <span className="text-[11px] border border-white/40 px-5 py-1.5 rounded-full font-medium tracking-wide mt-2">
              Услуги
            </span>

            <h2 className="text-3xl md:text-[40px] font-bold leading-[1.15]">
              Мы предоставляем <br/>
              <span className="font-cursive font-normal text-[36px] md:text-[48px] text-white/95 inline-block my-1">
                строгую качественную
              </span><br/>
              медицинскую помощь <br/>
              вашим питомцам
            </h2>
          </div>

          <div className="flex gap-2 mt-4 md:mt-0">
            <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
              &larr;
            </button>
            <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
              &rarr;
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {services.map((service, index) => (
            <Link 
              href={`/services/${service.id}`} 
              key={service.id} 
              className={`
                relative overflow-hidden rounded-[25px] flex flex-col p-6 min-h-[260px] group transition-all duration-300
                ${index === 0 ? 'bg-[#E56E24]' : 'bg-[#547A51]'}
                ${service.image ? 'justify-end' : 'justify-between'}
              `}
            >
              {service.image && (
                <>
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover object-bottom opacity-80 group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </>
              )}

         {(service.iconImage || service.icon) && (
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center relative z-10 mb-4">
                  {service.iconImage ? (
                    <Image 
                      src={service.iconImage} 
                      alt={service.title} 
                      width={28} 
                      height={28} 
                      className="object-contain" 
                    />
                  ) : (
                    <span className="text-2xl">{service.icon}</span>
                  )}
                </div>
              )}

              <div className="relative z-10 mt-auto">
                <h3 className="text-lg font-bold leading-tight">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/#services" 
            className="bg-[#E56E24] text-white px-12 py-3.5 rounded-xl font-semibold hover:bg-[#d9641a] transition inline-block text-sm"
          >
            ВСЕ УСЛУГИ
          </Link>
        </div>

      </div>
    </section>
  );
}