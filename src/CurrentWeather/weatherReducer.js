import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY } from "..";

export const getCurWeatherFunc = createAsyncThunk('src/getCurWeatherFunc', (location) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`)
        .then(data => data.json())
        .catch(err => console.log(err))

})

const weatherReducer = createSlice({
    name: 'weather',
    initialState: {
        loading: false,
        weather: [],
    },

    extraReducers: (builder) => {
        builder.addCase(getCurWeatherFunc.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getCurWeatherFunc.fulfilled, (state, action) => {
            if(action.payload.message)state.weather = []
            else state.weather = [action.payload]
            
            state.loading = false
        })
        builder.addCase(getCurWeatherFunc.rejected, (state, action) => {
            state.loading = false
            state.weather = []
        })
    }
})

export default weatherReducer.reducer