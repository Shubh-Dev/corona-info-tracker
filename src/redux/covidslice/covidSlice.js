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
            let itemArray = [];
            // state.isLoading = false;
            // state.items = action.payload;
            const coronas = action.payload;
            for (let key in coronas) {
                itemArray.push({
                    id: key,
                    country: coronas[key].All.country,
                    population: coronas[key].All.population,
                    confirmed: coronas[key].All.confirmed,
                    recovered: coronas[key].All.recovered,
                    deaths: coronas[key].All.deaths,
                    continent: coronas[key].All.continent,
                    capitalCity: coronas[key].All.capital_city,
                    updated: coronas[key].All.updated,
                });
            };
            const theState = state;
            theState.isLoading = false;
            theState.isFailed = false;
            theState.items = itemArray;

        },
        [fetchCovidData.pending]: (state) => {state.isLoading = true;},
        [fetchCovidData.rejected]: (state) => {state.isFailed = true;},
    },
});

export default covidSlice.reducer;