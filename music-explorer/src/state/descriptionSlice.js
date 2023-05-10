import { createSlice } from "@reduxjs/toolkit";

export const desciptionSlice = createSlice({
  name: "description",
  initialState: {
    value: "Play a song to see it's description.",
  },
  reducers: {
    changeDescription: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeDescription } = desciptionSlice.actions;
export default desciptionSlice.reducer;
