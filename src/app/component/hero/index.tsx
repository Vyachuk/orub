import React from "react";
import { FiInstagram } from "react-icons/fi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { Button } from "../UI";

export const Hero = () => {
  return (
    <section className="hero-backdrop font-nastup bg-no-repeat bg-right object-fit bg-cover w-[100vw] h-[813px] sm:bg-center lx:bg-right">
      <h1 className="font-nastup leading-9 sm:leading-[4rem] text-2xl sm:text-5xl pt-[475px] sm:pt-[200px] font-thin max-w-[450px] sm:max-w-[550px] xl:max-w-[700px] tracking-wide">
        150 Окремий розвідувально- ударний батальйон
      </h1>
      <div className="w-full h-[4px] border-2 my-2 border-white max-w-[550px] sm:my-6"></div>
      <div className="text-2xl sm:text-3xl font-medium font-oswald leading-9 sm:leading-10 tracking-wide mb-[67px] ">
        Відвага, що Перемагає Темряву
      </div>
      <div className="flex justify-center sm:justify-start">
        <Button text="Приєднатись" handler={() => {}} />
      </div>
      <div className="hidden xl:flex flex-col gap-6 absolute right-20 top-[360px] ">
        <FiInstagram size={36} />
        <RiFacebookCircleLine size={36} />
      </div>
    </section>
  );
};
