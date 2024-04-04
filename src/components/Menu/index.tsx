import { useState } from 'react'
import { CgMenu } from 'react-icons/cg'
import { CgMenuRightAlt } from 'react-icons/cg'
import styles from './index.module.scss'
import { HeaderLangSwitch } from '../HeaderSwitchers/HeaderLangSwitch'
import { HeaderTempUnitsSwitch } from '../HeaderSwitchers/HeaderTempUnitsSwitch'

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  return (
    <div className={styles.menu}>
      <div className={styles.full_menu}>
        <HeaderLangSwitch />
        <HeaderTempUnitsSwitch />
      </div>
      <div className={styles.burger_menu}>
        {isMenuOpen ? (
          <div className={styles.burger_menu_open}>
            <CgMenuRightAlt
              style={{ color: '#5c6bc0', fontSize: '36px' }}
              onClick={() => setIsMenuOpen(false)}
            />
						<div className={styles.buttons}>
            <HeaderLangSwitch />
            <HeaderTempUnitsSwitch />
						</div>
          </div>
        ) : (
          <CgMenu
            style={{ color: '#5c6bc0', fontSize: '36px' }}
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </div>
    </div>
  )
}
