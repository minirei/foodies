import React, { useState, useEffect } from "react"

// Components
import Layout from "../components/Layout"
import { SubPageContainer, SubPageSection } from "../styles/subPageStyles"
import { Container } from "../styles/globalStyles"

const GuidePage = () => {
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

  return <>{loading ? <div></div> : <Layout>
  </Layout>}</>
}

export default GuidePage
