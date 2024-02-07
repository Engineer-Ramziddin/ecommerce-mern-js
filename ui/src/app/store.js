import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/userSlice";
import productSlice from "../features/product/productSlice";
import blogSlice from "../features/blogs/blogSlice";
import contactSlice from "../features/contact/contactSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productSlice,
    blog: blogSlice,
    contact: contactSlice
  },
});
