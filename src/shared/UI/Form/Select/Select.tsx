import { Controller } from "react-hook-form";
import { Select } from "shared";
import { ISelectProps } from "./types";

export const FormSelect: React.FC<ISelectProps> = ({
  id,
  name,
  options,
  label,
  optionPlaceholder,
  control,
  error,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }: any) => (
        <Select
          {...field}
          id={id}
          name={name}
          label={label}
          options={options}
          optionPlaceholder={optionPlaceholder}
          value={field.value}
          onChange={(value) => {
            field.onChange(value);
          }}
          error={error}
        />
      )}
    />
  );
};
