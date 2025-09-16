import { createSlice } from "@reduxjs/toolkit";

// TODO: Move quizSlice into regionSlice?
// RegionSlice would have som extra params in initialstate, and also have extra reducers
// QuizSlist would only use 1 Slice instead of 2

export const quizSlice = createSlice({
    name: "quiz",
    initialState: {
        userName: "",
        regionSelected: "", // DELETE THIS?
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