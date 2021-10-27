import React from "react"

// Components
import Layout from "../components/Layout"
import LandingPage from "../components/homePage/LandingPage"
import HomeAbout from "../components/homePage/HomeAbout"
import HomeLaunch from "../components/homePage/HomeLaunch"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <LandingPage />
        <HomeAbout />
        <HomeLaunch />
      </Layout>
    </>
  )
}

export default IndexPage
