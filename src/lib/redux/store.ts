import { configureStore } from "@reduxjs/toolkit";
import changeColorHeaderReducer from "./actions/ChangeColorHeaderSlice";
import toggleMenuReducer from "./actions/ToggleMenuSlice";

const store = configureStore({
  reducer: {
    changeColorHeader: changeColorHeaderReducer,
    toggleMenu: toggleMenuReducer,
  },
});

export default store;
