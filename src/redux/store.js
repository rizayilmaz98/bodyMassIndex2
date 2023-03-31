import { configureStore } from "@reduxjs/toolkit";
import  resultSlice  from "./result/resultSlice";

export const store = configureStore({
    reducer:{
        result:resultSlice
    },
})