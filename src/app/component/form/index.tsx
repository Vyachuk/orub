import React, { useEffect } from "react";
import Image from "next/image";

import { REGIONS } from "./constants";
import { useFormik } from "formik";
import { FormSchema } from "./validate";
import { Button } from "../UI";
import TextField from "@material-ui/core/TextField";
import { LuCalendarDays } from "react-icons/lu";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { FaRegSquare } from "react-icons/fa6";
import { LuCheckSquare } from "react-icons/lu";

import logo from "/public/img/aboutBack.webp";

import dayjs from "dayjs";
import utcPlugin from "dayjs/plugin/utc";
dayjs.extend(utcPlugin);

import Checkbox from "@mui/material/Checkbox";
import { sendData } from "./fetch";

export const FormSection = () => {
  const today = new Date();
  const dateToday = `${today.getUTCFullYear()}-${(today.getUTCMonth() + 1)
    .toString()
    .padStart(2, "0")}-${today.getUTCDate().toString().padStart(2, "0")}`;

  const formik = useFormik({
    initialValues: {
      fullName: "",
      birthday: dayjs("1991/08/24"),
      region: REGIONS[0],
      phone: "",
      profession: "",
      comment: "",
      policy: false,
    },
    validationSchema: FormSchema,
    onSubmit: async (values, { resetForm }) => {
      // const newBirthday = values.birthday
      //   .utc()
      //   .set("hour", 0)
      //   .set("minute", 0)
      //   .set("second", 0)
      //   .add(1, "day");

      const result = await sendData({
        ...values,
        birthday: dayjs(values.birthday).format("L"),
      });
      // toast.success("Hello, World!");

      // resetForm();
    },
  });

  const isSubmitButtonAvailable =
    formik.values.fullName &&
    formik.values.birthday &&
    formik.values.region &&
    formik.values.phone &&
    formik.values.policy &&
    Object.keys(formik.errors).length === 0;

  useEffect(() => {
    console.log(formik);
  }, [formik]);
  return (
    <section
      id="form"
      className="bg-black flex flex-col gap-4 sm:gap-6 py-[40px] sm:pb-[50px] xl:py-[110px] relative overflow-hidden"
    >
      <h2 className=" text-center sm:text-left text-6xl sm:text-5xl font-nastup  leading-10 tracking-wider ">
        {"Анкета"}
      </h2>
      <h3 className=" xl:max-w-[60%]  text-center sm:text-left  text-2xl sm:text-3xl font-nastup  leading-9 tracking-wider ">
        {"ДЛЯ ВСТУПУ ДО 150 ОКРЕМОГО РОЗВІДУВАЛЬНО-УДАРНОГО БАТАЛЬЙОНУ"}
      </h3>

      <form
        onSubmit={formik.handleSubmit}
        className="max-w-[520px] xl:max-w-[620px]"
      >
        <div className="w-80 mb-4">
          <span className="text-gray-50 text-3xl font-medium font-oswald leading-10">
            {"Повне імя (ПІП)"}
          </span>
          <span className="text-red-600 text-3xl font-medium font-oswald leading-10">
            *
          </span>
        </div>
        <TextField
          fullWidth
          id="fullName"
          name="fullName"
          placeholder="Іваненко Іван Іванович"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
        />
        <div className="w-80 mb-4 mt-[48px]">
          <span className="text-gray-50 text-3xl font-medium font-oswald leading-10">
            {"Дата народження"}
          </span>
          <span className="text-red-600 text-3xl font-medium font-oswald leading-10">
            *
          </span>
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="relative">
            <LuCalendarDays size={36} className="absolute top-1 right-2" />
            <DatePicker
              name="birthday"
              value={formik.values.birthday}
              onChange={(newValue) => {
                formik.setFieldValue("birthday", newValue);
              }}
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            />
            {formik.errors.birthday &&
              typeof formik.errors.birthday === "string" && (
                <span style={{ color: "#f44336", fontSize: "12px" }}>
                  {formik.errors.birthday}
                </span>
              )}
          </div>
        </LocalizationProvider>

        <div className="w-80 mb-4 mt-[48px]">
          <span className="text-gray-50 text-3xl font-medium font-oswald leading-10">
            {"Область проживання"}
          </span>
          <span className="text-red-600 text-3xl font-medium font-oswald leading-10">
            *
          </span>
        </div>
        <FormControl
          variant="standard"
          sx={{
            m: 1,
            width: "100%",
          }}
        >
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            name="region"
            value={formik.values.region}
            onChange={formik.handleChange}
            label="region"
            sx={{
              width: "100%",
              color: "white !important",
              "& .MuiSelect-icon": {
                fill: "white",
              },
              "& .MuiInputBase-input": {
                color: "white",
                lineHeight: "2.25rem !important",
                fontSize: "1.5rem !important",
                fontFamily: "Raleway !important",
                paddingLeft: "8px !important",
                borderBottom: "1px solid white",
              },
            }}
          >
            {REGIONS.map((reg) => (
              <MenuItem sx={{ width: "100%" }} key={reg} value={reg}>
                {reg}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className="w-80 mb-4 mt-[48px]">
          <span className="text-gray-50 text-3xl font-medium font-oswald leading-10">
            {"Номер телефону"}
          </span>
          <span className="text-red-600 text-3xl font-medium font-oswald leading-10">
            *
          </span>
        </div>
        <TextField
          fullWidth
          id="phone"
          name="phone"
          placeholder="0974444444"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <div className="w-80 mb-4 mt-[48px]">
          <span className="text-gray-50 text-3xl font-medium font-oswald leading-10">
            {"Професія"}
          </span>
        </div>
        <TextField
          fullWidth
          id="profession"
          name="profession"
          placeholder="Автомеханік"
          value={formik.values.profession}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.profession && Boolean(formik.errors.profession)}
          helperText={formik.touched.profession && formik.errors.profession}
        />

        <div className="w-80 mb-4 mt-[48px]">
          <span className="text-gray-50 text-3xl font-medium font-oswald leading-10">
            {"Коментар"}
          </span>
        </div>
        <TextField
          fullWidth
          id="comment"
          name="comment"
          value={formik.values.comment}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.comment && Boolean(formik.errors.comment)}
          helperText={formik.touched.comment && formik.errors.comment}
        />

        <div className="flex my-4 sm:mb-[42px] text-base font-raleway">
          <Checkbox
            // {...label}
            icon={<FaRegSquare size={24} color={"white"} />}
            checkedIcon={<LuCheckSquare size={24} color={"white"} />}
            name="policy"
            checked={formik.values.policy}
            onChange={formik.handleChange}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "48px",
              height: "48px",
            }}
          />
          <span className="w-[300px] font-raleway text-base ">
            Чи даєте Ви згоду на обробку персональних даних?{" "}
          </span>
        </div>

        <div className="flex justify-center sm:justify-start items-center">
          <Button
            text="Відправити заявку"
            type="submit"
            disabled={!isSubmitButtonAvailable}
          />
        </div>
      </form>
      <Image
        src={logo}
        alt="Логотип 150 ОРУБ"
        className="hidden sm:block absolute bottom-[50px] xl:bottom-[244px] left-[50%]"
      />
    </section>
  );
};
