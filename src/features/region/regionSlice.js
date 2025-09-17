import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRegion = createAsyncThunk(
    "region/fetchRegion",
    async (region) => {
        try {
            const response = await fetch(
                `https://restcountries.com/v3.1/region/${region}?fields=name,flags`
            );
            return response.json();
        } catch (error) {
            console.log(error);
            return [];
        }
    }
);

const regionSlice = createSlice({
    name: "region",
    initialState: {
        countries: [],
        status: "idle",
        error: null,
        userName: "",
        regions: ["europe", "africa", "asia", "america", "oceania"],
        score: 0,
        quizStatus: "idle",
    },
    reducers: {
        setCountries: (state, action) => {
            state.status = "loading";
            state.countries = action.payload;
            state.status = "succeeded";
        },
        setUserName: (state, action) => {
            state.userName = action.payload;
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
    extraReducers: (builder) => {
        builder
            .addCase(fetchRegion.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchRegion.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.countries = action.payload;
            })
            .addCase(fetchRegion.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { setCountries, setUserName, updateScore, setQuizStatusStart, setQuizStatusFinished } = regionSlice.actions
export default regionSlice.reducer;