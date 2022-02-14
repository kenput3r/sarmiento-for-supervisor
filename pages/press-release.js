import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import { useAppContext } from '../components/context'
import { pressReleaseText as text } from '../components/text'

export default function PressRelease() {
  const { language } = useAppContext()

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

      <div className="max-w-screen-md mx-auto mt-4 pt-6">
        <h1 className="text-center font-bold text-xl">{text.h1[language]}</h1>
        <p className="mt-2 font-bold italic text-center">{text.h2[language]}</p>

        {text.paragraphs.map((paragraph) => (
          <p
            className="mt-4"
            key={paragraph[language].substring(0, 4)
            + paragraph[language].substring(paragraph[language].length - 4, paragraph.length)}
          >
            {paragraph[language]}
          </p>
        ))}

      </div>
    </Layout>
  )
}
