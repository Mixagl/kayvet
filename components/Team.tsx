// components/Team.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Team() {
  return (
    <section className="border-t border-gray-200 bg-[#F8F8F8] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Заголовок */}
        <p className="text-[13px] font-medium uppercase tracking-widest text-gray-400">
          Наши сотрудники
        </p>
        <h2 className="mt-3 text-2xl font-medium tracking-tight text-gray-900 md:text-3xl">
          Врач, которому доверяют
        </h2>

        {/* Контент */}
        <div className="mt-12 flex flex-col gap-10 md:flex-row md:gap-16">
          {/* Фото */}
          <div className="w-full shrink-0 md:w-80">
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
              <div className="aspect-[3/4] w-full bg-[#F8F8F8]">
                {/* Заглушка — замени на Image */}
                <Image
                  src="/Яшкин.png"
                  alt="Яшкин Константин Андреевич"
                  width={165}
                  height={198}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Текст */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-medium tracking-tight text-gray-900">
              Яшкин Константин Андреевич
            </h3>
            <p className="mt-1 text-sm text-gray-400">Ветеринарный врач</p>

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-gray-500">
              Наша команда стремится обучать клиентов тому, как поддерживать
              здоровье питомцев круглый год с помощью правильного питания и
              физических упражнений. Мы любим домашних животных и их родителей,
              а также отношения, которые поддерживаем в долгосрочной
              перспективе.
            </p>

            <div className="mt-6">
              <Link
                href="/appointment"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0168FF] px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[#0154CC]"
              >
                Записаться к врачу
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
