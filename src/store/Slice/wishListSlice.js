import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { VITE_BACKEND_URL } from "../../config";


const STATUSES = {
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    products: [], // The list of wishlist items
    status: STATUSES.IDLE, // Initial status
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchWishList.pending, (state) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(FetchWishList.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = STATUSES.IDLE;
    });
    builder.addCase(FetchWishList.rejected, (state) => {
      state.status = STATUSES.ERROR;
    });
    builder.addCase(AddToWishList.pending, (state) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(AddToWishList.fulfilled, (state, action) => {
      state.products.push(action.payload);
      state.status = STATUSES.IDLE;
    });
    builder.addCase(AddToWishList.rejected, (state) => {
      state.status = STATUSES.ERROR;
    });
    builder.addCase(RemoveFromWishList.pending, (state) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(RemoveFromWishList.fulfilled, (state, action) => {
      const newArray = state.products.filter(
        (item) => item._id !== action.payload
      );
      state.products= newArray
      // state.products.pop(action.payload)
      state.status = STATUSES.IDLE;
    });
    builder.addCase(RemoveFromWishList.rejected, (state) => {
      state.status = STATUSES.ERROR;
    });
    builder.addCase(ClearWishList.pending, (state) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(ClearWishList.fulfilled, (state) => {
      state.products = [];
      state.status = STATUSES.IDLE;
    });
    builder.addCase(ClearWishList.rejected, (state) => {
      state.status = STATUSES.ERROR;
    });
  },
});

export const FetchWishList = createAsyncThunk("/getWishListProduct", async () => {
  try {
    const res = await fetch(`${VITE_BACKEND_URL}/wishlist/get`, {
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    });
    const result = await res.json();
    return JSON.parse(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const AddToWishList = createAsyncThunk("/addWishListProduct", async (productId) => {
  try {
    const res = await fetch(`${VITE_BACKEND_URL}/wishlist/add`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        productId,
      }),
      credentials: "include",
    });
    const result = await res.json();
    
    return result;
  } catch (error) {

    console.log(error);
    throw error;
  }
});

export const RemoveFromWishList = createAsyncThunk("/removeWishListProduct", async (_itemId) => {
  try {
    const res = await fetch(`${VITE_BACKEND_URL}/wishlist/delete/${_itemId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    });
    
    if (res.ok) {
      const { deletedItem } = await res.json();
      return deletedItem.product;
    } else {
      // Handle the case where the response is not okay (e.g., HTTP status code is not in the 200 range)
      const errorData = await res.json();
      throw new Error(errorData.message); // Adjust the error structure as needed
    }
    // return deletedItem.product;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const ClearWishList = createAsyncThunk("/clearWishList", async () => {
  try {
    const res = await fetch(`${VITE_BACKEND_URL}/wishlist/clear`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const {} = wishListSlice.actions;
export default wishListSlice.reducer;
