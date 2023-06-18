import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type DefaultBoxProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type CheckboxProps = DefaultBoxProps & {
  id: string;
  name: string;
  value?: string;
  type: "checkbox" | "radio";
  label: string;
};
