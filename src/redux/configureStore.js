import { configureStore } from "@reduxjs/toolkit";
import covidSlice from "./covidslice/covidSlice";

const reducer = {
    items: covidSlice,
};

const store = configureStore({reducer});

export default store;