import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../images/for-supervisor-primary_blue.png'

function PressRelease() {
  const [showFullText, setShowFullText] = useState(false)

  return (
    <div className="w-[1024px] max-w-full mx-auto px-4 pb-8 my-8 border-b phones:px-1">
      <div className="text-center mb-8 max-w-full w-[480px] mx-auto">
        <Image src={logo} alt="Vicente Sarmiento" />
      </div>

      <div className="mb-8">
        <p>
          <span className="font-bold">FOR IMMEDIATE RELEASE:</span>
          {' '}
          November 29,
          2022
        </p>

        <p>
          <span className="font-bold">CONTACT:</span>
          {' '}
          Carlos Valenzuela,
          {' '}
          <a
            href="mailto:carlos@sarmientoforsupervisor.com"
            className="text-blue-500 font-bold"
          >
            carlos@sarmientoforsupervisor.com
          </a>
        </p>
      </div>

      <p className="text-center font-bold mb-4">
        Santa Ana Mayor Vicente Sarmiento Becomes Only the Third Latino in 133
        Years to be Elected to the Orange County Board of Supervisors
      </p>

      <p className="text-center italic mb-4">
        Sarmiento Also Becomes the First County Supervisor From Santa Ana Since
        1948
      </p>

      <p className="mb-4">
        <span className="font-bold">ORANGE COUNTY, CA - </span>
        With over 98% of the votes counted, and more than a 3,000 vote margin,
        Mayor Vicente Sarmiento declared victory today. After 15 years,
        Sarmiento finally brings Latino representation to the current Board of
        Supervisors’ newly drawn Second District that is almost 67% Latino. The
        district includes Anaheim, Tustin, Orange, Garden Grove, and all of
        Santa Ana.
      </p>

      <p className="mb-4">
        Sarmiento inspired broad support with his community-focused message of
        reducing homelessness, creating safer neighborhoods, and helping working
        families.
        {' '}
        <span className="font-bold">
          “We ran an honest and positive campaign that was responsive to the
          residents of Orange County, not the special interests,” said
          Sarmiento. “I’m deeply humbled by the trust of countless people who
          supported our vision, and will help us write the next chapter in
          Orange County’s story.”
        </span>
      </p>

      <p className="mb-4">
        Mayor Sarmiento’s historic campaign overcame more than half a million
        dollars in negative ads filled with distorted facts funded by special
        interests planning to once again dictate the composition of the Board.
        Fortunately, the people in Orange County’s Second District chose hope
        over fear, facts instead of lies, and principles over money.
      </p>

      <p className="text-center italic font-bold mb-4 tracking-wider">###</p>

      <p className="italic mb-4">
        In January of 2007, Mayor Sarmiento was appointed to the Santa Ana City
        Council to represent Ward 1. He was formally elected as the Ward 1 City
        Councilmember in November 2008, then re-elected in November 2012 and
        November 2016. In November 2020 he was elected Mayor of Santa Ana.
      </p>

      <p className="italic mb-4">
        As Mayor, Vicente Sarmiento oversaw the adoption of landmark public
        policy including a Police Oversight Commission, Rent Stabilization, an
        aggressive Affordable Housing Ordinance, an Immigrant Legal Defense
        Fund, and Premium Pay for Essential Workers. He accomplished all of this
        while creating a $40 million surplus, increasing the city’s fiscal
        reserves, ensuring a Double A credit rating, and making Santa Ana
        recognized as one of the best managed cities in California.
        {' '}
        {!showFullText && (
          <button type="button" onClick={() => setShowFullText(true)} className="text-blue-500 font-bold hover:cursor-pointer hover:underline">Continue Reading &darr;</button>
        )}
      </p>

      {showFullText && (
        <>
          <p className="italic mb-4">
            Mayor Sarmiento currently serves as a Director for the Orange County
            Transportation Authority. He previously served as the President of
            the Orange County Water District Board of Directors, Vice-Chair of
            the Transportation Corridor Agency, and Board Member with the Orange
            County Fire Authority. Mayor Sarmiento is a member of the Santa Ana
            Discovery Cube Board of Directors, and a former member of the Board
            of Directors with the National Association of Latino Elected
            Officials (NALEO).
          </p>
          <p className="italic mb-4">
            Mayor Sarmiento graduated from the University of California,
            Berkeley with a Bachelor of Science Economics and received his Juris
            Doctorate from the University of California, Los Angeles School of
            Law. More recently, he attended the Kennedy School of Government at
            Harvard University and successfully completed the Certificate
            Program for Senior Executives in State and Local Government.
          </p>
          <p className="italic mb-4">
            Mayor Sarmiento and his family have lived in and around Santa Ana,
            and central Orange County since 1965. He attended John Muir
            Elementary, Sierra Elementary, and Willard Intermediate Schools.
            Mayor Sarmiento now lives in a 1929 historic home in the Saddleback
            View neighborhood, three blocks from where he grew up. Presently, he
            and his wife Eva, also an attorney, are the principal owners of a
            law practice in Santa Ana. They have three children whom they hope
            will learn the value of public service and contributing to their
            community.
          </p>
        </>
      )}
    </div>
  )
}

export default PressRelease
