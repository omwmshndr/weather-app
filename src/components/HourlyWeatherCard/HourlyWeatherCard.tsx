import { useAppSelector } from '../../hooks/hooks'
import { degreeConverter } from '../../scripts/degreeConverter'
import { daysTranslations } from '../../scripts/translations'
import { HourlyWeatherPropsInterface } from '../../types/types'
import styles from './HourlyWeatherCard.module.css'

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
        <img src={`/assets/weatherIcons/${weatherIcon}.svg`} />
      </div>
      <span className={styles.temp}>{degreeConverter(tempUnits, temp)}</span>
    </div>
  )
}
