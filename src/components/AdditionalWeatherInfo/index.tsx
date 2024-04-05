import dayjs from 'dayjs'
import { useAppSelector } from '../../store/hooks/hooks'
import { degreeConverter } from '../../utils/degreeConverter'
import { WeatherInfoCard } from '../WeatherInfoCard'
import styles from './index.module.scss'
import { useTranslation } from 'react-i18next'

export const AdditionalWeatherInfo = () => {
  const { currentWeather } = useAppSelector(
    (state) => state.weather.weatherData,
  )

  const { t } = useTranslation()

  const { tempUnits } = useAppSelector((state) => state.config)

  return (
    <div className={styles.weather_info}>
      <WeatherInfoCard
        title={t(`additionalWeatherInfo.min_temp`)}
        data={`${degreeConverter(tempUnits, currentWeather?.main.temp_min as number)}`}
      />
      <WeatherInfoCard
        title={t(`additionalWeatherInfo.max_temp`)}
        data={`${degreeConverter(tempUnits, currentWeather?.main.temp_max as number)}`}
      />
      <WeatherInfoCard
        title={t(`additionalWeatherInfo.feels_like`)}
        data={`${degreeConverter(tempUnits, currentWeather?.main.feels_like as number)}`}
      />
      {typeof currentWeather?.visibility === 'number' ? (
        <WeatherInfoCard
          title={t(`additionalWeatherInfo.visiblity`)}
          data={`${(currentWeather?.visibility as number) / 1000} ${t(`additionalWeatherInfo.distance`)}`}
        />
      ) : null}

      <WeatherInfoCard
        title={t(`additionalWeatherInfo.clouds`)}
        data={`${currentWeather?.clouds.all}%`}
      />
      <WeatherInfoCard
        title={t(`additionalWeatherInfo.wind_speed`)}
        data={`${((currentWeather?.wind.speed as number) * 3.6).toFixed()} ${t(`additionalWeatherInfo.speed`)}`}
      />
      <WeatherInfoCard
        title={t(`additionalWeatherInfo.sunrise`)}
        data={`${dayjs.unix(currentWeather?.sys.sunrise as number).format('HH:mm')}`}
      />
      <WeatherInfoCard
        title={t(`additionalWeatherInfo.sunset`)}
        data={`${dayjs.unix(currentWeather?.sys.sunset as number).format('HH:mm')}`}
      />
    </div>
  )
}
