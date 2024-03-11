import React, { ReactNode } from "react";

type DescMarkUp = {
  data: {
    title: string;
    first: string;
    second: string;
  };
  children?: ReactNode;
};

export const DescriptionMarkup = ({ data, children }: DescMarkUp) => {
  const { title, first, second } = data;
  return (
    <>
      <div
        className={
          children
            ? "py-[40px] px-[22px] bg-[#2F422E] sm:min-h-[415px] xl:w-[63%] xl:ml-auto sm:py-[50px]  sm:px-[64px]  relative z-20"
            : "py-[40px] px-[22px] bg-[#2F422E] mx-auto my-0 sm:w-[627px]"
        }
      >
        <h2 className="text-xl sm:text-3xl text-center font-normal font-nastup leading-loose tracking-wider mb-4">
          {title}
        </h2>
        <div className="w-[60%] h-[1px] border-2 border-white mx-auto  mb-8"></div>
        <p className="text-base font-raleway leading-normal">{first}</p>
        <div className="w-full h-[1px] border border-white mx-auto my-6 "></div>
        <p className="text-base font-raleway leading-normal">{second}</p>
      </div>
      {children}
    </>
  );
};
