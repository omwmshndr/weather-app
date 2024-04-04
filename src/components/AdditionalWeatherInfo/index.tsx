import { useAppSelector } from '../../store/hooks/hooks'
import { degreeConverter } from '../../utils/degreeConverter'
import { unixDateToTime } from '../../utils/unixDateToTime'
import { WeatherInfoCard } from '../WeatherInfoCard'
import styles from './index.module.scss'

export const AdditionalWeatherInfo = () => {
  const { currentWeather } = useAppSelector(
    (state) => state.weather.weatherData,
  )
  const { tempUnits, lang } = useAppSelector((state) => state.config)
  return (
    <div className={styles.weather_info}>
      <WeatherInfoCard
        title={lang === 'en' ? 'Min temp' : 'Мінімальна температура'}
        data={`${degreeConverter(tempUnits, currentWeather?.main.temp_min as number)}`}
      />
      <WeatherInfoCard
        title={lang === 'en' ? 'Max temp' : 'Максимальна температура'}
        data={`${degreeConverter(tempUnits, currentWeather?.main.temp_max as number)}`}
      />
      <WeatherInfoCard
        title={lang === 'en' ? 'Feels like' : 'Відчувається'}
        data={`${degreeConverter(tempUnits, currentWeather?.main.feels_like as number)}`}
      />
      {typeof currentWeather?.visibility === 'number' ? (
        <WeatherInfoCard
          title={lang === 'en' ? 'Visiblity' : 'Видимість'}
          data={`${(currentWeather?.visibility as number) / 1000} ${lang === 'en' ? 'km' : 'км'}`}
        />
      ) : null}

      <WeatherInfoCard
        title={lang === 'en' ? 'Clouds' : 'Хмарність'}
        data={`${currentWeather?.clouds.all}%`}
      />
      <WeatherInfoCard
        title={lang === 'en' ? 'Wind speed' : 'Швидкість вітру'}
        data={`${((currentWeather?.wind.speed as number) * 3.6).toFixed()} ${lang === 'en' ? 'km/h' : 'км/год'}`}
      />
      <WeatherInfoCard
        title={lang === 'en' ? 'Sunrise' : 'Схід сонця'}
        data={`${unixDateToTime(currentWeather?.sys.sunrise as number)}`}
      />
      <WeatherInfoCard
        title={lang === 'en' ? 'Sunset' : 'Захід сонця'}
        data={`${unixDateToTime(currentWeather?.sys.sunset as number)}`}
      />
    </div>
  )
}
