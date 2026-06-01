// components/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#F8F8F8]">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-8 md:pb-24 md:pt-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg border border-gray-200 bg-white">
              Когда будет фото:
              <Image
                src="/cat.jpg"
                alt="Ветеринарная клиника KayVet"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Текст */}
          <div className="w-full md:w-1/2">
            {/* Метка */}
            <p className="text-[13px] font-medium uppercase tracking-widest text-gray-400">
              Уссурийск
            </p>

            {/* Заголовок */}
            <h1 className="mt-4 text-3xl font-medium leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
              Ветеринарная помощь
              <br />
              <span className="text-[#0168FF]">с заботой</span> о вашем
              <br />
              питомце
            </h1>

            {/* Описание */}
            <p className="mt-6 max-w-md text-base leading-relaxed text-gray-500 md:text-lg">
              Терапия, хирургия, диагностика. Современное оборудование, цифровой
              рентген, собственная лаборатория.
            </p>

            {/* Кнопки */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0168FF] px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-[#0154CC]"
              >
                Записаться на приём
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
              <a
                href="tel:+79841967848"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-7 py-3.5 text-[15px] font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50"
              >
                <Phone size={15} strokeWidth={1.5} />
                +7 (984) 196-78-48
              </a>
            </div>

            {/* Факты — только реальные */}
            <div className="mt-10 flex gap-8 border-t border-gray-200 pt-8">
              <div>
                <p className="text-2xl font-medium tracking-tight text-gray-900">
                  24/7
                </p>
                <p className="mt-1 text-xs text-gray-400">Без выходных</p>
              </div>
              <div>
                <p className="text-2xl font-medium tracking-tight text-gray-900">
                  1400 ₽
                </p>
                <p className="mt-1 text-xs text-gray-400">Выезд на дом</p>
              </div>
              <div>
                <p className="text-2xl font-medium tracking-tight text-gray-900">
                  1000 ₽
                </p>
                <p className="mt-1 text-xs text-gray-400">Зоотакси</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
