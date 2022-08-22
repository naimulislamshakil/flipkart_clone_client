import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import Product from "../models/productModel";
import { ProductType } from "../Types";

const initialState = {
  isLoading: false,
  error: null,
  products: [],
} as ProductType;

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (data, thunkApi) => {
    try {
      const res = await axios.get<Product[]>("http://localhost:5000/product");
      return res.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(
      getProduct.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.error = null;
        state.isLoading = false;
        state.products = action.payload;
      }
    );
    builder.addCase(
      getProduct.rejected,
      (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.isLoading = false;
        state.products = [];
      }
    );
  },
});

export default productSlice.reducer;
