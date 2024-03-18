import React from "react";
import { DescriptionMarkup } from "../descriptionMarkup";
import { Button } from "../UI";

const info = {
  title: "Донат",
  first:
    "Для допомоги нашим воїнам у рятуванні цивільних, ваша підтримка є критично важливою.",
  second: "Кожен ваш внесок рятує життя - підтримайте нас.",
};

export const Donate = () => {
  return (
    <section
      id="donate"
      className="bg-black flex flex-col items-center gap-4 sm:gap-9 pt-[40px] pb-[80px] sm:pb-[175px]"
    >
      <h2 className=" mx-auto my-0 max-w-[80%] text-center text-xl sm:text-3xl font-normal font-nastup leading-loose leading-7 tracking-wider ">
        {"Ваша підтримка- це наша сила"}
      </h2>
      <div className="py-[40px] px-[22px] bg-[#2F422E] sm:min-h-[415px] sm:max-w-[754px] xl:max-w-[845px] sm:py-[50px] sm:px-[64px]  relative z-20">
        <div className="w-[65px] h-[38px] mb-[30px] mx-auto mt-0">
          <div className="bg-[#61B2E4] h-[50%] w-full"></div>
          <div className="bg-[#FCEA2B] h-[50%] w-full"></div>
        </div>
        <h2 className="text-xl sm:text-3xl text-center font-normal font-nastup leading-loose tracking-wider mb-4">
          {info.title}
        </h2>
        <div className="w-[60%] h-[1px] border-2 border-white mx-auto  mb-8"></div>
        <p className="text-base font-raleway leading-normal">{info.first}</p>
        <div className="w-full h-[1px] border border-white mx-auto my-6 "></div>
        <p className="text-base font-raleway leading-normal mb-[67px]">
          {info.second}
        </p>
        <div className="flex justify-center">
          <Button text="Донат" disabled={true} />
        </div>
      </div>
    </section>
  );
};
