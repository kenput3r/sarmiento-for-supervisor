import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import thumbsUp from '../images/thumbs-up.svg';

const list = [
  'UFCW Local 324',
  'Santa Ana City Councilmember Johnathan Ryan Hernandez',
  'Santa Ana City Councilmember Jessie Lopez',
  'Santa Ana Unified School District Trustee Carolyn Torres',
  'Rancho Santiago Community College District Trustee Sal Tinajero',
  'Rancho Santiago Community College District Trustee David Crockett',
  'Tustin City Councilmember Letitia Clark',
  'Anaheim City Councilmember Dr. Jose F. Moreno',
  'Anaheim City Councilmember Avelino Valencia',
  'Anaheim Union High School District President Al Jabbar',
  'Anaheim Elementary School District Trustee Paolo Magcalas',
  'Anaheim Elementary School District Trustee Ryan Ruelas ',
  'Anaheim Elementary School District President Juan Alvarez',
  'Garden Grove Unified School District Trustee Walter Muneton',
  'Ocean View School District President Gina Clayton Tarvin',
  'Cooperative Campaigns OC',
]

export default function Endorsements() {
  return (
    <Layout>
      <Head>
        <title>Endorsements | Sarmiento for OC Supervisor</title>
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
        <h1 className="text-center font-bold mb-3 text-xl">Endorsements</h1>
        {list.map((item) => (
          <li className="flex flex-row items-center mb-1.5 list-none">
            <div className="flex">
              <Image src={thumbsUp} alt="thumbs up" height={16} width={16} />
            </div>
            <div className="pl-1.5">
              {item}
            </div>
          </li>
        ))}
      </div>
    </Layout>
  )
}
