import { HeaderSearchInput } from '../HeaderSerachInput/HeaderSerachInput'
import { HeaderLangSwitch } from '../HeaderSwitchers/HeaderLangSwitch'
import { HeaderTempUnitsSwitch } from '../HeaderSwitchers/HeaderTempUnitsSwitch'
import styles from './Header.module.css'

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <HeaderLangSwitch />
      <HeaderSearchInput />
      <HeaderTempUnitsSwitch />
    </header>
  )
}
