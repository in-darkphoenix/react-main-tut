import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryList: [],
  totalPlanned: 0,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categoryList.push(action.payload);
      state.totalPlanned += Number(action.payload.plannedAmt);
    },
  },
});

export const { addCategory } = categorySlice.actions;

export default categorySlice.reducer;
