import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ConfigStateInterface } from '../../types/types'
import { autoGetCurrentWeather } from '../actions/getWeather'

const initialState: ConfigStateInterface = {
  currentCity: null,
  translatedCurrentCity: null,
  lang: 'en',
  tempUnits: 'celsius',
}

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<'en' | 'ua'>) => {
      state.lang = action.payload
    },
    setTempUnits: (state, action: PayloadAction<'celsius' | 'fahrenheit'>) => {
      state.tempUnits = action.payload
    },
    setCurrentCity: (state, action: PayloadAction<string>) => {
      state.currentCity = action.payload
    },
    setTranslatedCurrentCity: (state, action: PayloadAction<string | null>) => {
      state.translatedCurrentCity = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(autoGetCurrentWeather.fulfilled, (state, action) => {
      state.currentCity = action.payload.name
    })
  },
})

export const {
  setLang,
  setTempUnits,
  setCurrentCity,
  setTranslatedCurrentCity,
} = configSlice.actions

export default configSlice.reducer
