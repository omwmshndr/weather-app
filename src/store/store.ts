import { combineReducers, configureStore } from '@reduxjs/toolkit'
import weatherReducer from './reducers/weatherSlice'
import configReducer from './reducers/configSlice'
import citiesReducer from './reducers/citiesSlice'

const rootReducer = combineReducers({
  weather: weatherReducer,
  cities: citiesReducer,
  config: configReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
