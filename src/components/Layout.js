import React, { useState } from "react"
import PropTypes from "prop-types"

// Components
import Metadata from "./Metadata"
import Header from "./Header"
import SiteNav from "./SiteNav"
import Footer from "./Footer"

// Styles
import { GlobalStyle } from "../styles/globalStyles"

const Layout = ({ children, isIndex=false }) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [accordian, setAccordian] = useState(false)

  return (
    <>
      <Metadata />
      <GlobalStyle />
      <SiteNav
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        accordian={accordian}
        setAccordian={setAccordian}
      />
      <Header
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        accordian={accordian}
        setAccordian={setAccordian}
      />
      <main>{children}</main>
      <Footer isIndex={isIndex}/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isIndex: PropTypes.bool.isRequired,
}

export default Layout
