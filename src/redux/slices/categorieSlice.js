import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const categorieSlice = createSlice({
  name: "categories",
  initialState,

  reducers: {
    setCategoriesId(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setCategoriesId } = categorieSlice.actions;

export default categorieSlice.reducer;
