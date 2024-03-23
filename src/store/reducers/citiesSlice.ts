import { createSlice } from '@reduxjs/toolkit'
import { getCitySuggestions } from '../../actions/getCitiesSuggestions'
import { CitiesStateInterface } from '../../types/types'

const initialState: CitiesStateInterface = {
  citiesLoadind: false,
  filteredCitiesList: null,
  sourceCitiesList: null,
  citiesError: null,
}

const citiesSlice = createSlice({
  name: 'Cities',
  initialState,
  reducers: {
    setFilteredCitiesList: (state, action) => {
      const filteredCitiesList = state.sourceCitiesList?.filter((el) =>
        el.cityName.toLowerCase().includes(action.payload.toLowerCase()),
      )
      state.filteredCitiesList =
        filteredCitiesList as typeof state.filteredCitiesList
    },
    setFilteredCitiesListToDefault: (state) => {
      state.filteredCitiesList = null
    },
    setSourceCitiesListToDefault: (state) => {
      state.sourceCitiesList = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCitySuggestions.pending, (state) => {
        state.citiesLoadind = true
      })
      .addCase(getCitySuggestions.fulfilled, (state, action) => {
        state.citiesLoadind = false
        type CityType = {
          name: string
          countryName: string
          lat: number
          lng: number
          population: number
        }
        const citiesList = action.payload.map((city: CityType) => ({
          cityName: city.name,
          countryName: city.countryName,
          coordinates: { lat: city.lat, lon: city.lng },
          population: city.population,
        }))
        citiesList.sort(
          (a: { population: number }, b: { population: number }) =>
            b.population - a.population,
        )
        state.sourceCitiesList = citiesList
        state.filteredCitiesList = citiesList
      })
      .addCase(getCitySuggestions.rejected, (state, action) => {
        state.citiesLoadind = false
        state.citiesError = action.error.message
      })
  },
})

export default citiesSlice.reducer

export const {
  setFilteredCitiesList,
  setFilteredCitiesListToDefault,
  setSourceCitiesListToDefault,
} = citiesSlice.actions
