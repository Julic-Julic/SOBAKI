"use client";
import { useState } from 'react';
import Image from 'next/image';
import { promos } from '../data';

export default function PromoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-12 bg-white relative z-20 -mt-6 container mx-auto px-4 rounded-t-3xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-gray-800 border border-gray-200 px-5 py-2 rounded-full">Акции декабря</h2>
        <div className="flex gap-2">
          <button onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-vetOrange hover:text-white transition">&larr;</button>
          <button onClick={() => setCurrentIndex(Math.min(promos.length - 1, currentIndex + 1))} className="w-8 h-8 rounded-full bg-vetOrange text-white flex items-center justify-center hover:bg-vetDark transition">&rarr;</button>
        </div>
      </div>
      
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300 gap-4" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
          {promos.map((promo) => (
            <div key={promo.id} className="min-w-[300px] md:min-w-[calc(33.333%-11px)] relative h-64 rounded-2xl overflow-hidden bg-gray-200">
              <Image src={promo.image} alt={promo.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 flex flex-col justify-end text-white">
                <h3 className="text-xl font-bold">{promo.title}</h3>
                <p className="text-xs opacity-90">{promo.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}