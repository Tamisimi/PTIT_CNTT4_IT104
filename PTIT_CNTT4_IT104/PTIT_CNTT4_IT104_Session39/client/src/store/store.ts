import { configureStore } from "@reduxjs/toolkit"
import product_slice from "./slice/productSlice"
const store = configureStore({
    reducer: {
        product: product_slice
    }
})

export default store