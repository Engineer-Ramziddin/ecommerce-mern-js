import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import contactService from "./contactService";
import { toast } from "react-toastify";


export const postContact = createAsyncThunk("contact/post", async (data, thunkAPI) => {
  try {
    return await contactService.postContact(data)
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const resetState = createAction("Reset_all");

const initialState = {
  contact: "",
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.contact = action.payload;
        if (action.payload.message) {
          toast.error(action.payload.message);
        } else if (state.contact) {
          toast.success("Contact sent successfully");
        }
      })
      .addCase(postContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
  },
});
export default contactSlice.reducer;
