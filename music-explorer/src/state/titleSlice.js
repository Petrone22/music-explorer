import { createSlice } from "@reduxjs/toolkit";

export const TitleSlice = createSlice({
  name: "Title",
  initialState: {
    value: "Music Explorer",
  },
  reducers: {
    changeTitle: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeTitle } = TitleSlice.actions;
export default TitleSlice.reducer;
