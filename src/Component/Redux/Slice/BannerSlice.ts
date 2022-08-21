import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import Banner from "../models/bannerModel";
import { BannerType } from "../Types";

const initialState = {
  isLoading: false,
  error: null,
  banners: [],
} as BannerType;

export const getBanner = createAsyncThunk(
  "banner/getBanner",
  async (data, thunkApi) => {
    try {
      const res = await axios.get<Banner[]>("http://localhost:5000/banner");
      return res.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const BannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getBanner.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(
      getBanner.fulfilled,
      (state, action: PayloadAction<Banner[]>) => {
        state.banners = action.payload;
        state.error = null;
        state.isLoading = false;
      }
    );
    builder.addCase(getBanner.rejected, (state, action: PayloadAction<any>) => {
      state.banners = [];
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export default BannerSlice.reducer;
