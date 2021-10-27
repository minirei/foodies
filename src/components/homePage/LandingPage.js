import React from "react"
import { StaticImage } from "gatsby-plugin-image"

// Styles
import { LandingImage } from "../../styles/homeStyles"

const LandingPage = () => {
  return (
    <>
      <LandingImage>
        <StaticImage
          className="hero"
          src="../../assets/images/foodie-town.webp"
          alt="foodie-town"
          objectFit="cover"
        //   style={{ bottom: "10vh" }}
        />
      </LandingImage>
    </>
  )
}

export default LandingPage
