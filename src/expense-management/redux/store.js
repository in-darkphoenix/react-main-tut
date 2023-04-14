import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../redux/features/categories/categorySlice";

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
  },
});
