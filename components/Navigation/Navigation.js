/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import Link from 'next/link'
import LanguageToggle from '../languageToggle'
import { useAppContext } from '../context'
import navigationItems from './navigationItems'
import styles from './Navigation.module.css'

const anchorClasses = 'block p-2'
const itemClasses = 'hidden md:block ml-4'
const toggleClasses = 'block ml-4'

export default function Navigation({ showDrawer, setShowDrawer }) {
  const { language } = useAppContext()
  const router = useRouter()
  return (
    <nav className="flex flex-[1.5] md:flex-auto justify-end">
      <ul className="text-orange-500 font-bold uppercase flex flex-row flex-wrap items-center">
        {navigationItems.map((item, index) => {
          if (item.primary) {
            if (index + 1 !== navigationItems.length) {
              if (item.path.charAt(0) === '/') {
                return (
                  <li className={itemClasses} key={item.path}>
                    <Link href={item.path}><a className={`${router.pathname === item.path ? 'underline' : ''} ${item.styles} ${anchorClasses}`}>{item.text[language]}</a></Link>
                  </li>
                )
              }
              return (
                <li className={itemClasses} key={item.path}>
                  <a className={`p-2 ${item.styles} ${anchorClasses}`} href={item.path} target="_blank" rel="noreferrer">{item.text[language]}</a>
                </li>
              )
            }
            if (item.path.charAt(0) === '/') {
              return (
                <>
                  <li className={toggleClasses} key="language-toggle">
                    <LanguageToggle classes={anchorClasses} />
                  </li>
                  <li className={itemClasses} key={item.path}>
                    <Link href={item.path}>
                      <a className={`${router.pathname === item.path ? 'underline' : ''} ${item.styles} ${anchorClasses}`}>{item.text[language]}</a>
                    </Link>
                  </li>
                </>
              )
            }
            return (
              <>
                <li className={toggleClasses} key="language-toggle">
                  <LanguageToggle classes={anchorClasses} />
                </li>
                <li className={itemClasses} key={item.path}>
                  <a className={`${item.styles} ${anchorClasses}`} href={item.path} target="_blank" rel="noreferrer">{item.text[language]}</a>
                </li>
              </>
            )
          }
          return false
        })}
        <li className={toggleClasses}>
          <button type="button" className={`${styles.burger} ${showDrawer ? styles.open : ''}`} onClick={() => setShowDrawer(!showDrawer)}>
            <div />
            <div />
            <div />
          </button>
        </li>
      </ul>
    </nav>
  )
}

Navigation.propTypes = {
  showDrawer: PropTypes.bool.isRequired,
  setShowDrawer: PropTypes.func.isRequired,
}
