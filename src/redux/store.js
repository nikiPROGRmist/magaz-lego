import filter from "./slices/categorieSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    filter,
  },
});
