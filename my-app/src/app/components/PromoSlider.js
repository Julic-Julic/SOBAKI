"use client";
import { useState } from 'react';
import Image from 'next/image';
import { promos } from '../data';

export default function PromoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-12 container mx-auto px-4 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 bg-white px-6 py-2 rounded-full shadow-sm">Акции декабря</h2>
        <div className="flex gap-2">
          <button 
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))} 
            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-vetOrange hover:text-white transition disabled:opacity-50"
            disabled={currentIndex === 0}
          >
            &larr;
          </button>
          <button 
            onClick={() => setCurrentIndex(Math.min(promos.length - 1, currentIndex + 1))} 
            className="w-10 h-10 rounded-full bg-vetOrange text-white flex items-center justify-center hover:bg-orange-600 transition disabled:opacity-50"
            disabled={currentIndex === promos.length - 1}
          >
            &rarr;
          </button>
        </div>
      </div>
      
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-300 gap-6" 
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {promos.map((promo) => (
            <div key={promo.id} className="min-w-[300px] md:min-w-[calc(33.333%-16px)] relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
              <Image 
                src={promo.image} 
                alt={promo.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-bold">{promo.title}</h3>
                <p className="text-sm opacity-90">{promo.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}