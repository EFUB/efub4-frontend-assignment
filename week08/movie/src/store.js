import { configureStore } from "@reduxjs/toolkit";
import themeSlicer from "./slicers/themeSlicer";

const store = configureStore({
  reducer: {
    themeSlicer: themeSlicer,
  },
});

export default store;
