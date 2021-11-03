import React, { createContext, useContext } from "react"
import PropTypes from "prop-types"

// Hooks
import useWindowSize from "../hooks/useWindowSize"

// Define the context
const GlobalStateContext = createContext()

export const GlobalProvider = ({ children }) => {
  // Usage of the hook should probably be conditional but wtv for now
  const size = useWindowSize()
  const state = {
    isMobile: size.width < 1024 ? true : false,
  }

  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  )
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

// Custom hooks to use dispatch & state
/**
 * Accesses global context
 * @returns isMobile
 */
export const useGlobalStateContext = () => useContext(GlobalStateContext)
