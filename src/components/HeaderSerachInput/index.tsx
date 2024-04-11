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
import { CitiesList } from '../CitiesList'
import Joi from 'joi'
import styles from './index.module.scss'

export const HeaderSearchInput = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [inputError, setInputError] = useState<null | string>(null)

  const dispatch = useAppDispatch()

  const [citiesHidden, setCitiesHidden] = useState<boolean>(true)

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

  const searchShema = Joi.string()
    .min(1)
    .max(100)
    .required()
    .pattern(/^[a-zA-Z\s-]+$/)
    .messages({
      'string.min': 'City name must contain at least 1 character.',
      'string.max': 'City name must be 100 characters or less.',
      'string.pattern.base':
        'City name can only contain letters, spaces, and hyphens.',
      'any.required': 'City is required.',
    })

  const handleWeather = async (city: string) => {
    const correctedCity = city.toLowerCase().trim()

    const { error } = searchShema.validate(correctedCity)

    if (error) {
      setInputError(error.details[0].message)
      setInputValue('')
      return
    }

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
          onClick={() => setCitiesHidden(false)}
        />
        <CitiesList
          inputValue={inputValue}
          setInputValue={setInputValue}
          citiesHidden={citiesHidden}
          setCitiesHidden={setCitiesHidden}
        />
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
