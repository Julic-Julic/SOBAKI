import Image from 'next/image';
import { team } from '../data';

export default function TeamSection() {
  return (
    <section className="py-20 bg-vetGreenDark text-white" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm border border-white/30 px-3 py-1 rounded-full mb-4 inline-block">Специалисты</span>
          <h2 className="text-4xl font-bold">
            Каждый из наших врачей <br/>
            <span className="italic font-light">имеет стаж работы</span><br/>
            не менее 7 лет
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member) => (
            <div key={member.id} className="relative h-[400px] rounded-2xl overflow-hidden group">
              <Image 
                src={member.image} 
                alt={member.name} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-sm text-gray-300">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}