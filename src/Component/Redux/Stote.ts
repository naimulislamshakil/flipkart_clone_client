import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./Slice/HeaderSlice";

const store = configureStore({
  reducer: {
    headers: headerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
