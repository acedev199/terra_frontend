import { configureStore, combineReducers } from "@reduxjs/toolkit";
import worldCardsReducer from "./worldCardsSlice";
import authReducer from "./authSlice"

// Combine reducers
const rootReducer = combineReducers({
  worldCards: worldCardsReducer,
  auth: authReducer,
});

// Configure the Redux store
const store = configureStore({
  reducer: rootReducer
});

export default store;
