import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slice/productSlice";
import cartreducer from "./Slice/cartSlice";
const store = configureStore({
    reducer:{
        products :productReducer,
        cart :  cartreducer
    }
})

export default store