import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../general/types";
import { Advantage } from "features";

export const advantagesSlice = createSlice({
  name: "advantages",
  initialState,
  reducers: {
    addAdvantages: (state, action: PayloadAction<Advantage>) => {
      state.advantages.push(action.payload);
    },
  },
});
