import React from "react"
import PropTypes from "prop-types"

// Components
import Metadata from "./Metadata"
import Header from "./Header"

// Styles
import { GlobalStyle } from "../styles/globalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <Metadata />
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
