import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (

    <Layout home>
      <Head>
        <title>Sarmiento For OC Supervisor</title>
        <meta name="description" content="Vicente Sarmiento is running for Orange County Supervisor" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className="max-w-screen-lg mx-auto">
        <div className="relative h-0 mt-4 pb-fluid-video phones:my-8">
          <iframe className="absolute top-0 left-0 w-full h-full" width="560" height="315" src="https://www.youtube.com/embed/_2b6mf-6IkA?rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
      </section>
    </Layout>

  )
}
