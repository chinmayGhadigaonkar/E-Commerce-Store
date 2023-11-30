import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: localStorage.getItem("userInfo")
      ? localStorage.getItem("userInfo")
      : null,
  },
  reducers: {
    setUser(state, action) {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    removeUser(state, action) {
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
