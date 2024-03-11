import React from "react";

type ButtonProps = {
  text: string;
  handler: () => void;
};

export const Button: React.FC<ButtonProps> = ({ text, handler }) => {
  return (
    <div className="w-64 h-16 bg-[#2F422E] flex border border-white justify-center items-center">
      <button
        className="text-base font-normal font-nastup leading-normal tracking-tight"
        onClick={handler}
      >
        {text}
      </button>
    </div>
  );
};
