import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../store/hooks/hooks'
import { degreeConverter } from '../../utils/degreeConverter'
import styles from './index.module.scss'

export const MainWeatherInfo: React.FC = () => {
  const { t } = useTranslation()
  const { currentCity, translatedCurrentCity } = useAppSelector(
    (state) => state.config,
  )
  const { currentWeather } = useAppSelector(
    (state) => state.weather.weatherData,
  )
  const { lang, tempUnits } = useAppSelector((state) => state.config)

  return (
    <div className={styles.main_weather_info}>
      <div className={styles.info_wrapper}>
        <div className={styles.city_temp}>
          <h2 className={styles.city}>
            {lang === 'en' ? currentCity : translatedCurrentCity}
          </h2>
          <div className={styles.temp_now}>
            {degreeConverter(tempUnits, currentWeather?.main?.temp as number)}
          </div>
        </div>
        <div className={styles.weather_img}>
          <img
            src={`https://raw.githubusercontent.com/omwmshndr/weather_app/01335434acd6cce0e1096dd2b732ef81797f2178/src/assets/weatherIcons/${currentWeather?.weather[0].icon}.svg`}
          />
        </div>
      </div>
      <h3 className={styles.description}>
        {t(`weatherDescriptions.${currentWeather?.weather[0].description}`)}
      </h3>
    </div>
  )
}
