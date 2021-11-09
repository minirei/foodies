import React from "react"
import { useViewportScroll, useTransform } from "framer-motion"
import { getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { BgImage } from "gbimage-bridge"

// Styles
import { BackgroundSection } from "../../styles/homeStyles"

// Context
import { useGlobalStateContext } from "../../context/globalContext"

const LandingPage = () => {
  const { isMobile } = useGlobalStateContext()
  const { scrollY } = useViewportScroll()
  const o1 = useTransform(scrollY, [400, 750], [1, 0])

  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "hero.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              width: 2000
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )

  const image = getImage(placeholderImage)

  return (
    <>
      <BackgroundSection
        style={{ opacity: o1 }}
        transition={{ duration: 2, ease: "easeIn" }}
        initial={{ scale: 1.1 }}
        animate={{
          scale: 1,
          transition: {
            duration: 1,
            ease: [0.6, 0.05, -0.01, 0.9],
          },
        }}
      >
        <BgImage
          image={image}
          className="wrapper"
          style={{
            backgroundAttachment: isMobile ? "" : "fixed",
            height: isMobile ? "70vh" : "100vh",
          }}
          loading="eager"
        ></BgImage>
      </BackgroundSection>
    </>
  )
}

export default LandingPage
