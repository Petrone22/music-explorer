import { createSlice } from "@reduxjs/toolkit";

export const subTitleSlice = createSlice({
  name: "SubTitle",
  initialState: {
    value: "Click a song to play it.",
  },
  reducers: {
    changeSubTitle: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeSubTitle } = subTitleSlice.actions;
export default subTitleSlice.reducer;
