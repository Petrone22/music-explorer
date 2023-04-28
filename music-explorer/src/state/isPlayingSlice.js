import { createSlice } from "@reduxjs/toolkit";

export const isPlayingSlice = createSlice({
  name: "mediaIsPlaying",
  initialState: {
    value: false,
  },
  reducers: {
    toggleMediaIsPlaying: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleMediaIsPlaying } = isPlayingSlice.actions;
export default isPlayingSlice.reducer;
