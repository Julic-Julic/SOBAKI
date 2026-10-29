import Image from "next/image";

const promotions = [
  {
    id: 1,
    bgColor: "bg-[#C4C4C4]",
    image: "/dog-card1.jpg",
    textTop: "-15%",
    textBottom: "На первый прием",
    gradient: "from-black/50",
  },
  {
    id: 2,
    bgColor: "bg-[#D97D4D]",
    image: "/dog-card2.jpg",
    textTop: null,
    textBottom: "Скидка волонтерам на услуги клиники 15% на бездомных животных",
    gradient: "from-black/60",
  },
  {
    id: 3,
    bgColor: "bg-[#7A7A7A]",
    image: "/cat-card3.jpg",
    textTop: null,
    textBottom: "Каждую пятницу стрижка кошки от 2250₽, вместо 3500₽",
    gradient: "from-black/60",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-screen">
      <div className="bg-[#FFA500] relative min-h-screen md:min-h-[700px] flex items-center justify-center px-6 md:px-20 pt-10 pb-40 md:pb-52 overflow-hidden">
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-0">
          <div className="relative w-[110%] h-[100%] md:w-[120%] md:h-[115%]">
            <Image
              src="/dog-hero.png"
              alt="Собака"
              fill
              sizes="(max-width: 800px) 200vw, 100vw"
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-black/20 z-[5] pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl text-center">
          <div className="relative z-10 max-w-4xl text-center mt-32 md:mt-38">
            <h1 className="text-white text-3xl md:text-4xl font-bold leading-[1.15] drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              Доктор Тома — ветеринарная
              <br />
              <span className="whitespace-nowrap">
                клиника{" "}
                <span className="font-handwritten text-4xl md:text-5xl font-normal">
                  безусловной любви
                </span>
              </span>
            </h1>

            <p className="text-white mt-6 text-base md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
              Полный спектр услуг: от диагностики и лечения, до медицинского
              сопровождения питомцев разного вида и возраста
            </p>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              className="mt-8 bg-[#4A6B44] hover:bg-[#3d5938] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl flex items-center gap-3 transition shadow-lg active:scale-95 cursor-pointer border-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 13.5c-2.5 0-4.5 1.5-4.5 3.5 0 1.5 1.5 2.5 4.5 2.5s4.5-1 4.5-2.5c0-2-2-3.5-4.5-3.5zM8 9.5c-.83 0-1.5-.9-1.5-2S7.17 5.5 8 5.5s1.5.9 1.5 2S8.83 9.5 8 9.5zM16 9.5c-.83 0-1.5-.9-1.5-2s.67-2 1.5-2 1.5.9 1.5 2-.67 2-1.5 2zM5 13c-.83 0-1.5-.9-1.5-2S4.17 9 5 9s1.5.9 1.5 2S5.83 13 5 13zM19 13c-.83 0-1.5-.9-1.5-2S18.17 9 19 9s1.5.9 1.5 2-.67 2-1.5 2z" />
              </svg>
              <span className="font-semibold uppercase tracking-wider text-xs md:text-sm text-white">
                Записаться на прием
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
