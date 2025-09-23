import { configureStore } from "@reduxjs/toolkit";
import regionReducer from "../features/region/regionSlice.js";
import quizReducer from "../features/quiz/quizSlice.js";

const store = configureStore({
    reducer: {
        region: regionReducer,
        quiz: quizReducer
    },
});

export default store;