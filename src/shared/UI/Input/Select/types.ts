import { DetailedHTMLProps, SelectHTMLAttributes } from "react";

type DefaultProps = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

export type SelectProps = DefaultProps & {
  id?: string;
  name?: string;
  options?: any[];
  optionPlaceholder: string;
  error?: any;
  label?: string;
  onChangeSelect?: (option: any) => void;
};
