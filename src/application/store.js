import { configureStore } from "@reduxjs/toolkit";
import regionReducer from "../features/region/regionSlice.js";
import countryReducer from "../features/country/countrySlice.js";
import quizReducer from "../features/quiz/quizSlice.js";

const store = configureStore({
    reducer: {
        region: regionReducer,
        country: countryReducer,
        quiz: quizReducer
    },
});

export default store;