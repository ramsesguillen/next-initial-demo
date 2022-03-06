import { ActiveLink } from './ActiveLink'
import styles from './NavBar.module.css'
import { menuItems }  from '../data/menu-items'


export const NavBar = () => {
  return (
    <nav className={ styles['nav-container']}>
      {
        menuItems.map((item) => (
          <ActiveLink key={item.href} text={item.text} href={item.href} />
        ))
      }
    </nav>
  )
}
