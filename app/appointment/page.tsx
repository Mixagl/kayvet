import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Запись на приём",
  description:
    "Запишитесь на приём в KayVet онлайн. Выберите удобное время, и мы свяжемся с вами для подтверждения.",
};

export default function AppointmentPage() {
  return (
    <section className="bg-[#F8F8F8] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Заголовок */}
        <p className="text-[13px] font-medium uppercase tracking-widest text-gray-400">
          Запись на приём
        </p>
        <h1 className="mt-3 text-2xl font-medium tracking-tight text-gray-900 md:text-3xl">
          Выберите удобное время
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          Заполните форму ниже, и мы свяжемся с вами для подтверждения.
        </p>

        {/* Виджет */}
        <div className="mt-10 overflow-hidden rounded-lg border border-gray-200 bg-white">
          <iframe
            src="https://widgets.vetmanager.ru/frame/832"
            width="100%"
            height="800"
            className="block"
            title="Запись на приём"
          />
        </div>
      </div>
    </section>
  );
}
