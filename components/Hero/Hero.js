import React, { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { useAppContext } from '../context'
import hero from '../../images/hero.jpg'
import orangeGroves from '../../images/orange-groves.svg'
import { heroText, contactText } from '../text'
import validateEmail from '../../helpers/validation'

export default function Hero() {
  const { language } = useAppContext()
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [email, setEmail] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    if (validateEmail(email) && fName.length > 0 && lName.length > 0) {
      const data = {
        email,
        fName,
        lName,
      }
      const res = await axios.post('/api/email-signup', { data })
      if (res.status === 200) {
        setEmail('')
        setFName('')
        setLName('')
      } else {
        // eslint-disable-next-line no-undef
        alert('Something went wrong. Please try again later')
      }
    }
  }
  return (
    <section className="relative">
      <div className="w-full 2xl:h-screen">
        <Image src={hero} alt="Vicente Sarmiento" layout="responsive" />
      </div>
      <div className="xl:-mt-60 lg:-mt-36 md:-mt-28 phones:-mt-16">
        <Image src={orangeGroves} alt="orange groves" layout="responsive" />
      </div>
      <div className="bg-blue-500 p-14 w-full lg:top-10 lg:right-10 xl:top-20 xl:right-20 lg:absolute lg:bg-blue-500/75 lg:w-[500px] xl:w-[598px] lg:rounded-md phones:py-7 phones:px-3.5">
        <div className="text-white text-[45px] font-bold text-center mb-3">
          <span className="inline-block border-y-4 border-orange-500 px-6">{heroText.title[language]}</span>
        </div>
        <div className="text-orange-500 text-[32px] font-bold text-center mb-3 xl:text-[45px]">{heroText.subTitle[language]}</div>
        <form className="mx-auto md:w-[612px] lg:w-full">
          <div className="flex flex-row justify-between mb-2">
            <div className="w-6/12 pr-1">
              <input type="text" id="FirstName" name="FirstName" aria-label={contactText.firstName[language]} placeholder={contactText.firstName[language]} className="w-full rounded-md" onChange={(e) => setFName(e.target.value)} />
            </div>
            <div className="w-6/12 pl-1">
              <input type="text" id="LastName" name="LastName" aria-label={contactText.lastName[language]} placeholder={contactText.lastName[language]} className="w-full rounded-md" onChange={(e) => setLName(e.target.value)} />
            </div>
          </div>

          <div className="mb-2">
            <input type="email" id="Email" name="Email" aria-label={contactText.email[language]} placeholder={contactText.email[language]} className="w-full rounded-md" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <p className="text-white mb-6">{heroText.disclaimer[language]}</p>
          <div className="text-center">
            <button type="button" onClick={(e) => submit(e)} className="text-white bg-orange-500 px-6 py-3 rounded-md">{heroText.submit[language]}</button>
          </div>
        </form>
      </div>
    </section>
  )
}
