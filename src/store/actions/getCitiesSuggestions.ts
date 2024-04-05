import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { GN_API_BASE_URL, GN_API_KEY } from '../../config'

const API_KEY = GN_API_KEY
const BASE_URL = GN_API_BASE_URL

export const getCitySuggestions = createAsyncThunk(
  'getCitySuggestions',
  async (searchValue: string) => {
    const response = await axios.get(
      `${BASE_URL}/searchJSON?name_startsWith=${searchValue}&featureClass=P&maxRows=100&username=${API_KEY}`,
    )

    return response.data.geonames
  },
)
