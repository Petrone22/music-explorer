import { createSlice } from "@reduxjs/toolkit";

export const isPlayingSlice = createSlice({
  name: "mediaIsPlaying",
  initialState: {
    value: false,
  },
  reducers: {
    toggleMediaIsPlaying: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggleMediaIsPlaying } = isPlayingSlice.actions;
export default isPlayingSlice.reducer;
