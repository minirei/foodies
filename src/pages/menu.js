import React, { useState, useEffect } from "react"

// Components
import Metadata from "../components/Metadata"
import SiteNav from "../components/SiteNav"

// Styles
import { GlobalStyle } from "../styles/globalStyles"

const MenuPage = () => {
  // loading
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading")
  }, [loading])

  useEffect(() => {
    setLoading(false)
  })

  return (
    <>
      {loading ? (
        <div></div>
      ) : (
        <>
          <Metadata />
          <GlobalStyle />
          <SiteNav />
        </>
      )}
    </>
  )
}

export default MenuPage
