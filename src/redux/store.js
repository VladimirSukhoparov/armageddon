import { configureStore } from "@reduxjs/toolkit";
import { default as asteroidSlise } from "./getLoadList";

const store = configureStore({
  reducer: {
    asteroids: asteroidSlise,
  },
});

export default store;
