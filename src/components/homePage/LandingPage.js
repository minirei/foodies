import React from "react"
import { useViewportScroll, useTransform } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"

// Styles
import { BackgroundSection } from "../../styles/homeStyles"

// Context
import { useGlobalStateContext } from "../../context/globalContext"

const LandingPage = () => {
  const { isMobile } = useGlobalStateContext()
  // const { scrollY } = useViewportScroll()
  // const o1 = useTransform(scrollY, [400, 750], [1, 0])

  return (
    <>
      <BackgroundSection
        // style={{ opacity: o1 }}
      >
        <StaticImage
          src="../../assets/images/hero.png"
          className="wrapper"
          style={{
            backgroundAttachment: isMobile ? "" : "fixed",
            height: isMobile ? "70vh" : "100vh",
          }}
          loading="eager"
        ></StaticImage>
      </BackgroundSection>
    </>
  )
}

export default LandingPage
