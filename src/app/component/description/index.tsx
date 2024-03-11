import React from "react";
import { DescriptionMarkup } from "../descriptionMarkup";

const info = {
  title: "Мовчання - золото",
  first:
    "У світі, де слова можуть бути зброєю, наше мовчання є нашим щитом, а дії - нашим голосом. Сила нашого батальйону вимірюється не словами, а вчинками, які сприяють захисту та безпеці наших громадян.",
  second:
    "Наша історія - це легенда нескорених. Професіонали, зібрані з різних куточків країни, обєднані спільною місією: захистити та служити для нашої країни. Наш досвід - це наша сила.",
};

export const Description = () => {
  return (
    <section className="bg-black sm:bg-[#2F422E]">
      <DescriptionMarkup data={info} />
    </section>
  );
};
