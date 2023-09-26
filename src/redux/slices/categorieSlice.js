import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: false,
  value: 0,
  sortType: { name: "Популярности", sortProperty: "raiting" },
  paginate: 1,
};

const categorieSlice = createSlice({
  name: "categories",
  initialState,

  reducers: {
    setCategoriesId(state, action) {
      state.value = action.payload;
    },

    setSortType(state, action) {
      state.sortType = action.payload;
    },
    setCurrentPaginate(state, action) {
      state.paginate = action.payload;
    },

    SetOnSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setCategoriesId, SetOnSort, setSortType, setCurrentPaginate } =
  categorieSlice.actions;

export default categorieSlice.reducer;
