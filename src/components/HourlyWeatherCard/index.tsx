import { useAppSelector } from '../../store/hooks/hooks'
import { HourlyWeatherPropsInterface } from '../../types/types'
import { degreeConverter } from '../../utils/degreeConverter'
import { daysTranslations } from '../../utils/translations'
import styles from './index.module.scss'

export const HourlyWeatherCard: React.FC<HourlyWeatherPropsInterface> = (
  props,
) => {
  const { lang, tempUnits } = useAppSelector((state) => state.config)
  const { temp, time, weatherIcon } = { ...props }
  const date = new Date(time * 1000)

  return (
    <div className={styles.hourly_card}>
      <span className={styles.day}>
        {lang === 'en'
          ? date.toLocaleDateString('en-US', { weekday: 'long' })
          : daysTranslations[
              date.toLocaleDateString('en-US', { weekday: 'long' })
            ]}
      </span>
      <span className={styles.time}>{`${date.getHours()}:00`}</span>
      <div className={styles.weather_icon}>
        <img
          src={`https://raw.githubusercontent.com/omwmshndr/weather_app/01335434acd6cce0e1096dd2b732ef81797f2178/src/assets/weatherIcons/${weatherIcon}.svg`}
        />
      </div>
      <span className={styles.temp}>{degreeConverter(tempUnits, temp)}</span>
    </div>
  )
}
