import React, { useEffect, useState } from 'react';
import css from './Header.module.scss';
import Link from 'next/link';

const navbar = [
  {
    name: 'cams',
    slug: '/cams'
  },
  {
    name: 'pornstars',
    slug: '/pornstars'
  },
  {
    name: 'videos',
    slug: '/videos'
  },
  {
    name: 'about',
    slug: '/about'
  }
]

const themes = ['default', 'dark', 'stPatrick']

const Header = ({currentPage, setActiveTheme}) => {

  const [themesOpen, setThemesOpen] = useState(false)


  const NavLink = ({name, slug}) => {
    return (
      <li key={name} className={`${css.nav_link} ${currentPage === name ? css.active : ''}`}>
        <Link href={slug}>
          <a>
            <h3>{name}</h3>
          </a>
        </Link>
      </li>
    )
  }

  const ThemeLink = ({theme}) => {
    return(
      <li>
        <button onClick={() => setActiveTheme(theme)}>{theme}</button>
      </li>
    )
  }

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Link href='/'>
          <a className={css.logo}>
            <h3>HOME</h3>
          </a>
        </Link>

        <ul className={css.menu}>
          <li className={css.dropdown} 
          onMouseEnter={() => setThemesOpen(true)}>
            <p>THEMES</p>
            
            <ul className={`${css.dropdown_content} ${themesOpen? css.open : css.close}`} onMouseLeave={() => setThemesOpen(false)}>
              {themes.map((theme) => {
                return(
                  <ThemeLink key={theme} theme={theme}/>
                ) 
              })}
            </ul>
          </li>
          
          {navbar.map((link) => {
            return (
              <NavLink name={link.name} slug={link.slug} key={link.name}/>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header