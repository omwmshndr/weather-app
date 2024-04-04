import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_KEY = '14d3e49333bd768cd54523194a8ccd53'

export const getCurrentWeather = createAsyncThunk(
  'getCurrentWeather',
  async (city: string) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
    )

    return response.data
  },
)

export const getHourlyWeather = createAsyncThunk(
  'getHourlyWeather',
  async (city: string) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`,
    )

    return response.data
  },
)

// export const get7DayForecast = createAsyncThunk(
//   'get7DayForecast',
//   async (city: string) => {
//     const response = await axios.get(
//       `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`,
//     )

//     return response.data
//   },
// )

type CoordsType = {
  lat: number
  lon: number
}

export const autoGetCurrentWeather = createAsyncThunk(
  'autoGetCurrentWeather',
  async (coord: CoordsType) => {
    const { lat, lon } = { ...coord }
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
    )
    return response.data
  },
)

export const autoGetHourlyWeather = createAsyncThunk(
  'autoGetHourlyWeather',
  async (coord: CoordsType) => {
    const { lat, lon } = { ...coord }

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
    )

    return response.data
  },
)
