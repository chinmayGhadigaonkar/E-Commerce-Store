import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { VITE_BACKEND_URL } from "../../config";

const initialState = {
  products: [],
  status: "idle",
};

const STATUSES = {
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(productFetch.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(productFetch.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(productFetch.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const productFetch = createAsyncThunk("fetch/allproduct", async () => {
  const res = await fetch(`${VITE_BACKEND_URL}/products/getproducts`);
  const { product } = await res.json();
  return JSON.parse(JSON.stringify(product));
});

export const tshirtFetch = createAsyncThunk("fetch/getTshirt", async () => {
  const res = await fetch(`${VITE_BACKEND_URL}/products/getTshirt`);
  const { tshirts } = await res.json();
  return JSON.parse(JSON.stringify(tshirts));
});

export const FetchSizeTshirt = createAsyncThunk(
  "fetch/SizeTshirt",
  async (data1) => {
    const { Size, title } = data1;

    const res = await fetch(
      `${VITE_BACKEND_URL}/products/${Size}?title=${title}`,
      {
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
      },
    );
    const { data } = await res.json();

    return data.slug;
  },
);

export const updateQuantity = createAsyncThunk(
  "fetch/updateproduct",
  async (id) => {
    const res = await fetch(
      `${VITE_BACKEND_URL}/products/updateproductquantity/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
      },
    );
    const { product } = await res.json();
    return JSON.parse(JSON.stringify(product));
  },
);

export const {} = productSlice.actions;
export default productSlice.reducer;
