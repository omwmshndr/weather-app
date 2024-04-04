import {
  autoGetCurrentWeather,
  autoGetHourlyWeather,
} from '../store/actions/getWeather'
import { AppDispatch } from '../store/store'

export const detectLocation = async (dispatch: AppDispatch) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      await dispatch(
        autoGetCurrentWeather({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }),
      )
      await dispatch(
        autoGetHourlyWeather({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }),
      )
    })
  }
}
