import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getCitySuggestions = createAsyncThunk(
  'getCitySuggestions',
  async (searchValue: string) => {
    const response = await axios.get(
      `http://api.geonames.org/searchJSON?name_startsWith=${searchValue}&featureClass=P&maxRows=100&username=omwmshndr`,
    )

    return response.data.geonames
  },
)
