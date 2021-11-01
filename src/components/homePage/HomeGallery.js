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
  console.log(x, y)
  // Animation
  const controls = useAnimation()
  const textAnimation = {
    initial: {
      color: `rgb(29, 29, 29)`,
      transition: {
        duration: 0.6,
      },
    },
    triggered: {
      color: `rgb(235, 235, 235)`,
      transition: {
        duration: 0.6,
      },
    },
  }

  const floatingAnimation = {
    initial: {
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
    triggered: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
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
                setHovered1(true)
              }}
              onHoverEnd={() => {
                setHovered1(false)
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
            <motion.div
              className="floatingBackground"
              variants={floatingAnimation}
              animate={controls}
              initial="initial"
            >
              <StaticImage src="../../assets/images/forbidden-city.png" />
            </motion.div>
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
