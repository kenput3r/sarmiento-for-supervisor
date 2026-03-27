import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import aboutVicenteSarmiento from '../images/about-vicente-sarmiento.jpg';
import { aboutVicenteText } from '../components/text';
import { useAppContext } from '../components/context'

export default function AboutVicente() {
  const { language } = useAppContext()
  const text = {
    h2: {
      english: 'Meet Vicente Sarmiento',
      spanish: 'Conozca a Vicente Sarmiento',
    },
    h3: {
      english: 'Father. Husband. Mayor.',
      spanish: 'Padre. Esposo. Alcalde.',
    },
  }

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
      <div className="grid grid-cols-1 grid-container place-items-center place-content-center w-full">
        <Image src={aboutVicenteSarmiento} alt="Vicente and the Sarmiento family." layout="intrinsic" placeholder="blur" />
        <div className="z-[1] text-white text-center p-1.5 phones:bg-orange-500">
          <h2 className="text-4xl">{text.h2[language]}</h2>
          <h3 className="text-lg uppercase">{text.h3[language]}</h3>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-3 p-1.5">
        {aboutVicenteText[language].map((p) => (
          <p className="py-4" key={p.slice(5) + p.slice(-5)}>{p}</p>
        ))}
      </div>
    </Layout>
  )
}
