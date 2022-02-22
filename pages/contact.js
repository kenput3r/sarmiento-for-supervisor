/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import { useAppContext } from '../components/context'
import { contactText as text } from '../components/text'

export default function Contact() {
  const { language } = useAppContext()
  const [addressRequired, setAddressRequired] = useState(false)
  return (
    <Layout>
      <Head>
        <title>Contact | Sarmiento for OC Supervisor</title>
        <meta name="description" content="Vicente Sarmiento is running for Orange County Supervisor" />
        <meta
          property="og:image"
          content="/sarmiento-headshot-watermarked.jpg"
        />
        <meta name="og:title" content="Sarmiento For Orange County Supervisor" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="mt-10 pt-6 sm:mt-4 max-w-lg mx-auto">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="md:col-span-2">
            <div className="px-4 sm:px-0">
              <h1 className="text-xl font-bold leading-6 text-gray-900">{text.h1[language]}</h1>
              <p className="mt-1 text-sm text-gray-600">{text.h2[language]}</p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form
              className="bg-gray-50"
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        {text.firstName[language]}
                        *
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border"
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        {text.lastName[language]}
                        *
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        {text.email[language]}
                        *
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                        {text.phone[language]}
                      </label>
                      <input
                        type="tel"
                        name="phone-number"
                        id="phone-number"
                        autoComplete="tel"
                        className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        {text.street[language]}
                        {addressRequired && '*'}
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        required={!!addressRequired}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        {text.city[language]}
                        {addressRequired && '*'}
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        required={!!addressRequired}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        {text.state[language]}
                        {addressRequired && '*'}
                      </label>
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        required={!!addressRequired}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        {text.zip[language]}
                        {addressRequired && '*'}
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        required={!!addressRequired}
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      {text.message[language]}
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        className="shadow-sm focus:ring-orange-500 focus:border-orange-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        defaultValue=""
                      />
                    </div>
                  </div>

                  <div className="px-4 py-5 space-y-6 sm:p-6">

                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="emails"
                            name="emails"
                            type="checkbox"
                            className="focus:ring-orange-500 h-4 w-4 text-orange-500 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="emails" className="font-medium text-gray-700">
                            {text.subscribe[language]}
                          </label>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="yardsign"
                            name="yardsign"
                            type="checkbox"
                            className="focus:ring-orange-500 h-4 w-4 text-orange-500 border-gray-300 rounded"
                            onChange={() => setAddressRequired(!addressRequired)}
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="yardsign" className="font-medium text-gray-700">
                            {text.yardSign[language]}
                          </label>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="donate"
                            name="donate"
                            type="checkbox"
                            className="focus:ring-orange-500 h-4 w-4 text-orange-500 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="donate" className="font-medium text-gray-700">
                            {text.donation[language]}
                          </label>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    {text.submit[language]}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
