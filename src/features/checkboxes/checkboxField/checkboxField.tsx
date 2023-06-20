import { Controller } from "react-hook-form";
import { Checkbox } from "../checkbox/checkbox";
import { ICheckboxGroup } from "./types";

export const CheckoxField: React.FC<ICheckboxGroup> = ({
  id,
  name,
  control,
  label,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Checkbox
          id={id}
          checked={field.value}
          onChangeChecked={(value: boolean) => {
            field.onChange(value);
          }}
        >
          {label}
        </Checkbox>
      )}
    />
  );
};
