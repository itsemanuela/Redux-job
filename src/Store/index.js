import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favoritesReducer from "../Redux/Reducers/favorite";
import jobsReducer from "../Redux/Reducers/arrayRicerca";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  jobs: jobsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

//combino i due reducers
