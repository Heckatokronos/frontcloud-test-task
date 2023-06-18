import { Validations } from "features/create/types";
import { ObjectSchema, object, string } from "yup";
import { MainInputs } from "./types";

export const mainSchema: ObjectSchema<MainInputs> = object({
  phone: string().required(Validations.required).min(10, Validations.phoneMin),
  email: string().required(Validations.required).email(Validations.email),
});
