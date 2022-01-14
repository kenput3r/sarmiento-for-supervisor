/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { MdMenu } from 'react-icons/md'
import LanguageToggle from './languageToggle'
import { useAppContext } from './context'

const navigationItems = [
  {
    text: {
      english: 'Home',
      spanish: 'Inicio',
    },
    path: '/',
  },
  {
    text: {
      english: 'Press Release',
      spanish: 'Comunicado de Prensa',
    },
    path: '/press-release',
  },
  {
    text: {
      english: 'Contact',
      spanish: 'Contacto',
    },
    path: '/contact',
  },
  {
    text: {
      english: 'Donate',
      spanish: 'Donacion',
    },
    path: 'https://www.efundraisingconnections.com/c/VinceSarmiento/',
  },
]

export default function Navigation() {
  const { language } = useAppContext()
  const [showSubNav, setShowSubNav] = useState(false)
  const router = useRouter()
  return (
    <nav className="mt-4 border-y-2 border-blue-500 bg-blue-500">
      <ul className="text-orange-500 font-bold uppercase hidden notPhones:flex flex-row flex-wrap justify-center">
        {navigationItems.map((item) => {
          if (item.path.charAt(0) === '/') {
            return (
              <li className={router.pathname === item.path ? 'p-2 underline' : 'p-2'} key={item.path}>
                <Link href={item.path}>{item.text[language]}</Link>
              </li>
            )
          }
          return (
            <li className="p-2" key={item.path}>
              <a href={item.path} target="_blank" rel="noreferrer">{item.text[language]}</a>
            </li>
          )
        })}
        <li className="p-2">
          <LanguageToggle />
        </li>
      </ul>

      <ul className="phones:flex hidden text-orange-500 font-bold uppercase flex-row flex-wrap justify-start">
        <li className={router.pathname === navigationItems[0].path ? 'p-2 underline' : 'p-2'}>
          <Link href={navigationItems[0].path}>{navigationItems[0].text[language]}</Link>
        </li>

        <li className={router.pathname === navigationItems[3].path ? 'p-2 underline' : 'p-2'}>
          <Link href={navigationItems[3].path}>{navigationItems[3].text[language]}</Link>
        </li>

        <li className="p-2">
          <LanguageToggle />
        </li>

        <li className="p-2 flex flex-auto justify-end items-center">
          <button type="button" onClick={() => setShowSubNav(!showSubNav)}><MdMenu /></button>
        </li>
      </ul>
      {showSubNav && (
      <ul className="phones:flex hidden text-orange-500 font-bold uppercase flex-row flex-wrap justify-start">
        <li className={router.pathname === navigationItems[1].path ? 'p-2 underline' : 'p-2'}>
          <Link href={navigationItems[1].path}>{navigationItems[1].text[language]}</Link>
        </li>

        <li className={router.pathname === navigationItems[2].path ? 'p-2 underline' : 'p-2'}>
          <Link href={navigationItems[2].path}>{navigationItems[2].text[language]}</Link>
        </li>
      </ul>
      )}
    </nav>
  )
}
