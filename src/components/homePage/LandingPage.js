import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion, useViewportScroll, useTransform } from "framer-motion"

// Styles
import { LandingImage } from "../../styles/homeStyles"

const LandingPage = () => {
  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, 500])
  const o1 = useTransform(scrollY, [0, 600], [1, 0])

  return (
    <>
      <LandingImage
        style={{ y: y1, opacity: o1 }}
        transition={{ duration: 2, ease: "easeIn" }}
      >
        <StaticImage
          className="hero"
          src="../../assets/images/foodie-town.webp"
          alt="foodie-town"
          objectFit="cover"
        />
      </LandingImage>
    </>
  )
}

export default LandingPage
