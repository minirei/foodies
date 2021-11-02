import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion, useViewportScroll, useTransform } from "framer-motion"

// Styles
import { LandingImage } from "../../styles/homeStyles"

const LandingPage = () => {
  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, 1000])
  const o1 = useTransform(scrollY, [300, 700], [1, 0])

  return (
    <>
      <LandingImage
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
        {/* <StaticImage
          className="hero"
          src="../../../static/images/foodie-draft.jpeg"
          alt="foodie-town"
          objectFit="cover"
          layout="fullWidth"
        /> */}
      </LandingImage>
    </>
  )
}

export default LandingPage
