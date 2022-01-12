import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'

export default function PressRelease() {
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
      <div className="max-w-screen-md mx-auto mt-4">
        <h1 className="text-center font-bold text-xl">SANTA ANA MAYOR VICENTE SARMIENTO ANNOUNCES CANDIDACY FOR ORANGE COUNTY SUPERVISOR</h1>
        <p className="mt-2 font-bold italic text-center">
          Mayor Announces Intention To Run For Newly Created Open District 2 Supervisorial Seat
          That Is Over 62% Latino, Has A 25.6% Democratic Registration Advantage, &
          Of Which His City Of Santa Ana Makes Up Over 50% Of The District’s Population
        </p>

        <p className="mt-4">SANTA ANA, CA – Santa Ana Mayor Vicente Sarmiento formally announced today he will be a candidate this June for the newly created open District 2 seat on the Orange County Board of Supervisors.  The new Central Orange County district is over 62% Latino, has a strong Democratic voter registration advantage of 25.6%, and contains the entire city of Santa Ana -- which as the only city entirely contained in the 2nd Supervisorial District, makes up over 50% of its population.</p>

        <p className="mt-4">“Our Central Orange County community needs an advocate and a champion,” said Mayor Vicente Sarmiento.  “It’s time.”</p>

        <p className="mt-4">“I have worked hard in Santa Ana to help address our homelessness crisis, improve the delivery of health care – including the containment of COVID-19, increase the amount of much-needed park and open space, respond to the growing needs of working families in our community, and work to increase transparency in government.  I expect to now expand my efforts on these issues to the County level, where I know we will make a difference.”</p>

        <p className="mt-4">Sarmiento has over 14 years of experience on the Santa Ana City Council.  He was first appointed in January 2007 and was subsequently re-elected in 2008, 2012, and 2016.  In 2020 he was elected as only the second Latino Mayor in Santa Ana’s 152-year history. </p>

        <p className="mt-4">If successfully elected as Supervisor, Sarmiento would be only the 3rd Latino Supervisor in County History – and the first Santa Ana official to serve on the Orange County Board of Supervisors in 74 years.  The last was former Santa Ana Mayor Fred C. Rowland (1941–1948) who resigned as Mayor on January 6, 1941 after being elected to the County Board of Supervisors in the November 1940 elections.</p>

        <p className="mt-4">Mayor Sarmiento currently serves as a Member of the Orange County Transportation Authority (OCTA) Board of Directors and served as President and a Member of the Orange County Water District Board of Directors for 6 years.</p>

        <p className="mt-4">Raised in Santa Ana and Central Orange County, Sarmiento attended local public schools, graduated from the University of California, Berkeley with a Bachelor of Arts in Economics, and earned his Law Degree from the University of California, Los Angeles.  He proudly returned home to Santa Ana with his wife Eva to raise their family, head up his own Santa Ana-based Financial Law practice, and enter public service to assist his hometown of Santa Ana become the thriving and vibrant city it is today.</p>
      </div>
    </Layout>
  )
}
