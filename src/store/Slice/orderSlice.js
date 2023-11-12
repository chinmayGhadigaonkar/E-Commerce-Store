import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { VITE_BACKEND_URL } from "../../config";

const STATUSES = {
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
};

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: [],
    status: "idle",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrder.fulfilled, (state, action) => {
        state.order = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(getOrder.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })
      .addCase(createOrder.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.order = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const getOrder = createAsyncThunk("fetch/getOrder", async (id) => {
  const res = await fetch(`${VITE_BACKEND_URL}/order/getOrder/${id}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
  });

  const result = await res.json();
  if (!result.success) {
    toast.error("Product is already in cart");
    return;
  }
  return result.order;
});
export const createOrder = createAsyncThunk(
  "fetch/createOrder",
  async (address, product, taxPrice, shippingPrice, subtotal) => {
    console.log(product);
    const res = await fetch(`${VITE_BACKEND_URL}/order/createOrder`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        shippingInfo: address,
        orderItems: product,
        taxPrice: taxPrice,
        shippingPrice: shippingPrice,
        totalPrice: subtotal,
      }),
    });

    const result = await res.json();
    if (!result.success) {
      toast.error("Something problem ");
      return;
    }
    console.log(result.order);
    return result.order;
  },
);

export const {} = orderSlice.actions;
export default orderSlice.reducer;
