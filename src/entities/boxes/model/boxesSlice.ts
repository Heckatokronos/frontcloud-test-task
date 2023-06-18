import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { findById, initialState } from "entities/general/";

export const boxesSlice = createSlice({
  name: "boxes",
  initialState,
  reducers: {
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

export const { changeCheckbox, changeRadiobox, clearCheckboxes } =
  boxesSlice.actions;

export const selectCheckbox = (state: RootState) =>
  state.boxes.checkbox.checkboxItems;

export const selectCheckboxNumbers = (state: RootState) =>
  state.boxes.checkbox.checkboxNumbers;

export const selectRadiobox = (state: RootState) => state.boxes.radio;

export default boxesSlice.reducer;
