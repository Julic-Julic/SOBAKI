"use client";
import { useState } from 'react';

export default function ContactForm({ title, subtitle, buttonText }) {
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // В реальном проекте здесь будет fetch запрос к API
    alert(`Заявка отправлена!\nИмя: ${formData.name}\nТелефон: ${formData.phone}`);
    setFormData({ name: '', phone: '' });
  };

  return (
    <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl max-w-md w-full text-white border border-white/20">
      {title && <h2 className="text-3xl font-bold mb-2">{title}</h2>}
      {subtitle && <p className="text-sm mb-6 opacity-80">{subtitle}</p>}
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input 
          type="text" 
          placeholder="ВАШЕ ИМЯ" 
          required
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="bg-transparent border border-white/50 rounded-lg p-3 text-white placeholder-white/50 focus:outline-none focus:border-vetOrange transition"
        />
        <input 
          type="tel" 
          placeholder="ТЕЛЕФОН" 
          required
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          className="bg-transparent border border-white/50 rounded-lg p-3 text-white placeholder-white/50 focus:outline-none focus:border-vetOrange transition"
        />
        <button type="submit" className="bg-vetOrange text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition mt-2">
          {buttonText || 'ОТПРАВИТЬ'}
        </button>
        <p className="text-[10px] opacity-50 text-center mt-2">
          Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
        </p>
      </form>
    </div>
  );
}