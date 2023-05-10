import { createSlice } from "@reduxjs/toolkit";

export const introVisibleSlice = createSlice({
  name: "introVisible",
  initialState: {
    value: true,
  },
  reducers: {
    toggleIntro: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleIntro } = introVisibleSlice.actions;
export default introVisibleSlice.reducer;
