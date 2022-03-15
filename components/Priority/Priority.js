import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Image from 'next/image'
import { useAppContext } from '../context'
import quote from '../../images/quote.png'

export default function Priority({ priorityName, text, images }) {
  const { language } = useAppContext()
  return (
    <>
      <Head>
        <title>{`${priorityName} | Sarmiento for OC Supervisor`}</title>
        <meta name="description" content="Vicente Sarmiento is running for Orange County Supervisor" />
        <meta
          property="og:image"
          content="/sarmiento-headshot-watermarked.jpg"
        />
        <meta name="og:title" content="Sarmiento For Orange County Supervisor" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="mt-10 pt-6 under-md:pt-0 sm:mt-4 under-md:mt-0 max-w-lg mx-auto">
        <h1 className="text-center">
          <Image src={images.heading[language]} alt={text.title[language]} />
        </h1>

        <section className="bg-orange-500 text-white p-6">
          <p className="text-center mb-3">
            <Image src={quote} alt='"' width={75} height={59} />
          </p>
          <p>{text.paragraph[language]}</p>
        </section>
      </div>
    </>
  )
}

Priority.propTypes = {
  priorityName: PropTypes.string.isRequired,
  text: {
    title: {
      english: PropTypes.string.isRequired,
      spanish: PropTypes.string.isRequired,
    }.isRequired,
    paragraph: {
      english: PropTypes.string.isRequired,
      spanish: PropTypes.string.isRequired,
    }.isRequired,
  }.isRequired,
  images: {
    heading: {
      english: PropTypes.any.isRequired,
      spanish: PropTypes.any.isRequired,
    }.isRequired,
  }.isRequired,
}
