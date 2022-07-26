import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getCovidData from "../../services/services";

const initialState = {
    isLoading: false,
    isFailed: false,
    items: [],
};


export const fetchCovidData = createAsyncThunk(
    'items/fetchCovidData',
    async () => {
        const { data } = await getCovidData();
        return data;
    },
);

const covidSlice = createSlice({
    name: 'items',
    initialState,
    extraReducers: {
        [fetchCovidData.fulfilled]: (state, action) => {
            // state.isLoading = false;
            // state.items = action.payload;
            const coronas = (action.payload).map((key) =>({
                id: key.All.country,
                country: key.All.country,
                population: key.All.population,
                confirmed: key.All.confirmed,
                recovered: key.All.recovered,
                deaths: key.All.deaths,
                population: key.All.population,
                continent: key.All.continent,
                capital: key.All.capital_city,
                lat: key.All.lat,
                lon: key.All.lon,
                updated: key.All.updated,
            }));
            const theState = state;
            theState.isLoading = false;
            theState.isFailed = false;
            theState.items = coronas;

        },
        [fetchCovidData.pending]: (state) => {state.isLoading = true;},
        [fetchCovidData.rejected]: (state) => {state.isFailed = true;},
    },
});

export default covidSlice.reducer;