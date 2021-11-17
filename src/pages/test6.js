import React, { useState, useEffect } from "react"

// Components
import Layout from "../components/Layout"
import HomeCarousel from "../components/homePage/HomeCarousel"

const Test6Page = () => {
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
        <Layout>
          <HomeCarousel />
        </Layout>
      )}
    </>
  )
}

export default Test6Page
