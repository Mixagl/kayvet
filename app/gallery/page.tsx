import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Галерея",
  description:
    "Клинические случаи и будни KayVet. Реальные истории пациентов: удаление кости, забор мочи цистоцентезом, стерилизация, спасённые щенки.",
};

const galleryItems = [
  {
    image: "/gallery/bone.jpg",
    title: "Клинический случай: кости в рационе",
    description:
      "Рыжая живёт на производстве. Девушка-опекун, которая ежедневно её кормит, заметила, что собака начала отказываться от корма и пытается достать что-то из пасти лапами. На приёме извлекли кость размером 5,3 см. Наглядное доказательство, почему рацион животных не должен включать в себя кости.",
  },
  {
    image: "/gallery/cystocentesis.jpg",
    title: "Забор мочи цистоцентезом под контролем УЗИ",
    description:
      "Моча не контаминируется микробами. Данный способ является альтернативой сбору мочи через уретральный катетер и сбору с лотка. Метод применяется для выделения бактериальных культур и обеспечивает наиболее точный результат.",
  },
  {
    image: "/gallery/fenya.jpg",
    title: "Малышка Феня",
    description:
      "На плановой овариогистерэктомии. Операция прошла успешно, пациентка чувствует себя хорошо.",
  },
  {
    image: "/gallery/puppies.jpg",
    title: "Два мальчишки ждут хозяина",
    description:
      "Люди, хватит перекладывать ответственность на сотрудников клиники, подкидывая нам щенков и котят. Стерилизуйте своих животных. Если нет финансовой возможности — не заводите их вообще. Почему вы думаете, что сотрудники должны оплачивать пребывание в клинике ваших животных, корм и вакцинацию? Два мальчишки ждут своего любящего хозяина у нас в клинике. Клинически здоровы, обработаны от внешних и внутренних паразитов, примерный возраст 1,5–2 месяца. В дальнейшем поможем с кастрацией.",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#F8F8F8]">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-8 md:pb-20 md:pt-12">
          <p className="text-[13px] font-medium uppercase tracking-widest text-gray-400">
            Галерея
          </p>
          <h1 className="mt-3 text-3xl font-medium tracking-tight text-gray-900 md:text-4xl">
            Клинические случаи и будни клиники
          </h1>
        </div>
      </section>

      {/* Карточки */}
      <section className="border-t border-gray-200 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg border border-gray-200 bg-[#F8F8F8]"
              >
                {/* Фото */}
                <div className="bg-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>

                {/* Текст */}
                <div className="p-6 md:p-8">
                  <h3 className="text-lg font-medium tracking-tight text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
