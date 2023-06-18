import { combineReducers, configureStore } from "@reduxjs/toolkit";
import stepsSlice from "../entities/steps/model/stepsSlice";
import boxesSlice from "entities/boxes/model/boxesSlice";

const rootReducer = combineReducers({
  steps: stepsSlice,
  boxes: boxesSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
