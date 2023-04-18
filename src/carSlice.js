import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  car: 10,
  loading : false
};

export const getData =  createAsyncThunk 
  ("posts",
  () => {
    return new Promise((res) => {
      setTimeout(() => {
        res("");
      }, 5000);
    });
  });

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.car += action.payload;
    },
    decrement: (state, action) => {
      state.car -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state,action) => {
         state.loading = true
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.car += 1
        state.loading = false
    })
  }
});

export const { increment, decrement } = carSlice.actions;

export default carSlice.reducer;
