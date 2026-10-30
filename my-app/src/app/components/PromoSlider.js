"use client";
import { useRef } from 'react';
import Image from 'next/image';
import { promos } from '../data';

export default function PromoSlider() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.offsetWidth * 0.85; 
      
      current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section className="relative z-20 max-w-[1440px] mx-auto px-4 mt-8 mb-12">
      <div className="bg-white rounded-[40px] p-6 md:p-8 shadow-sm">
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-sm font-medium text-gray-900 border border-gray-200 px-5 py-1.5 rounded-full">
            Акции декабря
          </h2>
          
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')} 
              className="w-10 h-10 rounded-full bg-[#E8F0EA] text-gray-600 flex items-center justify-center hover:bg-gray-200 transition"
            >
              &larr;
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="w-10 h-10 rounded-full bg-[#3D5B43] text-white flex items-center justify-center hover:bg-[#2c4432] transition"
            >
              &rarr;
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-4 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
        >
          {promos.map((promo) => (
            <div 
              key={promo.id} 
              className="snap-center shrink-0 w-[85vw] md:w-[calc(33.333%-16px)] relative h-[320px] rounded-3xl overflow-hidden group"
            >
              <Image 
                src={promo.image} 
                alt={promo.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white z-10 w-full">
                <h3 className="text-xl font-bold mb-1 leading-tight whitespace-pre-line">{promo.title}</h3>
                <p className="text-xs text-white/90 whitespace-pre-line leading-snug">{promo.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}