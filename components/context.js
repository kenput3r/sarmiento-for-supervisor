import React, {
  createContext, useContext, useState, useMemo, useEffect,
} from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

const AppContext = createContext({ language: 'english', setLanguage: () => {} })

export function AppWrapper({ children }) {
  const [language, setLanguage] = useState('english')

  const memoizedState = useMemo(() => ({ language, setLanguage }), [language])

  const router = useRouter()

  useEffect(() => {
    if (router.query.language && router.query.language === 'spanish') {
      setLanguage('spanish')
    }
  })

  return (
    <AppContext.Provider value={memoizedState}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
