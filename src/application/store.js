import { configureStore } from "@reduxjs/toolkit";
import regionReducer from "../features/region/regionSlice.js";

const store = configureStore({
    reducer: {
        region: regionReducer
    },
});

export default store;