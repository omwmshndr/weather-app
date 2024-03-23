import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.min.css'
import styles from './CitiesList.module.css'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { getCurrentWeather, getHourlyWeather } from '../../actions/getWeather'
import { setCurrentCity } from '../../store/reducers/configSlice'
import { SetStateAction } from 'react'
import { setFilteredCitiesListToDefault, setSourceCitiesListToDefault } from '../../store/reducers/citiesSlice'

interface CitiesListPropsInterface {
  inputValue: string
  setInputValue: React.Dispatch<SetStateAction<string>>
}

export const CitiesList: React.FC<CitiesListPropsInterface> = (props) => {
  const {setInputValue} = {...props}
  const { citiesError, citiesLoadind, filteredCitiesList } = useAppSelector(
    (state) => state.cities,
  )
  const dispatch = useAppDispatch()

  const handleWeather = async (city: string) => {
    await dispatch(getCurrentWeather(city))
    await dispatch(getHourlyWeather(city))
    dispatch(setCurrentCity(city))
    dispatch(setFilteredCitiesListToDefault())
    dispatch(setSourceCitiesListToDefault())
    setInputValue('')
  }

  return (
    <div
      className={
        citiesError === null && (filteredCitiesList?.length as number) > 0
          ? styles.citiesList
          : styles.citiesListHidden
      }
    >
      {citiesLoadind ? (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      ) : (
        <PerfectScrollbar>
          <>
            {filteredCitiesList?.map((city, i) => (
              <div
                className={styles.cityHint}
                key={i}
                onClick={() => handleWeather(city.cityName)}
              >
                {city.cityName}, {city.countryName}
              </div>
            ))}
          </>
        </PerfectScrollbar>
      )}
    </div>
  )
}
