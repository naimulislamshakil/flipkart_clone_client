import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import Header from "../models/headerModel";
import { HeaderType } from "../Types";

const initialState = {
  isLoading: false,
  error: null,
  headers: [],
} as HeaderType;

export const getHeader = createAsyncThunk(
  "header/getHeader",
  async (data, thunkApi) => {
    try {
      const res = await axios.get<Header[]>("http://localhost:5000/menu");
      return res.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getHeader.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(
      getHeader.fulfilled,
      (state, action: PayloadAction<Header[]>) => {
        state.isLoading = false;
        state.headers = action.payload;
      }
    );
    builder.addCase(getHeader.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default headerSlice.reducer;
