import weatherReducer from "./weatherReducer";
import {configureStore} from "@reduxjs/toolkit"

export const store = configureStore({
    reducer:{
        weather:weatherReducer
    }
})