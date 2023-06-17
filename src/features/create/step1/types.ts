import { StylesConfig } from "react-select"

type Step1Props = {
  nickname: string;
  name: string;
  surname: string;
  sex: string;
};

export const initialValues: Step1Props = {
  nickname: "",
  name: "",
  surname: "",
  sex: "",
};

export const options = [
  { value: "man", label: "Мужчина" },
  { value: "woman", label: "Женщина" },
];

export const customStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    width: 300,
    gap: 12,
  }),
};
