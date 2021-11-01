import React, { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"

// Hooks
import useMousePosition from "../../hooks/useMousePosition"

// Styles
import { Container, Flex } from "../../styles/globalStyles"
import { HomeGallerySection, GalleryCategory } from "../../styles/galleryStyles"

const HomeGallery = () => {
  // Floating requirements
  const { x, y } = useMousePosition()
  console.log(x,y)
  // Animation
  const controls = useAnimation()
  const textAnimation = {
    initial: {
      color: `rgb(29, 29, 29)`,
    },
    triggered: {
      color: `rgb(235, 235, 235)`,
    },
    transition: {
      duration: 0.6,
    },
  }

  const [hovered1, setHovered1] = useState(false)

  useEffect(() => {
    if (hovered1) {
      controls.start("triggered")
    } else {
      controls.start("initial")
    }
  }, [controls, hovered1])

  return (
    <HomeGallerySection>
      <div className="chapter">
        <h3>002 - Cultural Diversity</h3>
      </div>
      <Container overflowVisible>
        <Flex vertical>
          <GalleryCategory>
            <motion.div
              className="content"
              onHoverStart={() => {
                setHovered1(!hovered1)
              }}
              onHoverEnd={() => {
                setHovered1(!hovered1)
              }}
            >
              <motion.h1
                variants={textAnimation}
                animate={controls}
                initial="initial"
              >
                China: Forbidden City
              </motion.h1>
            </motion.div>
            <div className="floatingBackground">
              <StaticImage src="../../assets/images/forbidden-city.png" />
            </div>
            <div className="floatingFoodie">
              <StaticImage src="../../assets/images/foodie-about.png" />
            </div>
          </GalleryCategory>
          <GalleryCategory>
            <div className="content">
              <h1>Italy: The Colosseum</h1>
            </div>
            <div className="floatingBackground">
              <StaticImage />
            </div>
          </GalleryCategory>
          <GalleryCategory>
            <div className="content">
              <h1>Japan: Kinkaku-Ji</h1>
            </div>
            <div className="floatingBackground">
              <StaticImage />
            </div>
          </GalleryCategory>
          <GalleryCategory>
            <div className="content">
              <h1>USA: Statue of Liberty</h1>
            </div>
            <div className="floatingBackground">
              <StaticImage />
            </div>
          </GalleryCategory>
        </Flex>
      </Container>
    </HomeGallerySection>
  )
}

export default HomeGallery
