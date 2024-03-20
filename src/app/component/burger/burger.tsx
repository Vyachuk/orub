import React from "react";

import { RxCross2 } from "react-icons/rx";
import { Logo } from "../UI";
import SmoothScrollLink from "@/app/utils/SmoothScrollLink";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";

type BurgerProps = {
  handler: () => void;
};

export const Burger: React.FC<BurgerProps> = ({ handler }) => {
  return (
    <div className="w-[100vw] h-[100dvh] flex flex-col justify-between bg-black fixed top-0 left-0 bg-gradient-to-l to-[#4D5D4C] from-[#2F422E] py-[40px] px-4 sm:px-[40px]">
      <div className="absolute top-9 right-7" onClick={handler}>
        <RxCross2 size={40} />
      </div>
      <div className="flex justify-center w-full" onClick={handler}>
        <SmoothScrollLink targetId="hero">
          <Logo size={124} />
        </SmoothScrollLink>
      </div>
      <nav>
        <ul className="flex flex-col gap-[45px] text-xl sm:text-2xl font-raleway">
          <li onClick={handler}>
            <SmoothScrollLink targetId="about-us">Про нас</SmoothScrollLink>
          </li>
          <li onClick={handler}>
            <SmoothScrollLink targetId="features">Принципи</SmoothScrollLink>
          </li>
          <li onClick={handler}>
            <SmoothScrollLink targetId="description">
              Філософія
            </SmoothScrollLink>
          </li>
          <li onClick={handler}>
            <SmoothScrollLink targetId="donate">Донат</SmoothScrollLink>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col gap-3">
        <div className="flex gap-9 ">
          <Link
            href={"https://www.instagram.com/150oryb?igsh=dnl3YWh6bW53MHlw"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <CiInstagram
              size={40}
              className="hover:fill-[#2F422E] hover:cursor-pointer"
            />
          </Link>
          <Link
            href={"https://www.facebook.com/profile.php?id=61553287769872"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <CiFacebook
              size={40}
              className="hover:fill-[#2F422E] hover:cursor-pointer"
            />
          </Link>
        </div>
        <div className="border-[2px] border-white w-[80%]"></div>
        <p className=" text-2xl font-nastup leading-9 tracking-wide">
          150 Окремий розвідувально- ударний батальйон
        </p>
      </div>
    </div>
  );
};
