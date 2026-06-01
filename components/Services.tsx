// components/Services.tsx

const services = [
  {
    number: "01",
    title: "Терапия",
    description:
      "Интенсивная терапия, лечение внутренних болезней, наблюдение в стационаре.",
  },
  {
    number: "02",
    title: "Хирургия",
    description:
      "Пластическая, абдоминальная хирургия, онкология, ортопедия и травматология.",
  },
  {
    number: "03",
    title: "Диагностика",
    description:
      "Рентген-диагностика, УЗИ, лабораторная и экспресс-диагностика.",
  },
  {
    number: "04",
    title: "Ортопедия",
    description:
      "Операции при дисплазии суставов, разрывах связок, остеосинтез при переломах любой сложности.",
  },
  {
    number: "05",
    title: "Стоматология",
    description:
      "Лечение зубов и дёсен, удаление зубного камня, профилактика заболеваний полости рта.",
  },
  {
    number: "06",
    title: "Лаборатория",
    description:
      "Один из самых информативных методов постановки диагноза и оценки эффективности лечения.",
  },
];

export default function Services() {
  return (
    <section className="border-t border-gray-200 bg-[#F8F8F8] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Заголовок */}
        <p className="text-[13px] font-medium uppercase tracking-widest text-gray-400">
          Услуги
        </p>
        <h2 className="mt-3 max-w-2xl text-2xl font-medium tracking-tight text-gray-900 md:text-3xl">
          Полный спектр ветеринарной помощи
        </h2>

        {/* Сетка */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="flex gap-5 rounded-lg border border-gray-200 bg-white p-6 md:p-8"
            >
              {/* Номер */}
              <span className="shrink-0 text-[13px] font-medium uppercase tracking-widest text-gray-300">
                {service.number}
              </span>

              {/* Текст */}
              <div>
                <h3 className="font-medium tracking-tight text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
