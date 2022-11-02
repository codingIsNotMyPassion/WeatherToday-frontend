import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import api from "../api/api"

// function to get data
export const getCurrentData = createAsyncThunk(
    "weather/getCurrentData",
    async (location) => {
        const response = await api.get(`/current/${location}`)
        return (response.data)
    }
)

export const getForecastData = createAsyncThunk(
    "weather/getForecastData",
    async (location) => {
        const response = await api.get(`/forecast/${location}`)
        return (response.data)
    }
)

// initial state
const initialState = {
    current: {},
    forecast: {}
}

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    extraReducers: {
        [getCurrentData.fulfilled]: (state, { payload }) => {
            console.log("fulfilled")
            return { ...state, current: payload }
        },
        [getForecastData.fulfilled]: (state, { payload }) => {
            console.log("fulfilled")
            return { ...state, forecast: payload }
        }
    }
})

export const getCurrent = (state) => state.weather.current
export const getForecast = (state) => state.weather.forecast
export default weatherSlice.reducer