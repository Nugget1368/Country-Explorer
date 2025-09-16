import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRegion = createAsyncThunk(
    "region/fetchRegion",
    async (region) => {
        try {
            const response = await fetch(
                `https://restcountries.com/v3.1/region/${region}`
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
    },
    reducers: {
        setCountries: (state, action) => {
            state.status = "loading";
            state.countries = action.payload;
            state.status = "succeeded";
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
            });
    },
});

export const { setCountries } = regionSlice.actions
export default regionSlice.reducer;