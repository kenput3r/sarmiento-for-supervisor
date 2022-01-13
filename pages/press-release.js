import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Layout from '../components/layout'
import { PressReleaseEnglish, PressReleaseSpanish } from '../components/pressRelease'
import { useAppContext } from '../components/context'

function LanguageToggle({ language, setLanguage }) {
  let toggleTo = ''
  let buttonText = ''
  if (language === 'english') {
    toggleTo = 'spanish'
    buttonText = 'en español'
  } else {
    toggleTo = 'english'
    buttonText = 'english'
  }

  return <button type="button" className="underline text-blue-500 p-2 uppercase" onClick={() => setLanguage(toggleTo)}>{buttonText}</button>
}
LanguageToggle.propTypes = {
  language: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
}

export default function PressRelease() {
  const { language, setLanguage } = useAppContext()

  return (
    <Layout>
      <Head>
        <title>Press Release - Campaign Announcement | Sarmiento for OC Supervisor</title>
        <meta name="description" content="Vicente Sarmiento is running for Orange County Supervisor" />
        <meta
          property="og:image"
          content="/sarmiento-headshot-watermarked.jpg"
        />
        <meta name="og:title" content="Sarmiento For Orange County Supervisor" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <p className="text-center"><LanguageToggle language={language} setLanguage={setLanguage} /></p>
      {language === 'english' ? (
        <PressReleaseEnglish />
      ) : (
        <PressReleaseSpanish />
      )}

    </Layout>
  )
}
