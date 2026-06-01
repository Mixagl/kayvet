// components/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Главная", href: "/" },
  { label: "Оборудование", href: "/equipment" },
  { label: "Запись на приём", href: "/appointment" },
  { label: "О нас", href: "/about" },
  { label: "Галерея", href: "/gallery" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
      {/* Плашка */}
      <div className="bg-[#0168FF] px-4 py-1.5 text-center text-[11px] font-light tracking-wide text-white/90 md:text-xs">
        Круглосуточно, без праздников и выходных
      </div>

      {/* Верхняя полоса */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="KayVet"
            width={142}
            height={155}
            className="h-10 w-10 md:h-11 md:w-11"
          />
          <div>
            <p className="text-lg font-medium tracking-tight text-gray-900 md:text-xl">
              KayVet
            </p>
            <p className="text-[11px] font-light tracking-wide text-gray-400 md:text-xs">
              Ветеринарная помощь
            </p>
          </div>
        </Link>

        {/* Телефоны + бургер */}
        <div className="flex items-center gap-5 md:gap-8">
          <a
            href="tel:+79841967848"
            className="hidden items-center gap-2 text-sm text-gray-600 transition-colors hover:text-[#0168FF] md:flex"
          >
            <Phone size={14} strokeWidth={1.5} />
            +7 (984) 196-78-48
          </a>
          <a
            href="tel:+74234320304"
            className="hidden items-center gap-2 text-sm text-gray-600 transition-colors hover:text-[#0168FF] md:flex"
          >
            <Phone size={14} strokeWidth={1.5} />
            +7 (4234) 32-03-04
          </a>

          <a
            href="tel:+79841967848"
            className="flex items-center gap-1.5 text-sm font-medium text-gray-700 md:hidden"
          >
            <Phone size={15} strokeWidth={1.5} className="text-[#0168FF]" />
            <span className="hidden sm:inline">+7 (984) 196-78-48</span>
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-50 md:hidden"
            aria-label="Меню"
          >
            {menuOpen ? (
              <X size={20} strokeWidth={1.5} />
            ) : (
              <Menu size={20} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Десктопная навигация */}
      <nav className="hidden border-t border-gray-200 md:block">
        <ul className="mx-auto flex max-w-7xl items-center px-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block px-5 py-3.5 text-[13px] font-medium tracking-wide text-gray-500 transition-colors hover:text-gray-900"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Мобильное меню */}
      {menuOpen && (
        <nav className="border-t border-gray-200 bg-white md:hidden">
          <ul className="flex flex-col px-6 pb-4 pt-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-[15px] font-medium tracking-wide text-gray-500 transition-colors hover:text-gray-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <div className="mt-3 border-t border-gray-200 pt-4">
              <a
                href="tel:+79841967848"
                className="flex items-center gap-2 py-2 text-sm text-gray-600"
              >
                <Phone size={14} strokeWidth={1.5} />
                +7 (984) 196-78-48
              </a>
              <a
                href="tel:+74234320304"
                className="flex items-center gap-2 py-2 text-sm text-gray-600"
              >
                <Phone size={14} strokeWidth={1.5} />
                +7 (4234) 32-03-04
              </a>
            </div>
          </ul>
        </nav>
      )}
    </header>
  );
}
