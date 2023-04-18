import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cars: 0,
  loading: false,
};

export const getData = createAsyncThunk("posts", () => {
  return new Promise((res) => {
    setTimeout(() => res(""), 5000);
  });
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment(state, action) {
      state.cars += 1;
    },
  },
  extraReducers: {
    [getData.pending]: (state, action) => {
      state.loading = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.cars += 1
      state.loading = false
    },
  },
});

export const { increment } = userSlice.actions;

export default userSlice.reducer;
