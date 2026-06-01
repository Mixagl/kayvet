// components/CareBlock.tsx
import { Monitor, Scan, Activity } from "lucide-react";

const items = [
  {
    icon: Monitor,
    title: "ЭКГ-монитор",
    description:
      "Рекомендуется регистрировать не реже одного раза в год всем собакам старше пяти лет.",
  },
  {
    icon: Scan,
    title: "Цифровая рентгенография",
    description:
      "Новейший рентген-аппарат и цифровой DR-приёмник. Качественные снимки даже самым крупным животным.",
  },
  {
    icon: Activity,
    title: "Мониторинг давления",
    description:
      "Измерение артериального давления — один из важнейших признаков полноценной деятельности организма.",
  },
];

export default function CareBlock() {
  return (
    <section className="border-t border-gray-200 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Заголовок */}
        <p className="text-[13px] font-medium uppercase tracking-widest text-gray-400">
          Внимание к нуждам клиентов
        </p>
        <h2 className="mt-3 max-w-xl text-2xl font-medium tracking-tight text-gray-900 md:text-3xl">
          Современное оборудование для точной диагностики
        </h2>

        {/* Сетка */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="rounded-lg border border-gray-200 bg-[#F8F8F8] p-6 md:p-8"
              >
                {/* Иконка */}
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-white">
                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className="text-[#0168FF]"
                  />
                </div>

                {/* Заголовок */}
                <h3 className="font-medium tracking-tight text-gray-900">
                  {item.title}
                </h3>

                {/* Описание */}
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
