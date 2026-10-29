import Link from 'next/link';
import { services } from '../data';

export default function ServicesSection() {
  return (
    <section className="py-20 bg-vetGreenDark text-white" id="services">
      <div className="container mx-auto px-4 text-center">
        <span className="text-sm border border-white/30 px-3 py-1 rounded-full mb-4 inline-block">Услуги</span>
        <h2 className="text-4xl font-bold mb-12">
          Мы предоставляем <br/>
          <span className="italic font-light">медицинскую помощь</span><br/>
          вашим питомцам
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <Link 
              href={`/services/${service.id}`} 
              key={service.id} 
              className="bg-white/10 p-6 rounded-2xl hover:bg-white/20 transition text-left group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm opacity-70 mb-4">{service.desc}</p>
              <span className="text-vetOrange font-semibold text-sm">Подробнее &rarr;</span>
            </Link>
          ))}
        </div>
        
        <Link 
          href="/#services" 
          className="bg-vetOrange text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition inline-block"
        >
          ВСЕ УСЛУГИ
        </Link>
      </div>
    </section>
  );
}