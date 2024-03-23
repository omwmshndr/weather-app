import { NavLink } from 'react-router-dom'
import styles from './NavigateLinks.module.css'

export const NavigateLinks: React.FC = () => {
  return (
    <div className={styles.navigate}>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${styles.navlink} ${styles.active}` : styles.navlink
        }
        to="/"
      >
        Today forecats
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${styles.navlink} ${styles.active}` : styles.navlink
        }
        to="/7-days-forecat"
      >
        7 days forecats
      </NavLink>
    </div>
  )
}
