import React from "react";
import Image from "next/image";
import backImage from "/public/img/aboutBack.webp";
import { DescriptionMarkup } from "../descriptionMarkup";
import { AboutUsBackDrop } from "./AboutUsBackDrop";

const info = {
  title: "Про нас",
  first:
    "150 Окремий Розвідувально-Ударний Батальйон був сформований на базі 150 окремої розвідувальної роти. Команда складається з кваліфікованих фахівців різних військових підрозділів та структур, кожен з яких має значний бойовий досвід, як в межах України, так і на міжнародному рівні.",
  second:
    "Наша історія - це легенда нескорених. Професіонали, зібрані з різних куточків країни, обєднані спільною місією: захистити та служити для нашої країни. Наш досвід - це наша сила.",
};

export const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="bg-black pt-[80px] sm:pt-[305px] pb-[40px] sm:pb-[105px] sm:pb-[200px] xl:py-[150px] relative w-full"
    >
      <DescriptionMarkup data={info}>
        <div className="hidden sm:block absolute top-[40px] xl:top-[-190px] xl:w-[600px] xl:h-[720px] xl:right-[60%] inset-x-0 mx-auto xl:ml-auto w-[654px] z-10 xl:z-30">
          {/* <Image
            src={backImage}
            width={654}
            height={787}
            alt="150 оруб логотип"
          /> */}
          <AboutUsBackDrop />
        </div>
      </DescriptionMarkup>
    </section>
  );
};
