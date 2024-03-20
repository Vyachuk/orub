import React from "react";
import Link from "next/link";

import { Button, Logo } from "../UI";
import SmoothScrollLink from "@/app/utils/SmoothScrollLink";
import { BurgerMenu } from "../burger";

export const Header = () => {
  return (
    <>
      <div>
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
            <BurgerMenu />
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
