import { InferType } from "yup";
import { mainSchema } from "./schema";

export interface MainInputs {
  phone: string;
  email: string;
}

export type MainType = InferType<typeof mainSchema>;
