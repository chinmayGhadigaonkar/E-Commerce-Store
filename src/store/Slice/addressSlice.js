import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { VITE_BACKEND_URL } from "../../config";

const STATUSES = {
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
};

const addressSlice = createSlice({
  name: "addressname",
  initialState: {
    address: [],
    status: "idle",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAddress.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(getAddress.fulfilled, (state, action) => {
        state.address = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(getAddress.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      })

      .addCase(addAddress.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.address = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(addAddress.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const getAddress = createAsyncThunk(
  "fetch/getalladdress",
  async (state, action) => {
    console.log("fetch cart product");
    const res = await fetch(`${VITE_BACKEND_URL}/address/getaddress`, {
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    });
    const { address } = await res.json();
    // console.log(address);
    return address;
  },
);

export const addAddress = createAsyncThunk("fetch/addAddress", async (data) => {
  const { address, city, state, country, pinCode, phoneNo } = data;
  // console.log(data);
  const res = await fetch(`${VITE_BACKEND_URL}/address/addAddress`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      address: address[0],
      city: city[0],
      state: state[0],
      country: country[0],
      pinCode: pinCode[0],
      phoneNo: phoneNo[0],
    }),
  });

  const result = await res.json();
  console.log(result.data);
  if (!result.success) {
    toast.error("Address not added");
    return;
  }
  return result.data;
});

export const {} = addressSlice.actions;
export default addressSlice.reducer;
