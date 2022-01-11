import React from "react"
import { StaticImage } from "gatsby-plugin-image"

// Styles
import { BackgroundSection } from "../../styles/homeStyles"

// Context
import { useGlobalStateContext } from "../../context/globalContext"

const LandingPage = () => {
  const { isMobile } = useGlobalStateContext()

  return (
    <>
      <BackgroundSection>
        <StaticImage
          src="../../assets/images/hero.png"
          className="wrapper"
          style={{
            backgroundAttachment: isMobile ? "" : "fixed",
            height: isMobile ? "70vh" : "100vh",
          }}
          placeholder="blurred"
          loading="eager"
        ></StaticImage>
      </BackgroundSection>
    </>
  )
}

export default LandingPage
