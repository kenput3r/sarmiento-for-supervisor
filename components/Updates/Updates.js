import React from 'react'
import Link from 'next/link'
import { updatesText } from '../text'
import { useAppContext } from '../context'
import bg1 from '../../images/update-bg-1.svg'
import bg2 from '../../images/update-bg-2.svg'
import bg3 from '../../images/update-bg-3.svg'

const backgrounds = [bg1.src, bg2.src, bg3.src]

export default function Updates() {
  const { language } = useAppContext()
  const { updates } = updatesText
  return (
    <section className="bg-orange-500 py-6">
      <div className="text-white font-bold text-center text-[45px]">{updatesText.title[language]}</div>
      <div className="flex flex-row flex-wrap justify-center">
        {updates.map((update, i) => (
          <div className="p-6 w-[504px] md:h-[606px] max-w-full" key={update.title[language]}>
            <div
              className="px-10 pt-16 pb-36 bg-contain bg-no-repeat h-full under-md:bg-white under-md:rounded-2xl"
              key={update.title[language]}
              style={{ backgroundImage: `url(${backgrounds[i]})` }}
            >
              <div className="text-blue-500 text-[45px] font-bold leading-[54px] mb-3">
                {update.title[language]}
              </div>
              <div className="mb-6">{update.excerpt[language]}</div>
              {update.link && (
                <div className="text-blue-500 font-bold text-2xl">
                  <Link href={update.link}>{updatesText.readMore[language]}</Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
