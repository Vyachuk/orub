import React from "react";
import Image from "next/image";
import featureImg1 from "/public/img/feature/feature1_mob.webp";
import featureImg2 from "/public/img/feature/feature2_mob.webp";
import featureImg3 from "/public/img/feature/feature3_mob.webp";
import featureImg4 from "/public/img/feature/feature4_mob.webp";
import { Button } from "../UI";

export const Feature = () => {
  return (
    <section className="bg-black flex flex-col gap-4 sm:gap-9 pb-[40px] sm:pb-[50px] xl:px-0">
      <h2 className=" mx-auto my-0 max-w-[80%] text-center text-xl sm:text-3xl font-normal font-nastup leading-loose leading-7 tracking-wider ">
        З “Ударними” до перемоги
      </h2>
      <ul className="flex flex-wrap w-[343px] sm:w-[754px] xl:w-[1440px]  mx-auto my-0">
        <li
          key="1"
          className="sm:order-2 flex-col px-[28px] flex items-center justify-center gap-6 w-full h-[343px] sm:h-[377px] xl:h-[360px] sm:w-[50%] xl:w-[25%] bg-[#2F422E]"
        >
          <h3 className="text-lg font-medium font-oswald leading-7">
            Принцип: Невтомна Відвага{" "}
          </h3>
          <p>
            {
              "Невтомна відвага в душі кожного воїна нашого батальйону веде нас вперед, надихаючи на вірність нашим зобов'язанням та цінностям у будь-яких обставинах."
            }
          </p>
        </li>
        <li
          key="2"
          className="sm:order-1 w-full h-[343px] sm:h-[377px] xl:max-h-[360px] xl:max-w-[360px] object-contain sm:w-[50%] xl:w-[25%]"
        >
          <Image
            src={featureImg1}
            width={377}
            height={377}
            alt="150 оруб фото"
          />
        </li>
        <li
          key="3"
          className="sm:order-3 xl:order-4 flex-col px-[28px] flex items-center justify-center gap-6 w-full h-[343px] sm:h-[377px] xl:h-[360px] sm:w-[50%] xl:w-[25%] bg-[#2F422E]"
        >
          <h3 className="text-lg font-medium font-oswald leading-7">
            Принцип: Професіоналізм у Всьому
          </h3>
          <p>
            Кожен у нашому батальйоні - це висококваліфікований професіонал,
            відданий досягненню вищих стандартів у кожній операції. Наш
            професіоналізм - це гарантія якості та ефективності нашої роботи.
          </p>
        </li>
        <li
          key="4"
          className="sm:order-4 xl:order-3 w-full h-[343px] sm:h-[377px] xl:max-h-[360px] xl:max-w-[360px] object-contain sm:w-[50%] xl:w-[25%]"
        >
          <Image
            src={featureImg2}
            width={377}
            height={377}
            alt="150 оруб фото"
          />
        </li>
        <li
          key="5"
          className="sm:order-6 xl:order-5 flex-col px-[28px] flex items-center justify-center gap-6 w-full h-[343px] sm:h-[377px] xl:h-[360px] sm:w-[50%] xl:w-[25%] bg-[#2F422E]"
        >
          <h3 className="text-lg font-medium font-oswald leading-7">
            Принцип: Витримка та Рішучість
          </h3>
          <p>
            Витримка та рішучість ведуть нас вперед у найскладніших ситуаціях.
            Ми відточуємо ці якості кожен день, щоб бути готовими до будь-яких
            викликів, з якими ми можемо зіткнутися.
          </p>
        </li>
        <li
          key="6"
          className="sm:order-5 xl:order-6 w-full h-[343px] sm:h-[377px] xl:max-h-[360px] xl:max-w-[360px] object-contain sm:w-[50%] xl:w-[25%]"
        >
          <Image
            src={featureImg3}
            width={377}
            height={377}
            alt="150 оруб фото"
          />
        </li>
        <li
          key="7"
          className="sm:order-7  flex-col px-[28px] flex items-center justify-center gap-6 w-full h-[343px] sm:h-[377px] xl:h-[360px] sm:w-[50%] xl:w-[25%] bg-[#2F422E]"
        >
          <h3 className="text-lg font-medium font-oswald leading-7">
            Принцип: Братерство і Підтримка
          </h3>
          <p>
            Ми - не просто команда, а брати та сестри у спільній боротьбі. Наш
            сильний командний дух, взаємне братерство та підтримка кожного з нас
            є основою нашої єдності та витривалості на полі бою.
          </p>
        </li>
        <li
          key="8"
          className="sm:order-8  w-full h-[343px] sm:h-[377px] xl:max-h-[360px] xl:max-w-[360px] object-contain sm:w-[50%] xl:w-[25%]"
        >
          <Image
            src={featureImg4}
            width={377}
            height={377}
            alt="150 оруб фото"
          />
        </li>
      </ul>
      <div className="mx-auto my-0">
        <Button text="Приєднатись" handler={() => {}} />
      </div>
    </section>
  );
};
