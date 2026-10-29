"use client";
import { useState } from 'react';

export default function ContactForm({ title, subtitle, buttonText = 'отправить' }) {
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Заявка отправлена! Имя: ${formData.name}, Телефон: ${formData.phone}`);
    setFormData({ name: '', phone: '' });
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input 
          type="text" placeholder="ваше имя" required
          value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white transition"
        />
        <input 
          type="tel" placeholder="телефон" required
          value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
          className="bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white transition"
        />
        <button type="submit" className="bg-vetOrange text-white font-semibold py-3 rounded-xl hover:bg-orange-600 transition mt-2 uppercase text-sm">
          {buttonText}
        </button>
        <p className="text-[10px] text-white/50 text-center mt-2 leading-tight">
          Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности и даете согласие на обработку персональных данных
        </p>
      </form>
    </div>
  );
}