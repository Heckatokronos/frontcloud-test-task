import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Advantage, initialState } from "../api/types";
import { RootState } from "app/store";
import { findById } from "..";

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    addAdvantage: (state, action: PayloadAction<Advantage>) => {
      state.advantages.push(action.payload);
    },
    removeAdvantage: (state, action: PayloadAction<{ id: string }>) => {
      const advId = state.advantages.findIndex(
        (item) => item.id === action.payload.id
      );
      if (advId !== -1) state.advantages.splice(advId, 1);
    },
    updateAdvantage: (state, action: PayloadAction<Advantage>) => {
      const advId = findById(state.advantages, action.payload.id);
      state.advantages[advId].text = action.payload.text;
    },
    changeStep: (state, action: PayloadAction<any>) => {
      state.step = action.payload;
    },
    changeCheckbox: (state, action: PayloadAction<{ id: string }>) => {
      const id = findById(state.checkbox.checkboxItems, action.payload.id);
      state.checkbox.checkboxItems[id].checked =
        !state.checkbox.checkboxItems[id].checked;
    },
    changeRadiobox: (state, action: PayloadAction<string>) => {
      state.radio = action.payload;
    },
    clearCheckboxes: (state) => {
      state.checkbox.checkboxNumbers = [];

      for (let boxes of state.checkbox.checkboxItems)
        state.checkbox.checkboxNumbers.push(Number(boxes.checked));

      for (let boxes of state.checkbox.checkboxItems) boxes.checked = false;
    },
  },
});

const { actions, reducer } = rootSlice;

export const {
  addAdvantage,
  removeAdvantage,
  updateAdvantage,
  changeStep,
  changeCheckbox,
  changeRadiobox,
  clearCheckboxes,
} = actions;

export const addAdvantages = (state: RootState) => state.root.advantages;
export const addAdvantagesInput = (state: RootState) =>
  state.root.advantages.reduce(
    (acc, item: Advantage) => [...acc, item.text],
    [] as string[]
  );

export const selectStep = (state: RootState) => state.root.step;

export const selectCheckbox = (state: RootState) =>
  state.root.checkbox.checkboxItems;
export const selectCheckboxNumbers = (state: RootState) =>
  state.root.checkbox.checkboxNumbers;
export const selectRadiobox = (state: RootState) => state.root.radio;

export default reducer;
