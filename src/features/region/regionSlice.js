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
        country: null,
        status: "idle",
        error: null,
        userName: "",
        regions: ["europe", "africa", "asia", "america", "oceania"],
        region: "",
        questions: 15,
        score: 0,
        quizStatus: "idle",
    },
    reducers: {
        setSelectedRegion: (state, action) => {
            state.region = action.payload;
        },
        setCountries: (state, action) => {
            state.status = "loading";
            state.countries = action.payload;
            state.status = "succeeded";
        },
        setCountry: (state, action) => {
            state.status = "loading";
            action.payload ? state.country = action.payload : state.country = state.countries[Math.floor(Math.random() * state.countries.length)];
            state.status = "succeeded";
        },
        removeCountry: (state, action) => {
            state.countries = state.countries.filter(country => country.name.common !== action.payload);
            console.log(state.countries);
        },
        /* Extract this? */
        setUserName: (state, action) => {
            state.userName = action.payload;
        },
        updateScore: (state) => {
            state.score = state.score + 1;
        },
        resetScore: (state) => {
            state.score = 0;
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
        /* Extract this? */
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

export const {
    setCountries,
    setUserName,
    updateScore,
    setQuizStatusStart,
    setQuizStatusFinished,
    setCountry,
    removeCountry,
    setSelectedRegion,
    resetScore,
    setQuizStatusIdle,
    resetPlayer } = regionSlice.actions
export default regionSlice.reducer;