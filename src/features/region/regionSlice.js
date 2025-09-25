import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRegion = createAsyncThunk(
    "region/fetchRegion",
    async (region) => {
        try {
            const response = await fetch(
                `https://restcountries.com/v3.1/region/${region}?fields=name,flags`
            );
            return response.json();
        } catch {
            return [];
        }
    }
);

export const fetchCountry = createAsyncThunk(
    "country/fetchCountry",
    async (country) => {
        try {
            const response = await fetch(
                `https://restcountries.com/v3.1/name/${country}?fields=name,capital,currencies,flags,population,region,maps`
            );
            return response.json();
        } catch {
            return null;
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
        regions: ["europe", "africa", "asia", "america", "oceania"]
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
        },
        resetCountry: (state) => {
            state.country = null;
        },
        resetStates: (state) => {
            state.countries = [];
            state.country = null;
            state.status = "idle";
            state.error = null;
        }
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
            })
            .addCase(fetchCountry.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCountry.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.country = action.payload[0];
            })
            .addCase(fetchCountry.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const {
    setCountries,
    setCountry,
    removeCountry,
    resetStates,
    resetCountry } = regionSlice.actions
export default regionSlice.reducer;