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

export const radioboxes: Radiobox[] = [
  {
    id: "field-radiobox-group-option-1",
    name: "checkbox1",
    label: "1",
    value: "1",
  },
  {
    id: "field-radiobox-group-option-2",
    name: "checkbox2",
    label: "2",
    value: "2",
  },
  {
    id: "field-radiobox-group-option-3",
    name: "checkbox3",
    label: "3",
    value: "3",
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

export interface Radiobox {
  id: string;
  name: string;
  label: string;
  value: string;
}
