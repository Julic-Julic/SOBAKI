import Image from "next/image";

export default function Header() {
  return (
    <header className="z-50 fixed w-full">
      <div className="bg-white rounded-b-[40px] shadow-sm">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 py-3 md:py-4">
          <a href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.png"
              alt="Доктор Тома"
              width={64}
              height={64}
              className="object-contain w-12 h-12 md:w-16 md:h-16 shrink-0"
              priority
            />
            <span className="font-bold text-lg md:text-2xl tracking-wide whitespace-nowrap leading-none flex items-center">
              <span className="text-[#4A9B3E]">ДОКТОР&nbsp;</span>
              <span className="text-[#F58220]">ТОМА</span>
            </span>
          </a>
          <div className="hidden md:flex flex-col items-start text-left leading-tight">
            <span className="text-[11px] text-gray-400 font-medium">
              Работаем круглосуточно
            </span>
            <span className="text-base md:text-lg font-medium text-gray-900 mt-0.5">
              Подольск, ул.Чайковского, 48А
            </span>
          </div>

          <div className="flex items-center gap-5 md:gap-10">
            <a
              href="tel:+795867964366"
              className="font-medium text-sm md:text-base text-gray-900 hover:text-[#F58220] transition-colors whitespace-nowrap"
            >
              +7 (956) 6796 43 66
            </a>

            <button
              type="button"
              aria-label="Меню"
              className="flex flex-col gap-[5px] w-7 h-7 justify-center items-end cursor-pointer bg-transparent border-0 p-0 group"
            >
              <span className="w-7 h-[2px] bg-black group-hover:bg-[#F58220] transition-colors"></span>
              <span className="w-7 h-[2px] bg-black group-hover:bg-[#F58220] transition-colors"></span>
              <span className="w-7 h-[2px] bg-black group-hover:bg-[#F58220] transition-colors"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
