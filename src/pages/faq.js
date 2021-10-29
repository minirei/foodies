import React, { useState, useEffect } from "react"

// Components
import Layout from "../components/Layout"

const FAQPage = () => {
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

  return <>{loading ? <div></div> : <Layout>FAQPage</Layout>}</>
}

export default FAQPage
