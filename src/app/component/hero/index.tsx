import React from "react";
import bg from "/public/img/heroMob.webp";
import { Button } from "../UI";

export const Hero = () => {
  return (
    <div className="hero-backdrop font-nastup bg-no-repeat bg-right object-fit bg-cover relative px-4 left-[-16px] w-[100vw] h-[100vh]">
      <h1 className="font-nastup leading-9 text-2xl pt-[475px] font-thin">
        150 Окремий розвідувально- ударний батальйон
      </h1>
      <div className="w-full h-[4px] border-2 my-2 border-white"></div>
      <div className="text-2xl font-medium font-oswald leading-9 tracking-wide mb-[67px]">
        Відвага, що Перемагає Темряву
      </div>
      <Button text="Приєднатись" handler={() => {}} />
    </div>
  );
};
