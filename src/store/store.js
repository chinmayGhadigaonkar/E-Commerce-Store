import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slice/productSlice";
import cartReducer from "./Slice/cartSlice";
import userReducer from "./Slice/userSlice";
import wishListReducer from "./Slice/wishListSlice";
const store = configureStore({
    reducer:{
        products :productReducer,
        cart :  cartReducer,
        user: userReducer,
        wishList: wishListReducer
    }
})

export default store