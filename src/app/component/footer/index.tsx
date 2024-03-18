import React from "react";
import Link from "next/link";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { Logo } from "../UI";
import SmoothScrollLink from "@/app/utils/SmoothScrollLink";

export const Footer = () => {
  const getYear = new Date().getFullYear();
  return (
    <footer className="w-full h-[467px] sm:h-[224px] xl:h-[360px] p-4 sm:px-10 xl:px-[90px] flex flex-col justify-between">
      <div className="flex flex-col sm:flex-row gap-6 xl:gap-[120px] sm:items-center sm:justify-around xl:justify-center">
        <div className="xl:hidden">
          <SmoothScrollLink targetId="hero">
            <Logo />
          </SmoothScrollLink>
        </div>
        <div className="hidden xl:block">
          <Logo size={93} />
        </div>
        <nav>
          <ul className="flex flex-col sm:flex-row gap-[20px] sm:gap-[75px] text-xl font-raleway">
            <li>
              <SmoothScrollLink targetId="about-us">Про нас</SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink targetId="features">Принципи</SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink targetId="description">
                Філософія
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink targetId="donate">Донат</SmoothScrollLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col gap-3 items-center ">
        <div className="flex gap-6 ">
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
        <div className="w-full sm:max-w-[70%] sm:max-w-[40%] border-t-[1px] border-t-white py-2 px-4 flex flex-col items-center ">
          <p>
            <span>&copy;</span>
            {getYear}
          </p>
          <div className="flex flex-col sm:flex-row xl:flex-col sm:gap-1">
            <p className="text-center">
              150 Окремий Розвідувально-Ударний Батальйон.
            </p>
            <p className="text-center">Всі права захищені</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
