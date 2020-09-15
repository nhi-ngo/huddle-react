import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

import Button from '../Button/Button'

import './Navbar.scss'

const NavBar = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const onIconClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 768) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <div className="nav">
        <div className="nav__container container">
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            <img src="images/logo-white.svg" alt="logo" />
          </Link>
          <div className="menu-icon" onClick={onIconClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={click ? 'nav__menu active' : 'nav__menu'}>
            <li className="nav__item">
              <Link to="/" className="nav__link" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/services" className="nav__link" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/products" className="nav__link" onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className="nav__btn">
              {button ? (
                <Link to="/sign-up" className="btn-link flex">
                  <Button buttonStyle="btn--outline">SIGN UP</Button>
                </Link>
              ) : (
                <Link
                  to="/sign-up"
                  className="btn-link flex"
                  onClick={closeMobileMenu}
                >
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    SIGN UP
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default NavBar
