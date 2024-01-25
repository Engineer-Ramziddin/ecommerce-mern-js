import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/userSlice";
import productSlice from "../features/product/productSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productSlice
  },
});
