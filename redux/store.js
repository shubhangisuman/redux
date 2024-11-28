import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { thunk } from "redux-thunk";

export const store = configureStore(
  { reducer: rootReducer },
  applyMiddleware(thunk)
);
