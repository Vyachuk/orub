import React from "react";
import { DescriptionMarkup } from "../descriptionMarkup";

const info = {
  title: "Мовчання - золото",
  first:
    "У світі, де слова можуть бути зброєю, наше мовчання є нашим щитом, а дії - нашим голосом. Сила нашого батальйону вимірюється не словами, а вчинками, які сприяють захисту та безпеці наших громадян.",
  second:
    "З міркувань безпеки ми не можемо висвітлювати більшість особового складу, детально описувати специфіку роботи нашого батальйону. Про результати нашої роботи ви обов’язково дізнаєтесь із засобів масової інформації.",
};

export const Description = () => {
  return (
    <section
      id="description"
      className="bg-black sm:bg-[#2F422E] py-[40px] my-[40px]"
    >
      <DescriptionMarkup data={info} />
    </section>
  );
};
