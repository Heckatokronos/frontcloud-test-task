import { radioboxes } from "entities/root";
import { RadioboxField } from "../radioboxField/radioboxField";
import { IRadioboxGroup, IRadioboxGroupControl } from "./types";

const RadioboxGroupField: React.FC<IRadioboxGroup> = ({
  id,
  name,
  label,
  value,
  control,
}) => {
  return (
    <RadioboxField
      id={id}
      name={name}
      label={label}
      control={control}
      value={value}
    />
  );
};

export const RadioboxGroup: React.FC<IRadioboxGroupControl> = ({ control }) => {
  return (
    <div>
      <p> Radiobox группа </p>
      {radioboxes.map((radiobox) => (
        <RadioboxGroupField
          key={radiobox.id}
          id={radiobox.id}
          name={radiobox.name}
          label={radiobox.label}
          value={radiobox.value}
          control={control}
        />
      ))}
    </div>
  );
};
