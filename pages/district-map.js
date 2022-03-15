import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import map from '../images/district-map.png'

export default function DistrictMap() {
  return (
    <Layout>
      <Head>
        <title>District Map | Sarmiento for OC Supervisor</title>
        <meta name="description" content="Vicente Sarmiento is running for Orange County Supervisor" />
        <meta
          property="og:image"
          content="/sarmiento-headshot-watermarked.jpg"
        />
        <meta name="og:title" content="Sarmiento For Orange County Supervisor" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="mt-10 pt-6 sm:mt-4 max-w-4xl mx-auto">
        <h1>Orange County District 2 Map</h1>
        <Image src={map} alt="Second District, County Of Orange, California" />
      </div>
    </Layout>
  )
}
