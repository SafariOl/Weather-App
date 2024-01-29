import { API_KEY } from "..";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getHourlyWeatherFunc = createAsyncThunk('src/fetchHourluWeather', async(location) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&cnt=9&appid=${API_KEY}`)
            .then(data => data.json())
            .then(data => data.list)
            .catch(err => console.log(err))
})

const hourlyWeather = createSlice({
    name: 'hourly',
    initialState: {
        loading: false,
        hourly: [],
        error: ''
    },
    extraReducers: (builder) => {
        builder.addCase(getHourlyWeatherFunc.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getHourlyWeatherFunc.fulfilled, (state, action) => {
            if(action.payload === undefined) {
                state.hourly = []
            }else{
                state.hourly = action.payload
            }
            state.loading = false
        })
        builder.addCase(getHourlyWeatherFunc.rejected, (state) => {
            state.loading = false
            state.hourly = []
        })
    }
})

export default hourlyWeather.reducer