import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenseList: [],
};

const expenseSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenseList.push(action.payload);
    },
  },
});

export const { addExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
