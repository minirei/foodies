import React from "react"

// Components
import Layout from "../components/Layout"
import LandingPage from "../components/homePage/LandingPage"
import HomeAbout from "../components/homePage/HomeAbout"
import HomeLaunch from "../components/homePage/HomeLaunch"
import HomeReveal from "../components/homePage/HomeReveal"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <LandingPage />
        <HomeAbout />
        <HomeLaunch />
        <HomeReveal />
      </Layout>
    </>
  )
}

export default IndexPage
