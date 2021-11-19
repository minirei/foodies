import React, { useState, useEffect } from "react"
import loadable from "@loadable/component"

// Components
import Layout from "../components/Layout"
import LandingPage from "../components/homePage/LandingPage"
const HomeAbout = loadable(() => import("../components/homePage/HomeAbout"))
const HomeLaunch = loadable(() => import("../components/homePage/HomeLaunch"))
const HomeGallery = loadable(() => import("../components/homePage/HomeGallery"))
const HomeReveal = loadable(() => import("../components/homePage/HomeReveal"))
const HomeCarousel = loadable(() =>
  import("../components/homePage/HomeCarousel")
)

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
        <div>loading...</div>
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
