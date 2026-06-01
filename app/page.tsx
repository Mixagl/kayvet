import CareBlock from "@/components/CareBlock";
import Directions from "@/components/Directions";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная",
  description:
    "KayVet — ветеринарная клиника в Уссурийске. Круглосуточно, без выходных. Терапия, хирургия, диагностика, зоотакси от 1000 ₽, вызов врача на дом.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Directions />
      <Services />
      <CareBlock />
      <Team />
    </>
  );
}
