import React from 'react'
import styles from './App.module.scss'
import { Header } from './components/Header'
import { TodayForecast } from './components/TodayForecast'

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <TodayForecast />
    </div>
  )
}

export default App
