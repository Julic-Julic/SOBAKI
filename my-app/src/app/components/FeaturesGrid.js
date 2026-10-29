import Image from 'next/image';
import { features } from '../data';

export default function FeaturesGrid() {
  return (
    <section className="bg-vetDark py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <span className="text-xs border border-white/30 px-4 py-1.5 rounded-full mb-6 inline-block">О клинике</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 max-w-2xl leading-tight">
            Страсть к профессии <br/>
            <span className="italic font-light">и забота о животных —</span><br/>
            основные принципы нашей работы
          </h2>
          <p className="text-sm opacity-70 max-w-lg">
            Наша клиника открылась в 2023 году. Специалисты клиники уделяют особое внимание профилактике хронических заболеваний и вакцинации.
          </p>
        </div>

        {/* Сетка Grid точно по макету */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 1. Оборудование */}
          <div className="bg-vetGray text-black p-6 rounded-2xl flex flex-col h-[220px] justify-between">
             <span className="text-3xl">🏥</span>
             <div>
               <h3 className="font-bold text-lg mb-1">Современное оборудование</h3>
               <p className="text-xs opacity-70">Проводим диагностику и лечение пациентов на самом современном оборудовании</p>
             </div>
          </div>

          {/* 2. Хирургия (широкая) */}
          <div className="md:col-span-2 bg-black rounded-2xl relative overflow-hidden h-[220px] p-6 flex flex-col justify-end">
             <Image src="/surgery.jpg" alt="Хирургия" fill className="object-cover opacity-60" />
             <div className="relative z-10">
               <h3 className="font-bold text-xl mb-1">Хирургия 24/7</h3>
               <p className="text-xs opacity-80 mb-3 max-w-sm">Выполняем плановые, срочные и экстренные операции любой сложности круглосуточно.</p>
               <span className="bg-white/20 px-3 py-1 rounded-full text-xs backdrop-blur-sm">Только у нас</span>
             </div>
          </div>

          {/* 3. Экстренная помощь */}
          <div className="bg-vetGray text-black p-6 rounded-2xl flex flex-col h-[220px] justify-between">
             <span className="text-3xl">🚑</span>
             <div>
               <h3 className="font-bold text-lg mb-1">Экстренная помощь</h3>
               <p className="text-xs opacity-70">Оперативно принимаем, оперируем и лечим экстренного больного вне очереди</p>
             </div>
          </div>

          {/* 4. Биохимия (оранжевая) */}
          <div className="bg-vetOrange p-6 rounded-2xl flex flex-col h-[220px] justify-between">
             <h3 className="font-bold text-xl leading-tight">Биохимический анализ крови <span className="italic font-light">за 15 минут!</span></h3>
             <p className="text-xs opacity-90">Результаты анализов в кратчайшие сроки. Количество показателей можно выбрать</p>
          </div>

          {/* 5. Доноры */}
          <div className="bg-vetGray text-black p-6 rounded-2xl flex flex-col h-[220px] justify-between">
             <span className="text-3xl">🩸</span>
             <div>
               <h3 className="font-bold text-lg mb-1">Собственная база доноров</h3>
               <p className="text-xs opacity-70">Всегда в наличии цельная кровь, эритроцитная масса, плазма крови кошек и собак</p>
             </div>
          </div>

          {/* 6. Катетер (широкая, оранжевая с фото) */}
          <div className="md:col-span-2 bg-vetOrange rounded-2xl relative overflow-hidden h-[220px] p-6 flex flex-col justify-end">
             <Image src="/catheter.jpg" alt="Катетер" fill className="object-cover opacity-50" />
             <div className="relative z-10">
               <h3 className="font-bold text-xl mb-1">Постановка катетера в яремную вену</h3>
               <p className="text-xs opacity-90 mb-3 max-w-sm">Поставим катетер в яремную вену вашему питомцу с максимальной осторожностью</p>
               <span className="bg-white/20 px-3 py-1 rounded-full text-xs backdrop-blur-sm">Только у нас</span>
             </div>
          </div>

          {/* 7. Скот */}
          <div className="bg-vetGray text-black p-6 rounded-2xl flex flex-col h-[220px] justify-between">
             <span className="text-3xl">🐴</span>
             <div>
               <h3 className="font-bold text-lg mb-1">Лечение, хирургия мелкого рогатого скота</h3>
               <p className="text-xs opacity-70">Успешно лечим, оперируем лошадей и остальных сельскохозяйственных животных</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}