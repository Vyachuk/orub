import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  text: string;
  handler?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  text,
  handler,
  type = "button",
  disabled = false,
}) => {
  return (
    <div
      className={
        disabled
          ? "w-64 h-16 bg-[#444444] text-[#6F6F6F] flex border border-white justify-center items-center"
          : "w-64 h-16 bg-[#2F422E] hover:bg-[#F7F8F9] active:bg-[#0F0F0F] active:text-white flex border border-white hover:text-[#2F422E] justify-center items-center hover:cursor-pointer"
      }
    >
      <button
        className="text-base font-normal font-nastup leading-normal tracking-wider "
        onClick={handler}
        type={type}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
};
