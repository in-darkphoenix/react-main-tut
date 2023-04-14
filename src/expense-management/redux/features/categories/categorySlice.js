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
      state.totalPlanned += action.payload.plannedAmount;
    },
  },
});

export default categorySlice.reducer;
