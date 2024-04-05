import React from 'react'
import { Header } from './components/Header'
import { TodayForecast } from './components/TodayForecast'
import './i18n'
import styles from './App.module.scss'

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <TodayForecast />
    </div>
  )
}

export default App
