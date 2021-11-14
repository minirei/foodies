import React, { useState, useEffect } from "react"

// Components
import Layout from "../components/Layout"
import LandingPage from "../components/homePage/LandingPage"
import HomeAbout from "../components/homePage/HomeAbout"
import HomeLaunch from "../components/homePage/HomeLaunch"
import HomeReveal from "../components/homePage/HomeReveal"
import HomeGallery from "../components/homePage/HomeGallery"
import HomeCarousel from "../components/homePage/HomeCarousel"

const IndexPage = () => {
  // loading
  const [loading, setLoading] = useState(true)
  const isIndex = true

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
        <>
          <div>Loading...</div>
          <div>
            If it takes too long your hardware or network has an issue! Please
            checkout our /about, /faq, and /guide instead!
          </div>
        </>
      ) : (
        <Layout isIndex={isIndex}>
          <LandingPage />
          <HomeAbout />
          <HomeLaunch />
          <HomeGallery />
          <HomeReveal />
          <HomeCarousel />
        </Layout>
      )}
    </>
  )
}

export default IndexPage
