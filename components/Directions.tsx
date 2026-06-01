// components/Directions.tsx
import Link from "next/link";
import { Heart, Car, Stethoscope, ArrowRight, Phone } from "lucide-react";

const directions = [
  {
    icon: Heart,
    title: "Волонтёрское движение «Берегиня»",
    description:
      "Приморское движение защиты бездомных животных. Помогаем тем, у кого нет хозяев.",
    action: {
      type: "link" as const,
      label: "Подробнее о движении",
      href: "/about",
    },
  },
  {
    icon: Car,
    title: "Зоотакси по городу",
    description:
      "Привезём вас с питомцем в клинику или отвезём домой. С 9:00 до 21:00.",
    price: "1000 ₽",
    action: {
      type: "phone" as const,
      label: "+7 (924) 100-80-03",
      href: "tel:+79241008003",
    },
  },
  {
    icon: Stethoscope,
    title: "Вызов врача на дом",
    description:
      "Осмотр, консультация и диагностика на дому. Забор анализов, биопсия. С 9:00 до 21:00.",
    price: "1400 ₽",
    action: {
      type: "link" as const,
      label: "Вызвать врача",
      href: "/appointment",
    },
  },
];

export default function Directions() {
  return (
    <section className="border-t border-gray-200 bg-[#F8F8F8] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Заголовок */}
        <p className="text-[13px] font-medium uppercase tracking-widest text-gray-400">
          Направления
        </p>
        <h2 className="mt-3 text-2xl font-medium tracking-tight text-gray-900 md:text-3xl">
          Выберите то, что нужно вашему питомцу
        </h2>

        {/* Сетка */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {directions.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 md:p-8"
              >
                {/* Иконка */}
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-md bg-[#F8F8F8]">
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className="text-[#0168FF]"
                  />
                </div>

                {/* Цена */}
                {item.price && (
                  <p className="mb-2 text-[13px] font-medium uppercase tracking-wider text-gray-400">
                    {item.price}
                  </p>
                )}

                {/* Заголовок */}
                <h3 className="text-lg font-medium tracking-tight text-gray-900">
                  {item.title}
                </h3>

                {/* Описание */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>

                {/* Действие */}
                <div className="mt-6">
                  {item.action.type === "link" ? (
                    <Link
                      href={item.action.href}
                      className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#0168FF] transition-colors hover:text-[#0154CC]"
                    >
                      {item.action.label}
                      <ArrowRight size={14} strokeWidth={1.5} />
                    </Link>
                  ) : (
                    <a
                      href={item.action.href}
                      className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#0168FF] transition-colors hover:text-[#0154CC]"
                    >
                      <Phone size={13} strokeWidth={1.5} />
                      {item.action.label}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
