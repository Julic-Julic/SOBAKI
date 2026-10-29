import Image from 'next/image';
import { features } from '../data';

export default function FeaturesGrid() {
  return (
    <section className="bg-[#496937] text-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-[1200px]">
        
        <div className="mb-12">
          <span className="text-[11px] border border-white/30 px-4 py-1.5 rounded-full mb-6 inline-block font-medium tracking-wide">
            О клинике
          </span>
          <h2 className="text-3xl md:text-[42px] font-bold mb-4 leading-[1.15]">
            Страсть к профессии <br/>
            <span className="italic font-light">и забота о животных —</span><br/>
            основные принципы нашей работы
          </h2>
          <p className="text-sm text-white/70 max-w-lg mt-6">
            Наша клиника открылась в 2023 году. Специалисты клиники уделяют особое внимание профилактике хронических заболеваний и вакцинации.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feat) => (
            <div 
              key={feat.id} 
              className={`
                relative rounded-[20px] overflow-hidden flex flex-col p-6 min-h-[240px]
                ${feat.type === 'image' ? 'md:col-span-2' : 'col-span-1'}
                ${feat.type === 'default' && !feat.image ? 'bg-[#557A5F]' : ''} 
                ${feat.type === 'orange' ? 'bg-[#F17021]' : ''}
              `}
            >
              {feat.image && (
                <>
                  <Image 
                    src={feat.image} 
                    alt={feat.title} 
                    fill 
                    className={`object-cover ${feat.imagePosition || 'object-center'}`} 
                  />       
                </>
              )}

              {feat.badge && (
                <div className="absolute top-4 right-4 bg-white text-gray-900 px-4 py-1.5 rounded-full text-xs font-semibold z-20">
                  {feat.badge}
                </div>
              )}

              <div className="relative z-10 flex flex-col h-full w-full">
                
                {feat.iconImage && (
                  <div className="mb-auto">
                    <Image 
                      src={feat.iconImage} 
                      alt={feat.title} 
                      width={50}   
                      height={50}  
                      className="object-contain" 
                    />
                  </div>
                )}

                <div className={`${feat.type === 'default' ? 'my-auto' : 'mt-auto'}`}>
                  <h3 className={`font-bold leading-tight ${feat.type === 'image' ? 'text-xl md:text-2xl mb-2 max-w-md' : 'text-lg md:text-xl mb-2'}`}>
                    {feat.title} 
                    {feat.titleItalic && <span className="block italic font-light font-cursive text-3xl mt-1">{feat.titleItalic}</span>}
                  </h3>
                  
                  <p className={`text-[13px] leading-relaxed ${feat.type === 'orange' ? 'text-white/90' : 'text-white/80'} ${feat.type === 'image' ? 'max-w-md' : ''}`}>
                    {feat.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}