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
      // state.userInfo = action.payload;

      state.user = action.payload;

      // console.log(action.payload);
      localStorage.setItem(
        "userInfo",
        JSON.stringify(action.payload.user.name),
      );
      localStorage.setItem("auth-token", JSON.stringify(action.payload.token));
    },
    removeUser(state, action) {
      localStorage.removeItem("userInfo");
      localStorage.removeItem("auth-token");
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
