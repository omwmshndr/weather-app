import { HeaderSearchInput } from './HeaderSerachInput/HeaderSerachInput'
import { HeaderLangSwitch } from './HeaderSwitchers/HeaderLangSwitch'
import styles from './Header.module.css'
import { HeaderTempUnitsSwitch } from './HeaderSwitchers/HeaderTempUnitsSwitch'

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <HeaderLangSwitch />
      <HeaderSearchInput />
      <HeaderTempUnitsSwitch />
    </header>
  )
}
