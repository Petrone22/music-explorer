import { createSlice } from "@reduxjs/toolkit";

export const currentTimeSlice = createSlice({
  name: "currentTime",
  initialState: {
    value: 0,
  },
  reducers: {
    changeCurrentTime: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeCurrentTime } = currentTimeSlice.actions;
export default currentTimeSlice.reducer;
