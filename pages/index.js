import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import { useAppContext } from '../components/context'
import Hero from '../components/Hero/Hero'
import Banner from '../components/Banner/Banner'
import Priorities from '../components/Priorities/Priorities'
import Updates from '../components/Updates/Updates'
import Video from '../components/Video/Video'

const videoUrl = {
  english: 'https://www.youtube.com/embed/_2b6mf-6IkA?rel=0',
  spanish: 'https://www.youtube.com/embed/qBIzsSUZB94?rel=0',
}

export default function Home() {
  const { language } = useAppContext()

  return (

    <Layout home>
      <Head>
        <title>Sarmiento For OC Supervisor</title>
        <meta name="description" content="Vicente Sarmiento is running for Orange County Supervisor" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Hero />

      <Priorities />

      <Updates />

      <Video url={videoUrl[language]} classes="py-6 phones:py-0" />

      <Banner />

    </Layout>

  )
}
