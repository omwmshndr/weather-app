import { useEffect } from 'react'
import { translateText } from '../../store/actions/translateText'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import {
  setLang,
  setTranslatedCurrentCity,
} from '../../store/reducers/configSlice'
import styles from './index.module.scss'
import { useTranslation } from 'react-i18next'

export const HeaderLangSwitch = () => {
  const dispatch = useAppDispatch()
  const { i18n } = useTranslation()

  const { currentCity, lang } = useAppSelector((state) => {
    return {
      currentCity: state.config.currentCity,
      lang: state.config.lang,
    }
  })

  useEffect(() => {
    const fetchTranslatedCity = async () => {
      const translatedCity = await translateText(currentCity as string)
      dispatch(setTranslatedCurrentCity(translatedCity))
    }

    if (lang === 'ua') {
      fetchTranslatedCity()
    } else {
      dispatch(setTranslatedCurrentCity(null))
    }
  }, [lang, currentCity, dispatch])

  const changeLangHandler = async (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLButtonElement
    dispatch(setLang(target.value as 'en' | 'ua'))
    i18n.changeLanguage(target.value)
    dispatch(
      setTranslatedCurrentCity(await translateText(currentCity as string)),
    )
  }

  return (
    <div className={styles.buttonsGroup}>
      <button
        value="en"
        className={
          lang === 'en'
            ? `${styles.groupButton} ${styles.activeButton}`
            : styles.groupButton
        }
        onClick={(e) => {
          changeLangHandler(e)
        }}
      >
        EN
      </button>
      <button
        value="ua"
        className={
          lang === 'ua'
            ? `${styles.groupButton} ${styles.activeButton}`
            : styles.groupButton
        }
        onClick={(e) => changeLangHandler(e)}
      >
        UA
      </button>
    </div>
  )
}
