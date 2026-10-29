import Link from 'next/link';
import { services } from '../data';

export default function ServicesSection() {
  return (
    <section className="py-20 bg-vetDark text-white" id="services">
      <div className="container mx-auto px-4 text-center">
        <span className="text-xs border border-white/30 px-4 py-1.5 rounded-full mb-6 inline-block">Услуги</span>
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Мы предоставляем <br/>
          <span className="italic font-light">медицинскую помощь</span><br/>
          вашим питомцам
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {services.map((service, index) => (
            <Link href={`/services/${service.id}`} key={service.id} className={`p-6 rounded-2xl text-left transition group flex flex-col justify-between h-[250px] ${index === 0 ? 'bg-vetOrange text-white' : 'border border-white/20 hover:border-white/50'}`}>
              <div className="text-3xl mb-4 bg-white/10 w-12 h-12 flex items-center justify-center rounded-lg">{service.icon}</div>
              <h3 className="text-lg font-bold leading-tight">{service.title}</h3>
            </Link>
          ))}
        </div>
        
        <Link href="/#services" className="bg-vetOrange text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition inline-block uppercase text-sm">
          все услуги
        </Link>
      </div>
    </section>
  );
}