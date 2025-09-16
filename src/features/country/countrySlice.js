import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCountry = createAsyncThunk(
    "country/fetchCountry",
    async (country) => {
        try {
            const response = await fetch(
                `https://restcountries.com/v3.1/name/${country}?fields=name,capital,currencies,flags,population,region,maps`
            );
            return response.json();
        } catch (error) {
            console.log(error);
            return null;
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
    reducers: {
        setCountry(state, action) {
            state.status = "loading";
            state.country = action.payload
            state.status = "succeeded";
        }
    },
    extraReducers: (builder) => {
        builder
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
export const { setCountry } = countrySlice.actions
export default countrySlice.reducer;