import { AimOutlined, SearchOutlined } from '@ant-design/icons'
import { KeyboardEvent, useState } from 'react'
import { getCitySuggestions } from '../../store/actions/getCitiesSuggestions'
import {
  getCurrentWeather,
  getHourlyWeather,
} from '../../store/actions/getWeather'
import { useAppDispatch } from '../../store/hooks/hooks'
import {
  setFilteredCitiesList,
  setFilteredCitiesListToDefault,
  setSourceCitiesListToDefault,
} from '../../store/reducers/citiesSlice'
import { setCurrentCity } from '../../store/reducers/configSlice'
import { detectLocation } from '../../utils/detectLocation'
import { CitiesList } from '../CitiesList/CitiesList'
import styles from './HeaderSerachInput.module.css'

export const HeaderSearchInput = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [inputError, setInputError] = useState<null | string>(null)

  const dispatch = useAppDispatch()

  const inputHandler = async (value: string) => {
    setInputValue(value)
    const correctValue = value.toLowerCase().trim()
    if (value.length === 2) {
      await dispatch(getCitySuggestions(correctValue))
    }
    if (value.length > 2) {
      dispatch(setFilteredCitiesList(correctValue))
    }
    if (value.length <= 1) {
      dispatch(setFilteredCitiesListToDefault())
      dispatch(setSourceCitiesListToDefault())
    }
  }

  const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleWeather(inputValue)
      dispatch(setFilteredCitiesListToDefault())
      dispatch(setSourceCitiesListToDefault())
    }
  }
  const handleWeather = async (city: string) => {
    if (!city) {
      setInputError('City is required')
      return
    }
    const correctedCity = city.toLowerCase().trim()
    await dispatch(getCurrentWeather(correctedCity))
    await dispatch(getHourlyWeather(correctedCity))
    dispatch(setCurrentCity(correctedCity))

    setInputValue('')
    setInputError(null)
  }

  return (
    <div className={styles.searchInputGroup}>
      <div className={styles.inputWrapper}>
        <input
          className={`${styles.searchInputCity} ${inputError ? styles.inputError : null}`}
          placeholder={inputError ? inputError : 'Enter your city'}
          value={inputValue}
          onChange={(e) => inputHandler(e.target.value)}
          onKeyUp={(e) => onEnterHandler(e)}
        />
        <CitiesList inputValue={inputValue} setInputValue={setInputValue} />
      </div>
      <button
        className={styles.circleButton}
        onClick={() => handleWeather(inputValue)}
      >
        <SearchOutlined />
      </button>
      <button
        className={styles.circleButton}
        onClick={() => detectLocation(dispatch)}
      >
        <AimOutlined />
      </button>
    </div>
  )
}
