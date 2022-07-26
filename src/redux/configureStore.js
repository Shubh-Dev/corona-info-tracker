import { configureStore } from "@reduxjs/toolkit";
import covidSlice from "./covidslice/covidSlice";

const reducer = {
    covid: covidSlice.reducer,
};

const store = configureStore({reducer});

export default store;