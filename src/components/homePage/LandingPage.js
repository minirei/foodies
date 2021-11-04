import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion"
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
  const o1 = useTransform(scrollY, [300, 700], [1, 0])

  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "hero.jpeg" }) {
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
        initial={{ scale: 1.2 }}
        animate={{
          scale: 1,
          transition: {
            duration: 1.4,
            ease: [0.6, 0.05, -0.01, 0.9],
          },
        }}
      >
        <BgImage
          image={image}
          className="wrapper"
          style={
            {
              backgroundAttachment: isMobile ? "" : "fixed",
              height: isMobile ? "65vh" : "100vh",
            }
          }
        ></BgImage>
      </BackgroundSection>
      {/* <LandingImage
        style={{ opacity: o1 }}
        transition={{ duration: 2, ease: "easeIn" }}
        initial={{ scale: 1.2 }}
        animate={{
          scale: 1,
          transition: {
            duration: 1.4,
            ease: [0.6, 0.05, -0.01, 0.9],
          },
        }}
      ></LandingImage> */}
    </>
  )
}

export default LandingPage
