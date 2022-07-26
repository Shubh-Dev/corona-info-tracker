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
            state.isLoading = false;
            state.items = action.payload;
        },
        [fetchCovidData.pending]: (state) => {state.isLoading = true;},
        [fetchCovidData.rejected]: (state) => {state.isFailed = true;},
    },
});

export default covidSlice.reducer;