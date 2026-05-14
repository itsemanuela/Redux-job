import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favoritesReducer from "./favorite";
import jobsReducer from "./arrayRicerca";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  jobs: jobsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

//combino i due reducers
