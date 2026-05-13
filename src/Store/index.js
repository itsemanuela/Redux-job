import { configureStore } from "@reduxjs/toolkit";
import mainReducers from "../Redux/Reducers";

const store = configureStore({
  reducer: mainReducers,
});
export default store;
