import React from 'react'
import Image from 'next/image'
import { useAppContext } from '../context'
import reducingHomelessness from '../../images/reducing-homelessness.svg'
import publicHealth from '../../images/public-health.svg'
import openSpace from '../../images/open-space.svg'
import workingFamilies from '../../images/working-families.svg'
import transparentGovernment from '../../images/transparent-government.svg'
import { prioritiesText } from '../text'

const images = {
  reducingHomelessness: {
    english: reducingHomelessness,
    spanish: reducingHomelessness,
  },
  publicHealth: {
    english: publicHealth,
    spanish: publicHealth,
  },
  openSpace: {
    english: openSpace,
    spanish: openSpace,
  },
  workingFamilies: {
    english: workingFamilies,
    spanish: workingFamilies,
  },
  transparentGovernment: {
    english: transparentGovernment,
    spanish: transparentGovernment,
  },
}

export default function Priorities() {
  const { language } = useAppContext()
  return (
    <section>
      <div className="text-[45px] text-orange-500 font-bold text-center">{prioritiesText.title[language]}</div>
      <div className="flex flex-row flex-wrap justify-center max-w-screen-lg mx-auto">
        <div className="w-4/12 p-6 phones:min-w-full">
          <Image
            src={images.reducingHomelessness[language]}
            alt={prioritiesText.reduceHomelessness[language]}
          />
        </div>
        <div className="w-4/12 p-6 phones:min-w-full">
          <Image src={images.publicHealth[language]} alt={prioritiesText.publicHealth[language]} />
        </div>
        <div className="w-4/12 p-6 phones:min-w-full">
          <Image src={images.openSpace[language]} alt={prioritiesText.openSpace[language]} />
        </div>
        <div className="w-4/12 p-6 phones:min-w-full">
          <Image
            src={images.workingFamilies[language]}
            alt={prioritiesText.workingFamilies[language]}
          />
        </div>
        <div className="w-4/12 p-6 phones:min-w-full">
          <Image
            src={images.transparentGovernment[language]}
            alt={prioritiesText.transparentGovernment[language]}
          />
        </div>
      </div>

      <div>1</div>
      <div>1</div>
    </section>
  )
}
