import { Controller } from "react-hook-form";
import { IFieldProps } from "./types";
import { Input } from "shared";

export const Field: React.FC<IFieldProps> = ({
  advantage,
  control,
  error,
  id,
  label,
  name,
  placeholder,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }: any) => (
        <Input
          {...field}
          id={id}
          name={name}
          error={error}
          placeholder={placeholder}
          label={label}
          onChange={(value) => {
            field.onChange(value);
          }}
          advantage={advantage}
        />
      )}
    />
  );
};
