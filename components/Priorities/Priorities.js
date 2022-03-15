import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useAppContext } from '../context'
import reducingHomelessness from '../../images/reducing-homelessness.svg'
import publicHealth from '../../images/public-health.svg'
import openSpace from '../../images/open-space.svg'
import workingFamilies from '../../images/working-families.svg'
import transparentGovernment from '../../images/transparent-government.svg'
import reducingHomelessnessSp from '../../images/reducing-homelessness-sp.svg'
import publicHealthSp from '../../images/public-health-sp.svg'
import openSpaceSp from '../../images/open-space-sp.svg'
import workingFamiliesSp from '../../images/working-families-sp.svg'
import transparentGovernmentSp from '../../images/transparent-government-sp.svg'
import protectingNeighborhoods from '../../images/protecting-neighborhoods.svg'
import protectingNeighborhoodsSp from '../../images/protecting-neighborhoods-sp.svg'
import { prioritiesText } from '../text'

const images = {
  reduceHomelessness: {
    english: reducingHomelessness,
    spanish: reducingHomelessnessSp,
  },
  publicHealth: {
    english: publicHealth,
    spanish: publicHealthSp,
  },
  openSpace: {
    english: openSpace,
    spanish: openSpaceSp,
  },
  workingFamilies: {
    english: workingFamilies,
    spanish: workingFamiliesSp,
  },
  transparentGovernment: {
    english: transparentGovernment,
    spanish: transparentGovernmentSp,
  },
  protectingNeighborhoods: {
    english: protectingNeighborhoods,
    spanish: protectingNeighborhoodsSp,
  },
}

export default function Priorities() {
  const { language } = useAppContext()
  const prioritiesList = Object.keys(images)

  return (
    <section>
      <div className="text-[45px] text-orange-500 font-bold text-center uppercase">{prioritiesText.title[language]}</div>
      <div className="flex flex-row flex-wrap justify-center max-w-screen-lg mx-auto">
        {prioritiesList.map((priority) => (
          <div className="w-4/12 p-6 phones:min-w-full" key={priority}>
            <Image
              src={images[priority][language]}
              alt={prioritiesText[priority][language]}
            />
            <p>{prioritiesText[priority].excerpt[language]}</p>
            {prioritiesText[priority].link && (
              <p className="font-bold text-blue-500 text-2xl">
                <Link href={prioritiesText[priority].link}>
                  {prioritiesText.learnMore[language]}
                </Link>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
