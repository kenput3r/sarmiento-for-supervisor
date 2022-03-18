import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import thumbsUp from '../images/thumbs-up.svg';

const list = [
  'Democratic Party of Orange County (DPOC)',
  'Orange County Labor Federation (OCLF)',
  'Planned Parenthood Community Action Fund of Orange and San Bernardino Counties',
  'National Union of Health Workers - (NUHW)',
  'Service Employees International Union – United Healthcare Workers West (SEIU-UHW)',
  'United Food &amp; Commercial Workers (UFCW) Local 324',
  'Association of Orange County Deputy District Attorneys (AOCDDA)',
  'Cooperative Campaigns',
  'Alex Padilla - U.S. Senator',
  'Katrina Foley - OC Supervisor',
  'Ricardo Lara – California Insurance Commissioner',
  'Ada Briceno – Democratic Party of Orange County Chair ',
  'Johnathan Ryan Hernandez - Santa Ana City Councilmember',
  'Jessie Lopez - Santa Ana City Councilmember',
  'Carolyn Torres - Santa Ana Unified School District Trustee',
  'Dr. Rigoberto Rodriguez - Santa Ana Unified School District Trustee',
  'Sal Tinajero - Rancho Santiago Community College District Trustee',
  'David Crockett - Rancho Santiago Community College District Trustee',
  'Zeke Hernandez - Rancho Santiago Community College District Trustee',
  'Dr. Jose F. Moreno - Anaheim City Councilmember',
  'Dr. Jose Paolo Magcalas - Anaheim Elementary School District Trustee',
  'Ryan A. Ruelas - Anaheim Elementary School District Trustee',
  'Juan Gabriel Alvarez - Anaheim Elementary School District President',
  'Al Jabbar - Anaheim Union High School District President',
  'Rebecca “Beckie” Gomez - Tustin Councilmember',
  'Letitia Clark - Tustin City Councilmember',
  'Walter Muneton - Garden Grove Unified School District Trustee',
  'Gina Clayton Tarvin - Ocean View School District President',
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
