import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type DefaultProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface InputProps extends DefaultProps {
  id?: string;
  label?: string;
  error?: any;
  advantage?: boolean;
  onChangeValue?: (value: string) => void;
}
