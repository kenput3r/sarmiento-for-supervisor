import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import thumbsUp from '../images/thumbs-up.svg';

const lists = [
  {
    title: 'CALIFORNIA STATE ELECTED OFFICIALS',
    list: [
      'Gavin Newsom – Governor State of California',
      'Alex Padilla – United States Senator',
      'Ricardo Lara – California Insurance Commissioner',
      'Tom Umberg – California State Senator',
    ],
  },
  {
    title: 'COUNTY ELECTED OFFICIALS',
    list: [
      'Katrina Foley – Orange County Supervisor',
    ],
  },
  {
    title: 'POLITICAL PARTY’S & CLUBS',
    list: [
      'Democratic Party of Orange County (DPOC)',
      'Ada Briceno – Democratic Party of Orange County Chair',
      'Lavender Democrats Orange County',
      'Working Families Party',
      'Feel the Bern Orange County',
    ],
  },
  {
    title: 'UNION ORGANIZATIONS',
    list: [
      'Orange County Labor Federation (OCLF)',
      'United Food & Commercial Workers (UFCW) Local 324',
      'Unite Here Local 11',
      'Service Employees International Union – United Healthcare Workers West (SEIU-UHW)',
      'National Union of Health Workers - (NUHW)',
      'Teamsters Local 952',
      'American Federation of State, County, and Municipal Employees (AFSCME)',
      'American Federation of State, County, and Municipal Employees (AFSCME) Local 2076',
      'United Domestic Workers (UDW)',
      'Service Employees International Union (SEIU 721)',
      'Association of Orange County Deputy District Attorneys (AOCDDA)',
      'Southwest Carpenters Union',
    ],
  },
  {
    title: 'SANTA ANA ELECTED OFFICIALS',
    list: [
      'Johnathan Ryan Hernandez - Santa Ana City Councilmember',
      'Jessie Lopez - Santa Ana City Councilmember',
      'Carolyn Torres - Santa Ana Unified School District Trustee',
      'Dr. Rigoberto Rodriguez - Santa Ana Unified School District Trustee',
      'Dr. Alfonso Alvarez – Santa Ana Unified School District Trustee',
      'Sal Tinajero - Rancho Santiago Community College District Trustee',
      'David Crockett - Rancho Santiago Community College District Trustee',
      'Zeke Hernandez - Rancho Santiago Community College District Trustee',
    ],
  },
  {
    title: 'ANAHEIM ELECTED OFFICIALS',
    list: [
      'Dr. Jose F. Moreno - Anaheim City Councilmember',
      'Al Jabbar - Anaheim Union High School District President',
      'Dr. Jose Paolo Magcalas - Anaheim Elementary School District Trustee',
      'Ryan A. Ruelas - Anaheim Elementary School District Trustee',
      'Juan Gabriel Alvarez - Anaheim Elementary School District President',
      'Jackie Filbeck - Anaheim Elementary School District Trustee',
    ],
  },
  {
    title: 'TUSTIN ELECTED OFFICIALS',
    list: [
      'Rebecca “Beckie” Gomez - Tustin Councilmember',
      'Letitia Clark - Tustin City Councilmember',
      'Allyson Damikolas - Tustin Unified School District Trustee',
    ],
  },
  {
    title: 'GARDEN GROVE ELECTED OFFICIALS',
    list: [
      'Walter Muneton - Garden Grove Unified School District Trustee',
    ],
  },
  {
    title: 'FULLERTON ELECTED OFFICIALS',
    list: [
      'Ahmad Zahra – Fullerton City Councilmember',
    ],
  },
  {
    title: 'OTHER REGIONAL ELECTED OFFICIALS',
    list: [
      'Evangelina Rosales – North Orange County Community College District Trustee',
      'Gina Clayton Tarvin - Ocean View School District President',
      'Patricia Lock Dawson - Riverside Mayor',
    ],
  },
  {
    title: 'LOCAL ORGANIZATIONS',
    list: [
      'Veterans Alliance of Orange County (VALOR)',
      'Planned Parenthood Community Action Fund of Orange and San Bernardino Counties',
      'Cooperative Campaigns',
      'CHISPA',
      'Vecindario Lacy en Accion',
      'Orange County Civic Engagement Table Action',
    ],
  },
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
        <h1 className="text-center font-bold mb-4 text-3xl">Endorsements</h1>

        {lists.map(({ title, list }) => (
          <React.Fragment key={title}>
            <h2 className="font-medium text-lg underline uppercase mb-1">{title}</h2>
            <ul className="pl-0.5 mb-4">
              {list.map((item) => (
                <li key={item} className="flex flex-row items-center mb-1.5 list-none">
                  <div className="flex min-w-[16px]">
                    <Image src={thumbsUp} alt="thumbs up" height={16} width={16} priority />
                  </div>
                  <div className="pl-1.5">
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </div>
    </Layout>
  )
}
