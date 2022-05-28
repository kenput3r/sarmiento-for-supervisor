import React from 'react'
import { useRouter } from 'next/router'
import { useAppContext } from './context'

export default function LanguageToggle(classes) {
  const { language, setLanguage } = useAppContext()
  const router = useRouter()

  let toggleTo = ''
  let buttonText = ''
  if (language === 'english') {
    toggleTo = 'spanish'
    buttonText = 'español'
  } else {
    toggleTo = 'english'
    buttonText = 'english'
  }

  const handleToggle = () => {
    router.replace(router.pathname)
    setLanguage(toggleTo)
  }

  return <button type="button" className={`font-bold text-orange-500 uppercase ${classes}`} onClick={handleToggle}>{buttonText}</button>
}
