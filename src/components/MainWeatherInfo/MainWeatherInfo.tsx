import { useAppSelector } from '../../hooks/hooks'
import { degreeConverter } from '../../scripts/degreeConverter'
import { weatherDescriptionTranslates } from '../../scripts/translations'
import styles from './MainWeatherInfo.module.css'

export const MainWeatherInfo: React.FC = () => {
  const { currentCity, translatedCurrentCity } = useAppSelector(
    (state) => state.config,
  )
  const { currentWeather } = useAppSelector(
    (state) => state.weather.weatherData,
  )
  const { lang, tempUnits } = useAppSelector((state) => state.config)

  return (
    <div className={styles.main_weather_info}>
      <div>
        <h2 className={styles.city}>
          {lang === 'en' ? currentCity : translatedCurrentCity}
        </h2>
        <div className={styles.temp_now}>
          {degreeConverter(tempUnits, currentWeather?.main?.temp as number)}
        </div>
        <h3 className={styles.description}>
          {lang === 'en'
            ? currentWeather?.weather[0].description
            : weatherDescriptionTranslates[
                currentWeather?.weather[0].description as string
              ]}
        </h3>
      </div>
      <div className={styles.weather_img}>
        <img
          src={`https://raw.githubusercontent.com/omwmshndr/weather_app/01335434acd6cce0e1096dd2b732ef81797f2178/src/assets/weatherIcons/${currentWeather?.weather[0].icon}.svg`}
        />
      </div>
    </div>
  )
}
