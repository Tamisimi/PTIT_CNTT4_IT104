import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProduct = createAsyncThunk("getAllProduct", async () => {
    try {
        const res = await axios.get("http://localhost:8080/products")
        return res.data
    } catch (error) {
        console.log(error);

    }
})
const productSlice = createSlice({
    name: "product",
    initialState: {
        products: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProduct.pending, () => {

            })
            .addCase(getAllProduct.fulfilled, (state, action) => {
                state.products = action.payload
            })
    }
})
export default productSlice.reducer