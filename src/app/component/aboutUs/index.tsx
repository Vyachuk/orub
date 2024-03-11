import React from "react";
import Image from "next/image";
import backImage from "/public/img/aboutBack.webp";

export const AboutUs = () => {
  return (
    <section className="bg-black pt-[80px] sm:pt-[305px] pb-[40px] sm:pb-[105px] xl:py-[150px] relative w-full">
      <div className="py-[40px] px-[22px] bg-[#2F422E] sm:min-h-[415px] xl:w-[63%] xl:ml-auto sm:py-[50px]  sm:px-[64px]  relative z-20">
        <h2 className="text-xl sm:text-3xl text-center font-normal font-nastup leading-loose tracking-wider">
          Про нас
        </h2>
        <div class="w-40 h-[1px] border-2 border-white mx-auto  mb-8"></div>
        <p className="text-base font-raleway leading-normal">
          150 Окремий Розвідувально-Ударний Батальйон був сформований на базі
          150 окремої розвідувальної роти. Команда складається з кваліфікованих
          фахівців різних військових підрозділів та структур, кожен з яких має
          значний бойовий досвід, як в межах України, так і на міжнародному
          рівні.
        </p>
        <div className="w-full h-[1px] border border-white mx-auto my-6 "></div>
        <p className="text-base font-raleway leading-normal">
          Наша історія - це легенда нескорених. Професіонали, зібрані з різних
          куточків країни, обєднані спільною місією: захистити та служити для
          нашої країни. Наш досвід - це наша сила.
        </p>
      </div>
      <div className="hidden sm:block absolute top-[40px] xl:top-[-190px] xl:w-[600px] xl:h-[720px] xl:right-[60%] inset-x-0 mx-auto xl:ml-auto w-[654px] z-10 xl:z-30">
        <Image
          src={backImage}
          width={654}
          height={787}
          alt="150 оруб логотип"
        />
      </div>
    </section>
  );
};
