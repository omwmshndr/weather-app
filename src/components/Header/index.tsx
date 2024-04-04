import { HeaderSearchInput } from '../HeaderSerachInput'
import { Menu } from '../Menu'
import styles from './index.module.scss'

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <HeaderSearchInput />
      <Menu />
    </header>
  )
}
