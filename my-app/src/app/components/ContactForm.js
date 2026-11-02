"use client";
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm({ buttonText = 'ОТПРАВИТЬ' }) {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); 

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    emailjs.sendForm(
      'service_9n6zsvk',
      'template_jbqiv5c',
      form.current,
      'FQUSHHzu328T3ymBK',
    )
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          form.current.reset(); 
      })
      .catch((error) => {
          console.error(error.text);
          setStatus('error');
      })
      .finally(() => {
          setIsSubmitting(false);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3 w-full max-w-[400px]">
      <input 
        type="text" 
        name="name" 
        placeholder="ВАШЕ ИМЯ" 
        required
        className="bg-transparent border border-white/40 rounded-lg px-4 py-2.5 text-white placeholder-white/60 text-sm focus:outline-none focus:border-white transition"
      />
      <input 
        type="tel" 
        name="phone" 
        placeholder="ТЕЛЕФОН" 
        required
        className="bg-transparent border border-white/40 rounded-lg px-4 py-2.5 text-white placeholder-white/60 text-sm focus:outline-none focus:border-white transition"
      />
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="bg-[#F17021] text-white font-semibold py-2.5 rounded-lg hover:bg-orange-600 transition mt-1 text-sm uppercase disabled:opacity-50"
      >
        {isSubmitting ? 'ОТПРАВКА...' : buttonText}
      </button>
      
      {status === 'success' && (
        <p className="text-green-400 text-xs text-center">Заявка успешно отправлена!</p>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-xs text-center">Ошибка отправки. Попробуйте позже.</p>
      )}
      
      <p className="text-[10px] text-white/50 text-center mt-1 leading-tight">
        Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности.
      </p>
    </form>
  );
}