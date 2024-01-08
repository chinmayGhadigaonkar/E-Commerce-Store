import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { VITE_BACKEND_URL } from "../../config";

const STATUSES = {
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProduct: [],
    productTPrice: 0,
    status: "idle",
  },
  extraReducers: (builder) => {
    builder
      .addCase(cartFetch.fulfilled, (state, action) => {
        state.cartProduct = action.payload;
        let total = 0;
        state.cartProduct.forEach((product) => {
          total += product.price;
        });
        state.productTPrice = total;
        state.status = STATUSES.IDLE;
      })
      .addCase(cartFetch.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })

      .addCase(addToCart.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cartProduct = action.payload;

        let total = 0;
        for (let index = 0; index < state.cartProduct.length; index++) {
          total += state.cartProduct[index].price;
        }
        state.productTPrice = total;
        toast.success("Product added in cart successfully ");
        state.status = STATUSES.IDLE;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })
      .addCase(clearCart.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(clearCart.fulfilled, (state, action) => {
        state.cartProduct = [];
        state.productTPrice = 0;
        state.status = STATUSES.IDLE;
      })
      .addCase(clearCart.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })

      .addCase(removeCart.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(removeCart.fulfilled, (state, action) => {
        state.cartProduct = action.payload;
        let total = 0;
        for (let index = 0; index < state.cartProduct.length; index++) {
          total += state.cartProduct[index].price;
        }
        state.productTPrice = total;
        toast.success("Item removed successfully");
        state.status = STATUSES.IDLE;
      })
      .addCase(removeCart.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const cartFetch = createAsyncThunk(
  "fetch/allcartproduct",
  async (state, action) => {
    const res = await fetch(`${VITE_BACKEND_URL}/cart/getcart`, {
      headers: {
        "content-type": "application/json",
        "auth-token": JSON.parse(localStorage.getItem("auth-token")),
      },
      credentials: "include",
    });
    const { products } = await res.json();

    return products;
  },
);

export const addToCart = createAsyncThunk(
  "fetch/addproduct",
  async (product) => {
    const res = await fetch(`${VITE_BACKEND_URL}/cart/addtocart`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "auth-token": JSON.parse(localStorage.getItem("auth-token")),
      },
      credentials: "include",
      body: JSON.stringify({
        products: product,
      }),
    });

    const result = await res.json();
    if (!result.success) {
      toast.error("Product is already in cart");
      return;
    }
    return result.products;
  },
);

export const clearCart = createAsyncThunk("fetch/cartClear", async () => {
  const res = await fetch(`${VITE_BACKEND_URL}/cart/clearcart`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      "auth-token": JSON.parse(localStorage.getItem("auth-token")),
    },
    credentials: "include",
  });
  const { products } = await res.json();
  if (products === undefined) {
    return toast.success("Your cart is clear");
  }
});

export const removeCart = createAsyncThunk(
  "fetch/removeproductfromcart",
  async (product) => {
    const res = await fetch(`${VITE_BACKEND_URL}/cart/deleteitem`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "auth-token": JSON.parse(localStorage.getItem("auth-token")),
      },
      credentials: "include",
      body: JSON.stringify({
        products: product,
      }),
    });
    const { cart } = await res.json();
    return cart.products;
  },
);
export const {} = cartSlice.actions;
export default cartSlice.reducer;
