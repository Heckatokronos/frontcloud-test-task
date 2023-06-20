export const checkboxes: Checkbox[] = [
  {
    id: "field-checkbox-group-option-1",
    name: "checkbox1",
    label: "1",
    checked: false,
  },
  {
    id: "field-checkbox-group-option-2",
    name: "checkbox2",
    label: "2",
    checked: false,
  },
  {
    id: "field-checkbox-group-option-3",
    name: "checkbox3",
    label: "3",
    checked: false,
  },
];

export enum Steps {
  One = "one",
  Two = "two",
  Three = "three",
}

export const initialState: CreateState = {
  advantages: [],
  step: Steps.One,
  checkbox: {
    checkboxItems: [...checkboxes],
    checkboxNumbers: [],
  },
  radio: "",
};

export interface Advantage {
  id: string;
  text: string;
}

interface CreateState {
  step: string;
  advantages: Advantage[];
  checkbox: any;
  radio: string;
}

export enum Routes {
  Main = "/",
  Form = "/create",
  Error = "/error",
}

export interface Checkbox {
  id: string;
  name: string;
  label: string;
  checked?: boolean;
}

export interface Radio {
  id: string;
  name: string;
  label: string;
  value: string;
}
