import React from "react";

const videoData = [
  {
    title: "Знищення ворожої гармати 2С7 «Піон» бійцями 150 ОРУБа",
    src: "https://youtube.com/embed/pGt5S65ZA9A",
  },
  {
    title: "БУК і РЛС, знищені завдяки нашим бійцям 150 ОРУБ",
    src: "https://www.youtube.com/embed/bihjGCDpmaU",
  },
  {
    title: "Знайти та знищити. Підбірка роботи бійців 150 ОРУБа",
    src: "https://www.youtube.com/embed/Q6cQXy6SJsg",
  },
];

export const VideoSection = () => {
  return (
    <section className="bg-black flex flex-col gap-4 sm:gap-9 py-[40px] sm:py-[110px] xl:px-0">
      <h2 className="mb-3 mx-auto my-0 max-w-[90%] text-center text-xl sm:text-3xl font-normal font-nastup leading-loose leading-7 tracking-wider ">
        {
          '"Коли окупанти засинають, наш батальйон прокидається - готовий діяти, охороняючи мир у темряві."'
        }
      </h2>
      <div className="mb-6 w-full mx-auto my-0 xl:w-[80%] h-[1px] border-2 border-white" />
      <ul className="flex flex-col xl:flex-row gap-4 flex-wrap items-center justify-center">
        {videoData.map((video) => (
          <li
            key={video.title}
            className="w-full sm:w-[440px] xl:w-[30%] h-[240px] sm:h-[260px]"
          >
            <iframe
              src={video.src}
              title={video.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </li>
        ))}
      </ul>
    </section>
  );
};
