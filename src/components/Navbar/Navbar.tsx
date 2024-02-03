import styles from './Navbar.module.scss'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import clsx from 'clsx'
import { RootState } from '../../store/index'
import LoginPopup from '../LoginPopup/LoginPopup'

const navItems = ['books', 'audiobooks', 'stationery & gifts', 'blog']

const Navbar = () => {
  const cart = useSelector((state: RootState) => state.profile.cart)
  const [showNav, setShowNav] = useState<boolean>(false)

  const handleClickBurger = () => {
    showNav ? setShowNav(false) : setShowNav(true)
  }

  return (
    <header>
      <div className={styles.navbar}>
        <div className={styles.navbar__logo}>
	  <button onClick={handleClickBurger}>
	    <svg
	      width='28'
	      height='24'
	      viewBox='0 0 28 24'
	      fill='none'
	      xmlns='http://www.w3.org/2000/svg'
	    >
	      <path
	        d='M0 2C0 0.895431 0.895431 0 2 0H26C27.1046 0 28 0.895431 28 2C28 3.10457 27.1046 4 26 4H2C0.895431 4 0 3.10457 0 2Z'
	        fill='#000'
	      />
	      <path
	        d='M0 12C0 10.8954 0.895431 10 2 10H26C27.1046 10 28 10.8954 28 12C28 13.1046 27.1046 14 26 14H2C0.895431 14 0 13.1046 0 12Z'
	        fill='#000'
	      />
	      <path
	        d='M0 22C0 20.8954 0.895431 20 2 20H26C27.1046 20 28 20.8954 28 22C28 23.1046 27.1046 24 26 24H2C0.895431 24 0 23.1046 0 22Z'
	        fill='#000'
	      />
	    </svg>
	  </button>
          <div className={styles.navbar__logo__a}>
            <Link href="/">Bookshop</Link>
          </div>
        </div>
        <nav
          className={clsx(styles.nav, {
            [styles.show]: showNav
          })}
        >
          <ul>
            {navItems.map(navItem => (
              <li
                className={clsx('', {
                  [styles.active]: navItem === 'books'
                })}
                key={navItem}
              >
                <a href='#'>{navItem}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.navbar__profile}>
          <LoginPopup/>
          <Link href={"#"} className={styles.profile__btn + " " + styles.profile__btn__search}></Link>
          <Link href={"/cart"} className={styles.profile__btn + " " + styles.profile__btn__basket}>
            {cart.length > 0 && <div className={styles.basket__items} id="basketItems">{cart.length}</div>}
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
