import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

const searchSlice = createSlice({
  name: "serch",
  initialState,

  reducers: {
    setOnSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const { setOnSearch } = searchSlice.actions;
export default searchSlice.reducer;
