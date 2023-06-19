import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Advantage, initialState } from "../api/types";
import { findById } from "entities/general";
import { RootState } from "app/store";

export const rootReducer = createSlice({
  name: "root",
  initialState,
  reducers: {
    addAdvantages: (state, action: PayloadAction<Advantage>) => {
      state.advantages.push(action.payload);
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

export const {
  addAdvantages,
  changeStep,
  changeCheckbox,
  changeRadiobox,
  clearCheckboxes,
} = rootReducer.actions;

export const addAdvantage = (state: RootState) => state.root.advantages;

export const selectStep = (state: RootState) => state.root.step;

export const selectCheckbox = (state: RootState) =>
  state.root.checkbox.checkboxItems;
export const selectCheckboxNumbers = (state: RootState) =>
  state.root.checkbox.checkboxNumbers;
export const selectRadiobox = (state: RootState) => state.root.radio;

export default rootReducer.reducer;
