import Image from 'next/image';
import { team } from '../data';

export default function TeamSection() {
  return (
    <section className="py-20 bg-[#496937] text-white" id="team">
      <div className="container mx-auto px-4 max-w-[1200px]">

        <div className="mb-12 flex flex-col items-start text-left">

          <span className="text-[11px] border border-white/30 px-4 py-1.5 rounded-full font-medium tracking-wide mb-6">
            Специалисты
          </span>

          <h2 className="text-3xl md:text-[42px] font-bold leading-[1.15]">
            Каждый из наших врачей <br/>
            <span className="font-cursive font-normal text-[36px] md:text-[48px] text-white/95 inline-block my-1">
              имеет опыт работы
            </span><br/>
            не менее 7 лет
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member) => (
            <div 
              key={member.id} 
              className="relative h-[400px] rounded-[30px] overflow-hidden group"
            >
              <Image 
                src={member.image} 
                alt={member.name} 
                fill 
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500" 
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-6 flex flex-col justify-end text-white z-10 w-full">
                <h3 className="text-xl md:text-[22px] font-bold leading-tight mb-2 whitespace-pre-line">
                  {member.name}
                </h3>
                <p className="text-sm text-white/80">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}