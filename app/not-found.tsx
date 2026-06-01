import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-[#F8F8F8] py-32">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-7xl font-light text-gray-300">404</p>
        <h1 className="mt-4 text-2xl font-medium text-gray-900">
          Страница не найдена
        </h1>
        <p className="mt-2 text-gray-500">
          Такой страницы не существует или она была удалена.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-[#0168FF] px-6 py-3 text-sm font-medium text-white hover:bg-[#0154CC]"
        >
          На главную
        </Link>
      </div>
    </section>
  );
}
