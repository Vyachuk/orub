import * as Yup from "yup";
import { REGIONS } from "./constants";

const dayjs = require("dayjs");

export const FormSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(
      /^[А-ЯІЇЄҐа-яіїєґ']+\s*[А-ЯІЇЄҐа-яіїєґ']+\s*[А-ЯІЇЄҐа-яіїєґ']+\s*$/,
      "Введіть повне ім'я \"Прізвище Ім'я По батькові \""
    )
    .required("Повне ім'я обов'язкове для заповнення")
    .max(50, "Занадто довге ім'я!"),
  birthday: Yup.date()
    .max(dayjs(), "Дата народження не може бути пізніше поточної дати")
    .test(
      "is-eighteen",
      "Користувач повинен бути не молодше 18 років",
      function (value) {
        const minAgeDate = dayjs().subtract(18, "year");
        return (
          dayjs(value).isBefore(minAgeDate, "day") ||
          dayjs(value).isSame(minAgeDate, "day")
        );
      }
    )
    .required("Дата народження обов'язкова для заповнення")
    .nullable(),
  region: Yup.string()
    .oneOf(REGIONS, "Будь ласка, виберіть один з наявних регіонів")
    .required("Регіон обов'язковий для вибору"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Номер телефону повинен містити рівно 10 цифр")
    .required("Номер телефону обов'язковий для заповнення"),
  profession: Yup.string()
    .min(3, "Введіть більше 3 символів.")
    .max(30, "Введіть менше 30 символів."),
  comment: Yup.string()
    .min(3, "Введіть більше 3 символів.")
    .max(150, "Введіть менше 150 символів."),
});
