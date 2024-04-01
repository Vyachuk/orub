import React from "react";

import { Button } from "../UI";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import SmoothScrollLink from "@/app/utils/SmoothScrollLink";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="hero-backdrop font-nastup bg-no-repeat bg-right object-fit bg-cover w-[100vw] h-[100dvh] sm:h-[813px] sm:bg-center lx:bg-right"
    >
      <h1 className="font-nastup leading-9 sm:leading-[4rem] text-2xl sm:text-5xl pt-[50dvh] sm:pt-[200px] font-thin max-w-[450px] sm:max-w-[550px] xl:max-w-[700px] tracking-wide">
        150 Окремий розвідувально- ударний батальйон
      </h1>
      <div className="w-full h-[4px] border-2 my-2 border-white max-w-[550px] sm:my-6"></div>
      <div className="text-2xl sm:text-3xl font-medium font-oswald leading-9 sm:leading-10 tracking-wide mb-[67px] ">
        Відвага, що Перемагає Темряву
      </div>
      <div className="flex justify-center sm:justify-start">
        <SmoothScrollLink targetId="form">
          <Button text="Приєднатись" handler={() => {}} />
        </SmoothScrollLink>
      </div>
      <div className="hidden xl:flex flex-col gap-6 absolute right-20 top-[360px] ">
        <Link
          href={"https://www.instagram.com/150oryb?igsh=dnl3YWh6bW53MHlw"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <CiInstagram
            size={36}
            className="hover:fill-[#2F422E] hover:cursor-pointer"
          />
        </Link>
        <Link
          href={"https://www.facebook.com/profile.php?id=61553287769872"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <CiFacebook
            size={36}
            className="hover:fill-[#2F422E] hover:cursor-pointer"
          />
        </Link>
      </div>
    </section>
  );
};
