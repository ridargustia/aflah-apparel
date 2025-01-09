import { createSlice } from "@reduxjs/toolkit";

const changeColorHeader = createSlice({
  name: "changeColorHeader",
  initialState: {
    data: false,
  },
  reducers: {
    setChangeColorHeader: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setChangeColorHeader } = changeColorHeader.actions;
export default changeColorHeader.reducer;
