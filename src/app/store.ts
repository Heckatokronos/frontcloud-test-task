import { combineReducers, configureStore } from "@reduxjs/toolkit";
import rootSlice from "entities/root/model/rootSlice";

const rootReducer = combineReducers({
  root: rootSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
