import { createSlice } from "@reduxjs/toolkit";

const toggleMenu = createSlice({
  name: "toggleMenu",
  initialState: {
    data: false,
  },
  reducers: {
    setToggleMenu: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setToggleMenu } = toggleMenu.actions;
export default toggleMenu.reducer;
