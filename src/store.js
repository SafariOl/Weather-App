import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./CurrentWeather/weatherReducer";
import ForecastWReducer from "./ForecastWeather/ForecastWReducer";
import HourlyWReducer from "./HourlyWeather/HourlyWReducer";


export const store = configureStore({
    reducer: {
        forecast: ForecastWReducer,
        weather: weatherReducer,
        hourly: HourlyWReducer,
    }
})