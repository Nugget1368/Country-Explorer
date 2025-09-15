import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCountry = createAsyncThunk(
    "country/fetchCountry",
    async (country) => {
        try {
            const response = await fetch(
                `https://restcountries.com/v3.1/name/${country}`
            );
            return response.json();
        } catch (error) {
            console.log(error);
            return [];
        }
    }
);

const countrySlice = createSlice({
    name: "country",
    initialState: {
        country: null,
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountry.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCountry.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.country = action.payload;
                console.log(state.country);
            })
            .addCase(fetchCountry.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default countrySlice.reducer;