import React from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button, Logo } from "../UI";

export const Header = () => {
  return (
    <>
      <div className="">
        <Logo height={"78"} />
      </div>
      <nav>
        <ul className="flex gap-[77px]">
          <li className="hidden xl:inline">
            <Link href="#about-us">Про нас</Link>
          </li>
          <li className="hidden xl:inline">
            <Link href="#features">Принципи</Link>
          </li>
          <li className="hidden xl:inline">
            <Link href="#description">Філософія</Link>
          </li>
          <li className="hidden xl:inline">
            <Link href="#donate">Донат</Link>
          </li>
          <li>
            <div className="xl:hidden text-white w-12 h-12">
              <RxHamburgerMenu size={50} />
            </div>
          </li>
        </ul>
      </nav>
      <div className="hidden xl:block">
        <Button text={"Заповнити анкету"} handler={() => {}} />
      </div>
    </>
  );
};
