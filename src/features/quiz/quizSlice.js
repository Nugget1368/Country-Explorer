import { createSlice } from "@reduxjs/toolkit";

const regionSlice = createSlice({
    name: "quiz",
    initialState: {
        userName: "",
        region: "",
        questions: 3,
        score: 0,
        quizStatus: "idle",
    },
    reducers: {
        setSelectedRegion: (state, action) => {
            state.region = action.payload;
        },
        setUserName: (state, action) => {
            state.userName = action.payload;
        },
        updateScore: (state) => {
            state.score = state.score + 1;
        },
        resetPlayer: (state) => {
            state.userName = "";
            state.score = 0;
            state.region = "";
        },
        setQuizStatusIdle: (state) => {
            state.quizStatus = "idle";
        },
        setQuizStatusStart: (state) => {
            state.quizStatus = "start";
        },
        setQuizStatusFinished: (state) => {
            state.quizStatus = "finished";
        },
    }
});

export const {
    setUserName,
    updateScore,
    setQuizStatusStart,
    setQuizStatusFinished,
    setSelectedRegion,
    setQuizStatusIdle,
    resetPlayer } = regionSlice.actions
export default regionSlice.reducer;