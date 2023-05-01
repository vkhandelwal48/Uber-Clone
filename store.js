import { configureStore } from "@reduxjs/toolkit";
import navReducer from './slices/navSlice';

//configure the data layer
export const store=configureStore({
    reducer:{
        nav:navReducer,
    },
})