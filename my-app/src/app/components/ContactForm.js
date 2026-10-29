// src/app/components/ContactForm.js
"use client";
import { useState } from 'react';

export default function ContactForm({ buttonText = 'ОТПРАВИТЬ' }) {
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Заявка отправлена! Имя: ${formData.name}, Телефон: ${formData.phone}`);
    setFormData({ name: '', phone: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-[400px]">
      <input 
        type="text" 
        placeholder="ВАШЕ ИМЯ" 
        required
        value={formData.name} 
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        className="bg-transparent border border-white/40 rounded-lg px-4 py-2.5 text-white placeholder-white/60 text-sm focus:outline-none focus:border-white transition"
      />
      <input 
        type="tel" 
        placeholder="ТЕЛЕФОН" 
        required
        value={formData.phone} 
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
        className="bg-transparent border border-white/40 rounded-lg px-4 py-2.5 text-white placeholder-white/60 text-sm focus:outline-none focus:border-white transition"
      />
      <button 
        type="submit" 
        className="bg-[#F17021] text-white font-semibold py-2.5 rounded-lg hover:bg-orange-600 transition mt-1 text-sm uppercase"
      >
        {buttonText}
      </button>
      <p className="text-[10px] text-white/50 text-center mt-1 leading-tight">
        *Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности.
      </p>
    </form>
  );
}