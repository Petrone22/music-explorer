import { createSlice } from "@reduxjs/toolkit";

export const playerBGSlice = createSlice({
  name: "playerBG",
  initialState: {
    value: "https://i.scdn.co/image/ab6761670000ecd466ae0ff4e27e5621f73c9c6b",
  },
  reducers: {
    changeBG: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeBG } = playerBGSlice.actions;
export default playerBGSlice.reducer;
