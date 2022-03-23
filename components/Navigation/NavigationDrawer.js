/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import navigationItems from './navigationItems'
import { useAppContext } from '../context'
import home from '../../images/home.svg'
import updates from '../../images/updates.svg'
import donate from '../../images/donate.svg'
import contact from '../../images/meet.svg'
import endorsement from '../../images/endorsements.svg'
import map from '../../images/map.svg'

const anchorClasses = 'block p-2 flex-1 flex justify-end items-center font-bold text-2xl'
const itemClasses = 'flex flex-row m-4'

const icons = {
  home,
  updates,
  donate,
  contact,
  endorsement,
  map,
}

export default function NavigationDrawer({ classes, showDrawer }) {
  const { language } = useAppContext()
  const router = useRouter()
  return (
    <nav className={`flex flex-col bg-gray-50 text-blue-500 h-screen fixed top-0 right-0 pt-28 z-[9] transition-transform ${classes} ${showDrawer ? 'translate-x-0' : 'translate-x-full'}`}>
      <ul className="">
        {navigationItems.map((item) => {
          if (item.secondary) {
            if (item.path.charAt(0) === '/') {
              return (
                <li className={itemClasses} key={item.path}>
                  <Link href={item.path}>
                    <a className={`${router.pathname === item.path ? 'underline' : ''} ${anchorClasses}`}>
                      <span className="mr-4">{item.text[language]}</span>
                      {' '}
                      <Image src={icons[item.icon]} alt={item.text[language]} className="rounded-full" />
                    </a>
                  </Link>
                </li>
              )
            }
            return (
              <li className={itemClasses} key={item.path}>
                <a className={`p-2 ${anchorClasses}`} href={item.path} target="_blank" rel="noreferrer">
                  <span className="mr-4">{item.text[language]}</span>
                  {' '}
                  <Image src={icons[item.icon]} alt={item.text[language]} className="rounded-full" />
                </a>
              </li>
            )
          }
          return false
        })}
      </ul>
    </nav>
  )
}

NavigationDrawer.propTypes = {
  classes: PropTypes.string,
  showDrawer: PropTypes.bool.isRequired,
}

NavigationDrawer.defaultProps = {
  classes: '',
}
