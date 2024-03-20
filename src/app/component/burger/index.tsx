import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Burger } from "./burger";

export const BurgerMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handlerClose = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <>
      {isMobileMenuOpen ? (
        <Burger handler={handlerClose} />
      ) : (
        <div
          className="xl:hidden text-white w-12 h-12"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <RxHamburgerMenu size={50} />
        </div>
      )}
    </>
  );
};
