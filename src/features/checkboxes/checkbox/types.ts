import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type DefaultBoxProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type CheckboxProps = DefaultBoxProps & {
  id?: string;
  onChangeChecked?: (checked: boolean) => void;
};
