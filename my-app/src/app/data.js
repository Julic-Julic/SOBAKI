export const promos = [
  { id: 1, title: '-15%', desc: 'На первый прием', image: '/promo1.png' },
  { id: 2, title: 'Скидка волонтерам', desc: 'на услуги клиники 15%\nна бездомных животных', image: '/promo2.png' },
  { id: 3, title: 'Каждую пятницу', desc: 'стерилизация кошки\nот 2250₽, вместо 3500₽', image: '/promo3.png' },
];

export const features = [
  { 
    id: 1, 
    title: 'Современное оборудование', 
    desc: 'Проводим диагностику и лечение пациентов на самом современном оборудовании', 
    iconImage: '/l1.png',
    type: 'default',
    image: '/f1.png' 
  },
  { 
    id: 2, 
    title: 'Хирургия 24/7', 
    desc: 'Выполняем плановые, срочные и экстренные операции любой сложности круглосуточно.', 
    image: '/surgery.jpg', 
    type: 'image', 
    badge: 'Только у нас',
    imagePosition: 'object-center'
  },
  { 
    id: 3, 
    title: 'Экстренная помощь', 
    desc: 'Оперативно принимаем, оперируем и лечим экстренного больного вне очереди', 
    iconImage: '/l2.png',
    type: 'default',
    image: '/f2.png' 
  },
  { 
    id: 4, 
    title: 'Биохимический анализ крови', 
    titleItalic: 'за 15 минут!', 
    desc: 'Результаты анализов в кратчайшие сроки. Количество показателей можно выбрать', 
    type: 'orange' 
  },
  { 
    id: 5, 
    title: 'Собственная база доноров', 
    desc: 'Всегда в наличии цельная кровь, эритроцитная масса, плазма крови кошек и собак', 
    iconImage: '/l3.png',
    type: 'default',
    image: '/f3.png' 
  },
  { 
    id: 6, 
    title: 'Постановка катетера в яремную вену', 
    desc: 'Поставим катетер в яремную вену вашему питомцу с максимальной осторожностью', 
    image: '/catheter.jpg', 
    type: 'image', 
    badge: 'Только у нас',
    imagePosition: 'object-center'
  },
  { 
    id: 7, 
    title: 'Лечение, хирургия мелкого рогатого скота', 
    desc: 'Успешно лечим, оперируем лошадей и остальных сельскохозяйственных животных', 
    iconImage: '/l4.png',
    type: 'default'
  },
];

export const services = [
  { 
    id: 'instrumentalnaya-diagnostika', 
    title: 'Инструментальная диагностика', 
    image: '/service-dog.png', // Картинка пуделя
    icon: '🩺' 
  },
  { 
    id: 'laboratornye-issledovaniya', 
    title: 'Лабораторные исследования', 
    pattern: true, // Флаг, что нужен паттерн с лапками
    icon: '🧪' 
  },
  { 
    id: 'hirurgiya', 
    title: 'Хирургия', 
    image: '/service-rabbit.png', // Картинка кролика
    icon: '🩹' 
  },
  { 
    id: 'terapiya', 
    title: 'Терапия и профилактика', 
    icon: '🩺' 
  },
];

export const team = [
  { id: 'lastochkina', name: 'Ласточкина Татьяна Евгеньевна', role: 'Терапевт, хирург, стоматолог', image: '/doctor1.jpg.png' },
  { id: 'zhuravlev', name: 'Журавлев Игорь Николаевич', role: 'Терапевт, хирург, стоматолог', image: '/doctor2.jpg.png' },
  { id: 'ryabova', name: 'Рябова Ирина Владимировна', role: 'Терапевт, хирург, стоматолог', image: '/doctor3.jpg.png' },
];