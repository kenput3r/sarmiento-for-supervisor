import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import navigationItems from '../Navigation/navigationItems'
import Banner from '../Banner/Banner'
import { useAppContext } from '../context'
import validateEmail from '../../helpers/validation'
import { socialText, footerText } from '../text'
import Facebook from '../../images/facebook.png'
import Instagram from '../../images/instagram.png'
import Twitter from '../../images/twitter.png'
import YouTube from '../../images/icon-youtube_small.png'
import Email from '../../images/email.png'

const icons = {
  Facebook, Instagram, Twitter, YouTube, Email,
}

export default function Footer() {
  const { language } = useAppContext()
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    if (validateEmail(email) && phone.length >= 10) {
      const data = {
        email,
        phone,
      }
      const res = await axios.post('/api/email-signup', { data })
      if (res) {
        setEmail('')
        setPhone('')
      } else {
        setEmail('')
        setPhone('')
      }
    }
  }
  return (
    <footer className="pt-6 under-md:pt-0 under-md:-mt-[1px]">
      <Banner />
      <div className="p-6 under-md:p-3">
        <div className="flex flex-row flex-wrap">
          <div className="flex-1 mb-6 w-6/12 pr-3 under-md:flex-none under-md:w-full under-md:pr-0">
            <form className="w-[375px] mb-6 max-w-full">
              <label className="block" htmlFor="FooterEmailAddress">
                {footerText.email[language]}
                <input className="block w-full" type="email" id="FooterEmailAddress" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
              </label>
              <label className="inline-block w-9/12 pr-6" htmlFor="Phone">
                {footerText.phone[language]}
                <input className="block w-full" type="tel" id="Phone" name="Phone" onChange={(e) => setPhone(e.target.value)} value={phone} />
              </label>
              <div className="inline-block w-3/12">
                <button className="inline-block bg-blue-500 text-white py-2 px-3 border border-solid border-blue-500 w-full" type="button" onClick={(e) => submit(e)}>Join Us</button>
              </div>
            </form>

            <nav>
              <ul className="columns-2 w-[300px]">
                {navigationItems.map((item) => (
                  <li className="text-blue-500" key={item.path}>
                    {item.path.charAt(0) === '/' ? (
                      <Link href={item.path}>{item.text[language]}</Link>
                    ) : (
                      <a href={item.path} target="_blank" rel="noreferrer">{item.text[language]}</a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex-1 mb-6 text-xs w-6/12 pl-3 under-md:flex-none under-md:w-full under-md:pl-0">
            <ul className="flex flex-row justify-end under-md:justify-center">
              {socialText.map((social) => (
                <li className="ml-3" key={social.network}>
                  <a className="block p-3" href={social.url} target="_blank" rel="noreferrer">
                    <img className="h-6" src={icons[social.network].src} alt={social.network} />
                  </a>
                </li>
              ))}
            </ul>

            <p className="text-right mb-6 under-md:text-center">
              <span className="inline-block border p-3">{footerText.disclaimers.paidForBy[language]}</span>
            </p>

            <p className="text-right mb-6 ml-auto w-96 max-w-full under-md:text-center">
              {footerText.disclaimers.supportTheCampaign[language]}
            </p>

            <p className="text-right under-md:text-center">
              &copy; Sarmiento for Supervisor
              {' '}
              {`${new Date().getFullYear()}. All rights reserved.`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
