import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
    name: "quiz",
    initialState: {
        userName: "",
        regionSelected: "",
        regions: ["europe", "africa", "asia", "america", "oceania"],
        score: 0,
        quizStatus: "idle",
        status: "idle",
        error: null,
    },
    reducers: {
        setUserName: (state, action) => {
            state.userName = action.payload;
        },
        setRegionSelected: (state, action) => {
            state.regionSelected = action.payload;
        },
        updateScore: (state) => {
            state.score = state.score + 1;
        },
        setQuizStatusStart: (state) => {
            state.quizStatus = "start";
        },
        setQuizStatusFinished: (state) => {
            state.quizStatus = "finished";
        },
    },
});

export const { setUserName, setRegionSelected, updateScore, setQuizStatusStart, setQuizStatusFinished } = quizSlice.actions
export default quizSlice.reducer;