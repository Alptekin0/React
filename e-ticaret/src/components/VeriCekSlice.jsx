import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
     products: []
}


export const get = createAsyncThunk("product", async () => {
     const data = await axios.get("https://fakestoreapi.com/products");
     return data.data;
})


export const veri = createSlice({
     name: "VeriCek",
     initialState,
     reducers: {

     },
     extraReducers: (builder) => {
          builder.addCase(get.fulfilled, (state, action) => {
               state.products = action.payload;
          })
     }
})

export default veri.reducer
export const { } = veri.actions