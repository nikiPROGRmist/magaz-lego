import filter from "./slices/categorieSlice";
import search from "./slices/search";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    filter,
    search,
  },
});
