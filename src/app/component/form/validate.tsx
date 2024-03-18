import * as Yup from "yup";
import { REGIONS } from "./constants";

export const FormSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(
      /^[А-ЯІЇЄҐа-яіїєґ']+ [А-ЯІЇЄҐа-яіїєґ']+ [А-ЯІЇЄҐа-яіїєґ']+$/,
      "Введіть повне ім'я \"Прізвище Ім'я По батькові \""
    )
    .required("Повне ім'я обов'язкове для заповнення")
    .max(50, "Занадто довге ім'я!"),
  birthday: Yup.date()
    .max(new Date(), "Дата народження не може бути пізніше поточної дати")
    .required("Дата народження обов'язкова для заповнення"),
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
