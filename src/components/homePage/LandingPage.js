import React from "react"
import { StaticImage } from "gatsby-plugin-image"

// Styles
import { LandingImage } from "../../styles/homeStyles"

const LandingPage = () => {
  return (
    <>
      <LandingImage>
        <StaticImage
          src="../../assets/images/town.png"
          alt="foodie-town"
        />
      </LandingImage>
    </>
  )
}

export default LandingPage
