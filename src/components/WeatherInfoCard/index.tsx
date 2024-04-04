import styles from './index.module.scss'

type WeatherInfoCardPropsType = {
  title: string
  data: string
}
export const WeatherInfoCard: React.FC<WeatherInfoCardPropsType> = ({
  title,
  data,
}) => {
  return (
    <div className={styles.weather_info_card}>
      <span className={styles.title}>{title}</span>
      <span className={styles.data}>{`${data}`}</span>
    </div>
  )
}
