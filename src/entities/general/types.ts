import { checkboxes } from "features/create/step2/model/boxes";
import { CreateState } from "features/create/types";
import { Steps } from "shared";

export const initialState: CreateState = {
  advantages: [],
  step: Steps.One,
  checkbox: {
    checkboxItems: [...checkboxes],
    checkboxNumbers: [],
  },
  radio: "",
};
