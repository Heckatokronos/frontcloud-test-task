import { ObjectSchema, object, string } from "yup";
import { IStep1Inputs } from "./types";
import { Validations } from "features/create/types";
import { Sex } from "shared";

export const phoneRegEx =
  /^\+?[\d]\s?\(?[\d]{3}\)?\s?[\d]{3}-?[\d]{2}-?[\d]{2}$/;
export const nicknameRegEx = /^[A-Za-zА-Яа-яёЁ\d]+$/;
export const nameRegEx = /^[A-Za-zА-Яа-яёЁ]+$/;

export const step1Schema: ObjectSchema<IStep1Inputs> = object({
  nickname: string()
    .required(Validations.required)
    .max(30, Validations.nicknameMax)
    .matches(nicknameRegEx, Validations.notSpecialSymbols),
  name: string()
    .required(Validations.required)
    .max(50, Validations.nameMax)
    .matches(nameRegEx, Validations.onlyAlphabetic),
  surname: string()
    .required(Validations.required)
    .max(50, Validations.nameMax)
    .matches(nameRegEx, Validations.onlyAlphabetic),
  sex: string<Sex.Man | Sex.Woman>().required(Validations.required),
});
