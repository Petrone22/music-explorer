import { createSlice } from "@reduxjs/toolkit";

export const desciptionSlice = createSlice({
  name: "description",
  initialState: {
    value: "THIS IS A DESCRIPTION",
  },
  reducers: {
    changeDescription: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeDescription } = desciptionSlice.actions;
export default desciptionSlice.reducer;
