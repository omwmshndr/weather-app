import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { OWM_API_BASE_URL, OWM_API_KEY } from '../../config'

const API_KEY = OWM_API_KEY
const BASE_URL = OWM_API_BASE_URL

export const getCurrentWeather = createAsyncThunk(
  'getCurrentWeather',
  async (city: string) => {
    const response = await axios.get(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}`,
    )

    return response.data
  },
)

export const getHourlyWeather = createAsyncThunk(
  'getHourlyWeather',
  async (city: string) => {
    const response = await axios.get(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}`,
    )

    return response.data
  },
)

type CoordsType = {
  lat: number
  lon: number
}

export const autoGetCurrentWeather = createAsyncThunk(
  'autoGetCurrentWeather',
  async (coord: CoordsType) => {
    const { lat, lon } = { ...coord }
    const response = await axios.get(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
    )
    return response.data
  },
)

export const autoGetHourlyWeather = createAsyncThunk(
  'autoGetHourlyWeather',
  async (coord: CoordsType) => {
    const { lat, lon } = { ...coord }

    const response = await axios.get(
      `${BASE_URL}/forecast/?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
    )

    return response.data
  },
)
