import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type DefaultBoxProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type RadioboxProps = DefaultBoxProps & {
  id?: string;
  onChangeOption?: (checked: any) => void;
};
