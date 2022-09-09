import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { CreateUser, UserInfo } from "../Types";


interface PerUser{
    user: UserInfo;
}

const initialState = {
  isLoading: false,
  error: null,
    message: {
          acknowledged: '',
    insertedId: ''
    },
} as CreateUser;

export const postCreateUser = createAsyncThunk("user/postCreateUser",
    async ({user}:PerUser) => {
    
        const res = await axios.post<string>("http://localhost:5000/user", user
        );
        return res.data;
  
    })


export const createUserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers(builder) { 
        builder.addCase(postCreateUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(postCreateUser.fulfilled, (state, action: PayloadAction<any>) => {
            
            state.isLoading = false;
            state.message=action.payload
           
        });
        builder.addCase(postCreateUser.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    
    }
})

export default createUserSlice.reducer;