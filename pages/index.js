import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import { useAppContext } from '../components/context'
import Hero from '../components/Hero/Hero'
import Priorities from '../components/Priorities/Priorities'
import Updates from '../components/Updates/Updates'
import Video from '../components/Video/Video'
import Videos from '../components/Videos/Videos'

const videoUrl = {
  english: 'https://www.youtube.com/embed/FvFVZrcQr6Y',
  spanish: 'https://www.youtube.com/embed/FGYSubz_k_k',
}

const videos = ['https://www.youtube.com/embed/1LdapAhTg0c', 'https://www.youtube.com/embed/6zfDLJzAVGI', 'https://www.youtube.com/embed/Ijjt8jX-J4Q', 'https://www.youtube.com/embed/_2b6mf-6IkA']

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

      <Video url={videoUrl[language]} classes="pt-6 phones:py-0 phones:mt-4 phones:mx-4" />

      <Videos videos={videos} />

    </Layout>

  )
}
