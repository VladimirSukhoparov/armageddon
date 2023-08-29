import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { currentDate } from "../utils";
//import { newDate } from "../utils";
import { apiKey } from "../utils";

export const fetchAsteroids = createAsyncThunk(
  "asteroids/fetchAsteroids",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${currentDate()}&end_date=${currentDate()}&api_key=${apiKey()}`
      );
      if (!response.ok) {
        return rejectWithValue(await response.json());
      }
      const json = await response.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  }
);

const asteroidSlice = createSlice({
  name: "asteroids",
  initialState: {
    asteroids: [],
    basket: [],
    distance: "в километрах",
    status: null,
    error: null,
  },
  reducers: {
    addBasket(state, action) {
      state.basket.push({
        id: action.payload,
      });
    },

    clearBasket(state) {
      state.basket = [];
    },

    setDistance(state, action) {
      state.distance = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsteroids.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(fetchAsteroids.fulfilled, (state, action) => {
      state.status = "resolved";
      state.asteroids = action.payload;
    });

    builder.addCase(fetchAsteroids.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });
  },
});
export const { addBasket, clearBasket, setDistance } = asteroidSlice.actions;
export default asteroidSlice.reducer;
