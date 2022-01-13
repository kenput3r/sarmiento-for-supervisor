import React, {
  createContext, useContext, useState, useMemo,
} from 'react'
import PropTypes from 'prop-types'

const AppContext = createContext({ language: 'english', setLanguage: () => {} })

export function AppWrapper({ children }) {
  const [language, setLanguage] = useState('english')

  const memoizedState = useMemo(() => ({ language, setLanguage }), [language])

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
