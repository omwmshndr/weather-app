import { useAppSelector } from '../../store/hooks/hooks'
import { HourlyWeatherPropsInterface } from '../../types/types'
import { degreeConverter } from '../../utils/degreeConverter'
import dayjs from 'dayjs'
import styles from './index.module.scss'
import { useTranslation } from 'react-i18next'

export const HourlyWeatherCard: React.FC<HourlyWeatherPropsInterface> = (
  props,
) => {
  const { tempUnits } = useAppSelector((state) => state.config)
  const { temp, time, weatherIcon } = { ...props }
  const { t } = useTranslation()
  const date = dayjs.unix(time)
  return (
    <div className={styles.hourly_card}>
      <span className={styles.day}>{t(`days.${date.format('dddd')}`)}</span>
      <span className={styles.time}>{date.format('HH:mm')}</span>
      <div className={styles.weather_icon}>
        <img
          src={`https://raw.githubusercontent.com/omwmshndr/weather_app/01335434acd6cce0e1096dd2b732ef81797f2178/src/assets/weatherIcons/${weatherIcon}.svg`}
        />
      </div>
      <span className={styles.temp}>{degreeConverter(tempUnits, temp)}</span>
    </div>
  )
}
