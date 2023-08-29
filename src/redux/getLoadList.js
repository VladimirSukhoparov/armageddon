import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    //....
})