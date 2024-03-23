import { createSlice } from '@reduxjs/toolkit'
import {
  getCurrentWeather,
  autoGetCurrentWeather,
  getHourlyWeather,
  autoGetHourlyWeather,
} from '../../actions/getWeather'
import { WeatherStateInterface } from '../../types/types'

const initialState: WeatherStateInterface = {
  weatherLoading: false,
  weatherData: {
    currentWeather: null,
    hourlyWeather: null,
  },
  weatherError: null,
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentWeather.pending, (state) => {
        state.weatherLoading = true
        state.weatherError = null
      })
      .addCase(getCurrentWeather.fulfilled, (state, action) => {
        state.weatherLoading = false
        state.weatherData.currentWeather = action.payload
      })
      .addCase(getCurrentWeather.rejected, (state, action) => {
        state.weatherLoading = false
        state.weatherError = action.error.message
      })
      .addCase(autoGetCurrentWeather.pending, (state) => {
        state.weatherLoading = true
        state.weatherError = null
      })
      .addCase(autoGetCurrentWeather.fulfilled, (state, action) => {
        state.weatherLoading = false
        state.weatherData.currentWeather = action.payload
      })
      .addCase(autoGetCurrentWeather.rejected, (state, action) => {
        state.weatherLoading = false
        state.weatherError = action.error.message
      })
      .addCase(getHourlyWeather.pending, (state) => {
        state.weatherLoading = true
        state.weatherError = null
      })
      .addCase(getHourlyWeather.fulfilled, (state, action) => {
        state.weatherLoading = false
        state.weatherData.hourlyWeather = action.payload
      })
      .addCase(getHourlyWeather.rejected, (state, action) => {
        state.weatherLoading = false
        state.weatherError = action.error.message
      })
      .addCase(autoGetHourlyWeather.pending, (state) => {
        state.weatherLoading = true
        state.weatherError = null
      })
      .addCase(autoGetHourlyWeather.fulfilled, (state, action) => {
        state.weatherLoading = false
        state.weatherData.hourlyWeather = action.payload
      })
      .addCase(autoGetHourlyWeather.rejected, (state, action) => {
        state.weatherLoading = false
        state.weatherError = action.error.message
      })
  },
})

export default weatherSlice.reducer
