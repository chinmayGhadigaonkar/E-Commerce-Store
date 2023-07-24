import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { VITE_BACKEND_URL } from "../../config";

const initialState = {
  cartProduct: [],
  productTPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      let isExists = false;
      state.cartProduct.forEach((product) => {
        if (product.title === action.payload.title) {
          isExists = true;
        }
      });
      if (isExists) {
        toast.error("Product is already in cart ");
        return state;
      } else {
        state.cartProduct.push(action.payload);
        state.productTPrice += action.payload.price;
        toast.success("Product added in cart successfully ");
      }
    },
    removeCart(state, action) {
      const arr = state.cartProduct.filter(
        (item) => item.title !== action.payload.title,
      );
      toast.success("Item removed successfully");
      state.productTPrice -= action.payload.price;
      state.cartProduct = arr;
    },
    clearCart(state, action) {
      (state.cartProduct = []), (state.productTPrice = 0);
    },
  },
});

export const cartFetch = createAsyncThunk(
  "fetch/allcartproduct",
  async (state, action) => {
    const res = await fetch(`${VITE_BACKEND_URL}/cart/getcart`);
    const { products } = await res.json();
    return JSON.parse(JSON.stringify(products));
  },
);

export const addCart = createAsyncThunk(
  "fetch/addproduct",
  async (state, action) => {
    const res = await fetch(`${VITE_BACKEND_URL}/cart/addtocart`);
    const { products } = await res.json();
    return JSON.parse(JSON.stringify(products));
  },
);

export const removeItem = createAsyncThunk(
  "fetch/allcartproduct",
  async (state, action) => {
    const res = await fetch(`${VITE_BACKEND_URL}/cart/deleteitem`);
    const { products } = await res.json();
    return JSON.parse(JSON.stringify(products));
  },
);

export const { addToCart, removeCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
