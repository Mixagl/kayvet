import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import equipment from "@/data/equipment.json";

interface Spec {
  label: string;
  value: string;
}

interface EquipmentItem {
  slug: string;
  title: string;
  description: string;
  image: string;
  specs: Spec[];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = (equipment as EquipmentItem[]).find((e) => e.slug === slug);

  if (!item) {
    return { title: "Не найдено" };
  }

  return {
    title: item.title,
    description: item.description,
  };
}

export default async function EquipmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = (equipment as EquipmentItem[]).find((e) => e.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <section className="bg-[#F8F8F8]">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-8 md:pb-20 md:pt-12">
          <Link
            href="/equipment"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium uppercase tracking-widest text-gray-400 transition-colors hover:text-gray-600"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            Оборудование
          </Link>
          <h1 className="mt-4 text-3xl font-medium tracking-tight text-gray-900 md:text-4xl">
            {item.title}
          </h1>
          <p className="mt-3 text-base text-gray-500">{item.description}</p>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            {/* Фото */}
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-[#F8F8F8]">
              <Image
                src={item.image}
                alt={item.title}
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>

            {/* Характеристики */}
            <div>
              <h2 className="text-lg font-medium tracking-tight text-gray-900">
                Характеристики
              </h2>
              {item.specs.length > 0 ? (
                <dl className="mt-6 divide-y divide-gray-100">
                  {item.specs.map((spec, i) => (
                    <div key={i} className="flex gap-4 py-3">
                      <dt className="w-1/2 shrink-0 text-sm text-gray-400">
                        {spec.label}
                      </dt>
                      <dd className="text-sm text-gray-900">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="mt-6 text-sm text-gray-400">
                  Подробные характеристики уточняйте по телефону.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
