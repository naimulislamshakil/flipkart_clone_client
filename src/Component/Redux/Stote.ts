import { configureStore } from "@reduxjs/toolkit";
import BannerSlice from "./Slice/BannerSlice";
import headerSlice from "./Slice/HeaderSlice";

const store = configureStore({
  reducer: {
    headers: headerSlice,
    banners: BannerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
