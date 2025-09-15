import { configureStore } from "@reduxjs/toolkit";
import regionReducer from "../features/region/regionSlice.js";
import countryReducer from "../features/country/countrySlice.js";

const store = configureStore({
    reducer: {
        region: regionReducer,
        country: countryReducer
    },
});

export default store;