import { HourlyWeatherCard } from '../HourlyWeatherCard/HourlyWeatherCard'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.min.css'
import styles from './HourlyWeatherForecats.module.css'
import { useAppSelector } from '../../hooks/hooks'

export const HourlyWeatherForecats = () => {
  const { hourlyWeather } = useAppSelector((state) => state.weather.weatherData)
  return (
    <div className={styles.hourly}>
      <h2>FORECAST</h2>
      <div className={styles.hourly_wrapper}>
        <PerfectScrollbar className={styles.hourly_sroll}>
          {hourlyWeather?.list.map((el, i) => (
            <HourlyWeatherCard
              temp={el.main.temp}
              weatherIcon={el.weather[0].icon}
              time={el.dt}
              key={i}
            />
          ))}
        </PerfectScrollbar>
      </div>
    </div>
  )
}
