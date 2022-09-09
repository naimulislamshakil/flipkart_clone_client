import { configureStore } from "@reduxjs/toolkit";
import BannerSlice from "./Slice/BannerSlice";
import  createUserSlice  from "./Slice/CreateUserSlice";
import headerSlice from "./Slice/HeaderSlice";
import productSlice from "./Slice/ProductSlice";

const store = configureStore({
  reducer: {
    headers: headerSlice,
    banners: BannerSlice,
    products: productSlice,
    users:createUserSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
