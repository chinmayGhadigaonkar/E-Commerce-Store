import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slice/productSlice";
import cartReducer from "./Slice/cartSlice";
import userReducer from "./Slice/userSlice";
import wishListReducer from "./Slice/wishListSlice";
import orderSlice from "./Slice/orderSlice";
import addressSlice from "./Slice/addressSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    user: userReducer,
    wishList: wishListReducer,
    order: orderSlice,
    address: addressSlice,
  },
});

export default store;
