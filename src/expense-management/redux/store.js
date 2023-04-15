import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../redux/features/categories/categorySlice";
import expenseReducer from "../redux/features/expenses/expenseSlice";

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    expenses: expenseReducer,
  },
});
