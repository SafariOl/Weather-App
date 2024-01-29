import { API_KEY } from "..";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchForecast = createAsyncThunk('src/fetchForecast', (location) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${API_KEY}`)
            .then(data => data.json())
            .then(data => data.list)
            .catch(err => console.log(err))
})

const weatherForecast = createSlice({
    name: 'forecast',
    initialState: {
        loading: false,
        forecast: [],
    },
    extraReducers: (builder) => {
        builder.addCase(fetchForecast.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchForecast.fulfilled, (state, action) => {
            if(action.payload === undefined) state.forecast = []
            else state.forecast = action.payload
            
            state.loading = false
        })
        builder.addCase(fetchForecast.rejected, (state) => {
            state.loading = false
        })
    }
})

export default weatherForecast.reducer
