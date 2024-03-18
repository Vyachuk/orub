import React from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button, Logo } from "../UI";
import SmoothScrollLink from "@/app/utils/SmoothScrollLink";

export const Header = () => {
  return (
    <>
      <div className="">
        <SmoothScrollLink targetId="hero">
          <Logo />
        </SmoothScrollLink>
      </div>
      <nav>
        <ul className="flex gap-[77px]">
          <li className="hidden xl:inline">
            <SmoothScrollLink targetId="about-us">Про нас</SmoothScrollLink>
          </li>
          <li className="hidden xl:inline">
            <SmoothScrollLink targetId="features">Принципи</SmoothScrollLink>
          </li>
          <li className="hidden xl:inline">
            <SmoothScrollLink targetId="description">
              Філософія
            </SmoothScrollLink>
          </li>
          <li className="hidden xl:inline">
            <SmoothScrollLink targetId="donate">Донат</SmoothScrollLink>
          </li>
          <li>
            <div className="xl:hidden text-white w-12 h-12">
              <GiHamburgerMenu size={50} />
            </div>
          </li>
        </ul>
      </nav>
      <div className="hidden xl:block">
        <SmoothScrollLink targetId="form">
          <Button text={"Заповнити анкету"} handler={() => {}} />
        </SmoothScrollLink>
      </div>
    </>
  );
};
