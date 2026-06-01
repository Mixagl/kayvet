// app/equipment/page.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import equipment from "@/data/equipment.json";

interface EquipmentItem {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export const metadata: Metadata = {
  title: "Оборудование",
  description:
    "Современное оснащение клиники KayVet: TFT-монитор, беговая дорожка, наркозный аппарат, инфузоматы, рентген-датчик, плоскопанельный детектор.",
};

export default function EquipmentPage() {
  return (
    <>
      <section className="bg-[#F8F8F8]">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-8 md:pb-20 md:pt-12">
          <p className="text-[13px] font-medium uppercase tracking-widest text-gray-400">
            Оборудование
          </p>
          <h1 className="mt-3 text-3xl font-medium tracking-tight text-gray-900 md:text-4xl">
            Современное оснащение клиники
          </h1>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {(equipment as EquipmentItem[]).map((item) => (
              <Link
                key={item.slug}
                href={`/equipment/${item.slug}`}
                className="group overflow-hidden rounded-lg border border-gray-200 bg-[#F8F8F8] transition-colors hover:border-gray-300"
              >
                <div className="bg-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-medium tracking-tight text-gray-900 group-hover:text-[#0168FF]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-500">
                        {item.description}
                      </p>
                    </div>
                    <ArrowRight
                      size={16}
                      strokeWidth={1.5}
                      className="mt-0.5 shrink-0 text-gray-300 transition-colors group-hover:text-[#0168FF]"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
