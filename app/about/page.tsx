import { Phone, Clock, MapPin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "О нас",
  description:
    "KayVet — с любовью к вашим животным. Узкие специалисты, лаборатория, стационар, гостиница. Накопительная система скидок.",
};

const specialists = [
  "Хирург-травматолог",
  "Дерматолог",
  "Стоматолог",
  "УЗ-диагност",
];

const extraServices = [
  "Своя лаборатория",
  "Стационарное содержание",
  "Гостиничное содержание",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero страницы */}
      <section className="bg-[#F8F8F8]">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-8 md:pb-20 md:pt-12">
          <p className="text-[13px] font-medium uppercase tracking-widest text-gray-400">
            О нас
          </p>
          <h1 className="mt-3 text-3xl font-medium tracking-tight text-gray-900 md:text-4xl">
            KayVet — с любовью к вашим животным!
          </h1>
        </div>
      </section>

      {/* Основной контент */}
      <section className="border-t border-gray-200 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            {/* Левая колонка */}
            <div>
              <p className="text-base leading-relaxed text-gray-500">
                Дорогие друзья! Наши двери открыты для вас и ваших пушистых
                друзей с 09:00 до 21:00 каждый день, без выходных и праздничных
                дней!
              </p>

              {/* Специалисты */}
              <div className="mt-10">
                <h2 className="text-lg font-medium tracking-tight text-gray-900">
                  В клинике ведут приём узкие специалисты
                </h2>
                <ul className="mt-4 space-y-2">
                  {specialists.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#0168FF]" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Доп. услуги */}
              <div className="mt-8">
                <h2 className="text-lg font-medium tracking-tight text-gray-900">
                  Также для вас
                </h2>
                <ul className="mt-4 space-y-2">
                  {extraServices.map((service) => (
                    <li
                      key={service}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#0168FF]" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Скидки */}
              <div className="mt-8 rounded-lg border border-gray-200 bg-[#F8F8F8] p-5">
                <p className="text-sm font-medium text-gray-900">
                  Действует накопительная система скидок
                </p>
              </div>
            </div>

            {/* Правая колонка — контакты + карта */}
            <div className="space-y-8">
              {/* Телефоны */}
              <div>
                <h2 className="text-lg font-medium tracking-tight text-gray-900">
                  Приёмы ведутся по записи
                </h2>
                <div className="mt-4 space-y-2">
                  <a
                    href="tel:+74234320304"
                    className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-[#0168FF]"
                  >
                    <Phone size={14} strokeWidth={1.5} />
                    +7 (4234) 32-03-04
                  </a>
                  <a
                    href="tel:+79841967848"
                    className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-[#0168FF]"
                  >
                    <Phone size={14} strokeWidth={1.5} />
                    +7 (984) 196-78-48
                  </a>
                </div>
              </div>

              {/* Часы */}
              <div>
                <h2 className="text-lg font-medium tracking-tight text-gray-900">
                  Режим работы
                </h2>
                <div className="mt-4 flex gap-2">
                  <Clock
                    size={16}
                    strokeWidth={1.5}
                    className="mt-0.5 shrink-0 text-gray-400"
                  />
                  <div className="text-sm text-gray-500">
                    <p>С 09:00 до 21:00</p>
                    <p>Ежедневно, без выходных и праздников</p>
                  </div>
                </div>
              </div>

              {/* Карта — заглушка */}
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11520.031814182723!2d131.963115!3d43.793448!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb2e86fad4353f9%3A0xe6ba8e329c0a318f!2sKuznechnaya%20Ulitsa%2C%209%2C%20Ussuriysk%2C%20Primorskiy%20kray%2C%20Russia%2C%20692519!5e0!3m2!1sen!2sus!4v1780279126822!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  className="block"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KayVet на карте"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
