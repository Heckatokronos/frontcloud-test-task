import React from "react";
import { v4 } from "uuid";
import { ButtonContainer } from "features/buttonContainer/buttonContainer";
import { Button, useAppDispatch, useAppSelector } from "shared";
import { CreateInputs } from "../types";
import { useForm } from "react-hook-form";
import { AdvantageItem } from "features/advantageItem/advantageItem";
import { CheckboxGroup } from "features/checkboxes";
import { Advantage, Steps } from "entities/root";
import {
  addAdvantage,
  addAdvantages,
  changeStep,
  clearCheckboxes,
  selectRadiobox,
} from "entities/root/model/rootSlice";

export const Step2: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const dispatch = useAppDispatch();
  const advantages = useAppSelector(addAdvantages);
  const radio = useAppSelector(selectRadiobox);

  const submitHandler = () => {
    localStorage.setItem(CreateInputs.RadioGroup, radio);
    dispatch(clearCheckboxes());
    dispatch(changeStep(Steps.Three));
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label>Преимущества</label>
        {advantages &&
          advantages.map((item: Advantage) => (
            <AdvantageItem key={item.id} advantage={item} />
          ))}
        <Button
          id="button-add"
          variant="outlined"
          type="button"
          onClick={() => dispatch(addAdvantage({ id: v4(), text: "" }))}
        >
          +
        </Button>
      </div>
      <CheckboxGroup control={control} />
      <ButtonContainer id="2" buttonPrevState="Назад" buttonNextState="Далее" />
    </form>
  );
};
