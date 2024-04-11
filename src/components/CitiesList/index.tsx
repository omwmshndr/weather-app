import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import { SetStateAction } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.min.css'
import {
  getCurrentWeather,
  getHourlyWeather,
} from '../../store/actions/getWeather'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import {
  setFilteredCitiesListToDefault,
  setSourceCitiesListToDefault,
} from '../../store/reducers/citiesSlice'
import { setCurrentCity } from '../../store/reducers/configSlice'
import styles from './index.module.scss'
import { useOutsideClick } from '../../utils/useOutsideClick'
import classNames from 'classnames/bind'

interface CitiesListPropsInterface {
  inputValue: string
  setInputValue: React.Dispatch<SetStateAction<string>>
  citiesHidden: boolean
  setCitiesHidden: React.Dispatch<SetStateAction<boolean>>
}

export const CitiesList: React.FC<CitiesListPropsInterface> = (props) => {
  const { setInputValue, citiesHidden, setCitiesHidden } = { ...props }
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

  const ref = useOutsideClick(() => {
    setCitiesHidden(true)
  })
  const cx = classNames.bind(styles)

  const citiesListClassName = cx({
    citiesListHidden:
      !(citiesError === null && (filteredCitiesList?.length as number) > 0) ||
      citiesHidden,
    citiesList:
      citiesError === null &&
      (filteredCitiesList?.length as number) > 0 &&
      !citiesHidden,
  })

  return (
    <div ref={ref} className={citiesListClassName}>
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
