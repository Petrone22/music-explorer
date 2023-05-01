import { createSlice } from "@reduxjs/toolkit";

export const smallBGSlice = createSlice({
  name: "smallBG",
  initialState: {
    value: "https://i.scdn.co/image/ab67616d00001e023a72e82c539de878cc46492c",
  },
  reducers: {
    changeSmallBG: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeSmallBG } = smallBGSlice.actions;
export default smallBGSlice.reducer;
