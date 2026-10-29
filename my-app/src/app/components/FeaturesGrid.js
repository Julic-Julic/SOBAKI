import Image from 'next/image';
import { features } from '../data';

export default function FeaturesGrid() {
  return (
    <section className="bg-vetGreenDark text-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 md:w-1/2">
          <span className="text-sm border border-white/30 px-3 py-1 rounded-full mb-4 inline-block">О клинике</span>
          <h2 className="text-4xl font-bold mb-4">
            Страсть к профессии <br/>
            <span className="italic font-light">и забота о животных —</span><br/>
            основные принципы нашей работы
          </h2>
          <p className="text-sm opacity-80">
            Наша клиника открылась в 2023 году. Специалисты клиники уделяют особое внимание профилактике хронических заболеваний и вакцинации.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feat) => (
            <div 
              key={feat.id} 
              className={`${feat.color} p-6 rounded-2xl flex flex-col justify-between min-h-[200px] ${feat.isLarge ? 'md:col-span-2 md:row-span-2 relative overflow-hidden' : ''}`}
            >
              {feat.isLarge && (
                 <div className="absolute inset-0">
                   {/* Временно используем dog-hero.png, замените на фото операции */}
                   <Image src="/dog-hero.png" alt="Хирургия" fill className="object-cover opacity-30" />
                 </div>
              )}
              <div className="relative z-10">
                 <div className="text-3xl mb-4">{feat.icon}</div>
                 <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
                 <p className="text-sm opacity-80">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}