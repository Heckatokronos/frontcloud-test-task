import { InferType } from "yup";
import { step1Schema } from "./schema";
import { Sex } from "shared";

export interface IStep1Inputs {
  nickname: string;
  name: string;
  surname: string;
  sex: Sex;
}

export type Step1Type = InferType<typeof step1Schema>;
