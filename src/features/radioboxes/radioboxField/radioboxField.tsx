import { Controller } from "react-hook-form";
import { Radiobox } from "../radiobox/radiobox";
import { IRadioboxField } from "./types";

export const RadioboxField: React.FC<IRadioboxField> = ({
  id,
  name,
  label,
  control,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ...props } }) => (
        <Radiobox
          id={id}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          {...props}
        >
          {label}
        </Radiobox>
      )}
    />
  );
};
