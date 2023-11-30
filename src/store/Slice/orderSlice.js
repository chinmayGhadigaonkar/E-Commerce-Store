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
  // console.log(id);
  const res = await fetch(`${VITE_BACKEND_URL}/order/getOrder/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
  });

  const result = await res.json();
  // console.log(result.orders);
  return result.orders;
});

export const getAllOrder = createAsyncThunk("fetch/getAllOrder", async () => {
  // console.log(id);
  const res = await fetch(`${VITE_BACKEND_URL}/order/getOrder/`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
  });

  const result = await res.json();
  console.log(result.orders);
  return result.orders;
});
export const createOrder = createAsyncThunk(
  "fetch/createOrder",
  async (data) => {
    // console.log(address, product, taxPrice, shippingPrice, subtotal);
    const { shippingInfo, orderItems, taxPrice, shippingPrice, totalPrice } =
      data;
    // console.log(address);
    const res = await fetch(`${VITE_BACKEND_URL}/order/createOrder`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        shippingInfo: shippingInfo,
        orderItems: orderItems,
        taxPrice: taxPrice,
        shippingPrice: shippingPrice,
        totalPrice: totalPrice,
      }),
    });

    const result = await res.json();
    if (!result.success) {
      toast.error("Something problem ");
      return;
    }

    // console.log(result);
    return result.order;
  },
);

export const {} = orderSlice.actions;
export default orderSlice.reducer;
