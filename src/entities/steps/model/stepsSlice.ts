import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "entities/general/types";
import { RootState } from "app/store";

const stepsSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    changeStep: (state, action: PayloadAction<any>) => {
      state.step = action.payload;
    },
  },
});

export const selectStep = (state: RootState) => state.steps.step;
export const { changeStep } = stepsSlice.actions;

export default stepsSlice.reducer;
