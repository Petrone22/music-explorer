import { createSlice } from "@reduxjs/toolkit";

export const runtimeSlice = createSlice({
  name: "runtime",
  initialState: {
    value: "0",
  },
  reducers: {
    changeRuntime: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeRuntime } = runtimeSlice.actions;
export default runtimeSlice.reducer;
