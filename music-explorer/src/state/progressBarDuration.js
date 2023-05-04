import { createSlice } from "@reduxjs/toolkit";

export const progressBarDuration = createSlice({
  name: "progressBarDuration",
  initialState: {
    value: "0",
  },
  reducers: {
    changeProgressBarDuration: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeProgressBarDuration } = progressBarDuration.actions;
export default progressBarDuration.reducer;
