import React from 'react'
import { useAppContext } from './context'

export default function LanguageToggle(classes) {
  const { language, setLanguage } = useAppContext()
  let toggleTo = ''
  let buttonText = ''
  if (language === 'english') {
    toggleTo = 'spanish'
    buttonText = 'español'
  } else {
    toggleTo = 'english'
    buttonText = 'english'
  }

  return <button type="button" className={`font-bold text-orange-500 uppercase ${classes}`} onClick={() => setLanguage(toggleTo)}>{buttonText}</button>
}
