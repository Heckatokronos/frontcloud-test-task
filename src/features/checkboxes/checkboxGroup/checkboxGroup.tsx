import { checkboxes } from "entities/root";
import { CheckoxField } from "../checkboxField/checkboxField";
import { ICheckboxGroup, ICheckboxGroupControl } from "./types";

const CheckboxGroupField: React.FC<ICheckboxGroup> = ({
  id,
  name,
  label,
  control,
}) => {
  return <CheckoxField id={id} name={name} label={label} control={control} />;
};

export const CheckboxGroup: React.FC<ICheckboxGroupControl> = ({ control }) => {
  return (
    <div>
      <p> Checkbox группа </p>
      {checkboxes.map((checkbox) => (
        <CheckboxGroupField
          key={checkbox.id}
          id={checkbox.id}
          name={checkbox.name}
          label={checkbox.label}
          control={control}
        />
      ))}
    </div>
  );
};
