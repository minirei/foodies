import React, { useState, useEffect } from "react"

// Components
import Layout from "../components/Layout"
import LandingPage from "../components/homePage/LandingPage"
import HomeAbout from "../components/homePage/HomeAbout"
import HomeLaunch from "../components/homePage/HomeLaunch"
import HomeReveal from "../components/homePage/HomeReveal"
import HomeGallery from "../components/homePage/HomeGallery"
import HomeCarousel from "../components/homePage/HomeCarousel"

const Test2Page = () => {
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
          <HomeAbout />
        </Layout>
      )}
    </>
  )
}

export default Test2Page
