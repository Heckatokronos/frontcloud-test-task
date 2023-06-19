import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Step1Type } from "./model/types";
import { step1Schema } from "./model/schema";
import { Field, FormSelect, Sex, useAppDispatch } from "shared";
import { Steps, getArrayFromEnum } from "entities/general";
import { useEffect } from "react";
import { CreateInputs } from "../types";
import { ButtonContainer } from "features/buttonContainer/buttonContainer";
import { changeStep } from "entities/root/model/rootSlice";

export const Step1: React.FC = () => {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Step1Type>({
    defaultValues: {
      nickname: "",
      name: "",
      surname: "",
    },
    resolver: yupResolver(step1Schema),
  });

  const dispatch = useAppDispatch();

  const submitHandler = (): void => {
    localStorage.setItem(
      CreateInputs.Nickname,
      control._getWatch(CreateInputs.Nickname)
    );
    localStorage.setItem(
      CreateInputs.Name,
      control._getWatch(CreateInputs.Name)
    );
    localStorage.setItem(
      CreateInputs.Surname,
      control._getWatch(CreateInputs.Surname)
    );
    localStorage.setItem(CreateInputs.Sex, control._getWatch(CreateInputs.Sex));
    dispatch(changeStep(Steps.Two));
  };

  // Тут нужно придумать setItemFromLocalStorage как отдельный handler

  useEffect(() => {
    const nickname = localStorage.getItem(CreateInputs.Nickname);
    if (nickname) setValue(CreateInputs.Nickname, nickname);

    const name = localStorage.getItem(CreateInputs.Name);
    if (name) setValue(CreateInputs.Name, name);

    const surname = localStorage.getItem(CreateInputs.Surname);
    if (surname) setValue(CreateInputs.Surname, surname);

    const sex = localStorage.getItem(CreateInputs.Sex);
    if (sex) setValue(CreateInputs.Sex, sex === Sex.Man ? Sex.Man : Sex.Woman);
  }, [setValue]);

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Field
        id="field-nickname"
        name={CreateInputs.Nickname}
        label="Никнейм"
        placeholder="Введите ваш никнейм..."
        control={control}
        error={errors.nickname?.message}
      />
      <Field
        id="field-name"
        name={CreateInputs.Name}
        label="Имя"
        placeholder="Введите ваше имя..."
        control={control}
        error={errors.name?.message}
      />
      <Field
        id="field-surname"
        name={CreateInputs.Surname}
        label="Фамилия"
        placeholder="Введите вашу фамилию..."
        control={control}
        error={errors.surname?.message}
      />
      <FormSelect
        id="field-sex"
        name="sex"
        label="Пол"
        optionPlaceholder="Не выбрано"
        options={getArrayFromEnum(Sex)}
        control={control}
        error={errors.sex?.message}
      />
      <ButtonContainer id="1" buttonPrevState="Назад" buttonNextState="Далее" />
    </form>
  );
};
