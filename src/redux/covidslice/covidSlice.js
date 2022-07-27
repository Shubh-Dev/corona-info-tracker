import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getCovidData from '../../services/services';

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
      const coronas = action.payload;
      const corona = coronas.map((key) => ({
        id: key.country,
        country: key.country,
        flag: key.countryInfo.flag,
        cases: key.cases,
        todayCases: key.todayCases,
        deaths: key.deaths,
        todayDeaths: key.todayDeaths,
        recovered: key.recovered,
        active: key.active,
        critical: key.critical,
        population: key.population,
        continent: key.continent,
        casesPerOneMillion: key.casesPerOneMillion,
        deathsPerOneMillion: key.deathsPerOneMillion,
        tests: key.tests,
        testsPerOneMillion: key.testsPerOneMillion,
        updated: key.updated,
      }));

      const theState = state;
      theState.isLoading = false;
      theState.isFailed = false;
      theState.items = corona;
    },
    [fetchCovidData.pending]: (state) => { state.isLoading = true; },
    [fetchCovidData.rejected]: (state) => { state.isFailed = true; },
  },
});

export default covidSlice.reducer;
