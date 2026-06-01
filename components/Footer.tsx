// components/Footer.tsx
import Link from "next/link";
import { Phone } from "lucide-react";

const navLinks = [
  { label: "Главная", href: "/" },
  { label: "Оборудование", href: "/equipment" },
  { label: "Запись на приём", href: "/appointment" },
  { label: "О нас", href: "/about" },
  { label: "Галерея", href: "/gallery" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Логотип и описание */}
          <div>
            <p className="text-lg font-medium tracking-tight text-gray-900">
              KayVet
            </p>
            <p className="mt-1 text-xs tracking-wide text-gray-400">
              Ветеринарная помощь
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
              Ветеринарная клиника в Уссурийске. Круглосуточная помощь, терапия,
              хирургия, диагностика.
            </p>
            {/* Слоган */}
            <p className="mt-4 text-sm font-medium tracking-tight text-[#0168FF]">
              Здоровая семья — счастливая семья
            </p>
          </div>

          {/* Навигация */}
          <div>
            <p className="text-[13px] font-medium uppercase tracking-widest text-gray-400">
              Разделы
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <p className="text-[13px] font-medium uppercase tracking-widest text-gray-400">
              Контакты
            </p>
            <div className="mt-4 space-y-2">
              <a
                href="tel:+79841967848"
                className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
              >
                <Phone size={13} strokeWidth={1.5} />
                +7 (984) 196-78-48
              </a>
              <a
                href="tel:+74234320304"
                className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
              >
                <Phone size={13} strokeWidth={1.5} />
                +7 (4234) 32-03-04
              </a>
              <a
                href="tel:+79241008003"
                className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
              >
                <Phone size={13} strokeWidth={1.5} />
                +7 (924) 100-80-03
              </a>
            </div>
            <p className="mt-3 text-xs text-gray-400">
              Зоотакси и вызов врача: 9:00 – 21:00
            </p>
          </div>
        </div>

        {/* Нижняя полоса */}
        <div className="mt-12 border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
          © KayVet, г. Уссурийск, 2020–{new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
