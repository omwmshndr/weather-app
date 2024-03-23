import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import styles from './App.module.css'
import { Header } from './components/Header/Header'
import { NavigateLinks } from './components/Navigate/NavigateLinks'
import { TodayForecast } from './components/TodayForecast/TodayForecast'

const App: React.FC = () => {

  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path="/" element={<TodayForecast />} />
          <Route
            path="/7-days-forecat"
            element={
              <div>
                <NavigateLinks />7 days
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
