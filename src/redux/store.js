import {configureStore } from "@reduxjs/toolkit"
import {expenceSlice} from "./expenceSlice.js"

const store = configureStore({
    reducer:{
        expenceSlice:expenceSlice.reducer
    }
})

export default store