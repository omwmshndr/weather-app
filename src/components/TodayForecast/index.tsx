import { ArrowUpOutlined, LoadingOutlined } from '@ant-design/icons'
import { Alert, Spin } from 'antd'
import { useAppSelector } from '../../store/hooks/hooks'
import { AdditionalWeatherInfo } from '../AdditionalWeatherInfo'
import { HourlyWeatherForecats } from '../HourlyWeatherForecats'
import { MainWeatherInfo } from '../MainWeatherInfo'
import styles from './index.module.scss'

export const TodayForecast: React.FC = () => {
  const { weatherLoading, weatherData, weatherError } = useAppSelector(
    (state) => state.weather,
  )

  return (
    <div className={styles.content}>
      {weatherError ? (
        <Alert
          message="Error"
          description={`${weatherError}`}
          type="error"
          showIcon
        />
      ) : weatherLoading ? (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      ) : weatherData?.currentWeather && weatherData?.hourlyWeather ? (
        <>
          {/* <NavigateLinks /> */}
          <MainWeatherInfo />
          <AdditionalWeatherInfo />
          <HourlyWeatherForecats />
        </>
      ) : (
        <h1>
          Enter your city here <ArrowUpOutlined />
        </h1>
      )}
    </div>
  )
}
