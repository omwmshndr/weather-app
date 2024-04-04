import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { setTempUnits } from '../../store/reducers/configSlice'
import styles from './HeaderSwitchers.module.css'

export const HeaderTempUnitsSwitch = () => {
  const dispatch = useAppDispatch()

  const { tempUnits } = useAppSelector((state) => state.config)

  return (
    <div className={styles.buttonsGroup}>
      <button
        value="celsius"
        className={
          tempUnits === 'celsius'
            ? `${styles.groupButton} ${styles.activeButton}`
            : styles.groupButton
        }
        onClick={(e) =>
          dispatch(
            setTempUnits(e.currentTarget.value as 'celsius' | 'fahrenheit'),
          )
        }
      >{`\u00B0C`}</button>
      <button
        value="fahrenheit"
        className={
          tempUnits === 'fahrenheit'
            ? `${styles.groupButton} ${styles.activeButton}`
            : styles.groupButton
        }
        onClick={(e) =>
          dispatch(
            setTempUnits(e.currentTarget.value as 'celsius' | 'fahrenheit'),
          )
        }
      >{`\u00B0F`}</button>
    </div>
  )
}
