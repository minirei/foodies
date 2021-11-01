import React, { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useTransform } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"

// Hooks
import useMousePosition from "../../hooks/useMousePosition"

// Styles
import { Container, Flex } from "../../styles/globalStyles"
import { HomeGallerySection, GalleryCategory } from "../../styles/galleryStyles"

const HomeGallery = () => {
  // Floating requirements
  let floatingRef = useRef()
  const [hovered1, setHovered1] = useState(false)
  const [hovered2, setHovered2] = useState(false)
  const [hovered3, setHovered3] = useState(false)
  const [hovered4, setHovered4] = useState(false)
  const { x, y } = useMousePosition(hovered1)

  // Distance from top of viewport
  const [topPositionState, setTopPositionState] = useState({ top: null })
  useEffect(() => {
    setTopPositionState({
      top: floatingRef.current.getBoundingClientRect().top,
    })
  }, [])

  // Animation
  const controls1 = useAnimation()
  const controls2 = useAnimation()
  const controls3 = useAnimation()
  const controls4 = useAnimation()

  const textAnimation = {
    initial: {
      color: `rgb(29, 29, 29)`,
      opacity: 1,
      zIndex: 2,
    },
    triggered: {
      color: `rgb(235, 235, 235)`,
      zIndex: 2,
      opacity: 1,
    },
    fade: {
      opacity: 0.2,
      zIndex: 0,
    },
  }

  const bgAnimation = {
    initial: {
      opacity: 0,
    },
    triggered: {
      opacity: 1,
      y: (y - topPositionState.top) / 4,
      transition: {
        ease: "linear",
        duration: 0.2,
      },
    },
  }

  useEffect(() => {
    if (hovered1) {
      controls1.start("triggered")
    } else if (hovered2 || hovered3 || hovered4) {
      controls1.start("fade")
    } else {
      controls1.start("initial")
    }
  }, [controls1, hovered1, y])

  useEffect(() => {
    if (hovered2) {
      controls2.start("triggered")
    } else if (hovered1 || hovered3 || hovered4) {
      controls2.start("fade")
    } else {
      controls2.start("initial")
    }
  }, [controls2, hovered2, y])

  useEffect(() => {
    if (hovered3) {
      controls3.start("triggered")
    } else if (hovered1 || hovered2 || hovered4) {
      controls3.start("fade")
    } else {
      controls3.start("initial")
    }
  }, [controls3, hovered3, y])

  useEffect(() => {
    if (hovered4) {
      controls4.start("triggered")
    } else if (hovered1 || hovered2 || hovered3) {
      controls4.start("fade")
    } else {
      controls4.start("initial")
    }
  }, [controls4, hovered4, y])

  return (
    <HomeGallerySection ref={floatingRef}>
      <div className="chapter">
        <h3>002 - Cultural Diversity</h3>
      </div>
      <Container overflowVisible>
        <Flex vertical>
          <GalleryCategory className="china">
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
                animate={controls1}
                initial="initial"
              >
                China: Forbidden City
              </motion.h1>
            </motion.div>
            <motion.div
              className="floatingBackground"
              variants={bgAnimation}
              animate={controls1}
              initial="initial"
            >
              <StaticImage
                src="../../assets/images/forbidden-city.png"
                alt="forbidden city"
              />
            </motion.div>
            <motion.div
              className="floatingFoodie"
              variants={bgAnimation}
              animate={controls1}
              initial="initial"
            >
              <StaticImage src="../../assets/images/foodie-about.png" />
            </motion.div>
          </GalleryCategory>

          <GalleryCategory className="italy">
            <motion.div
              className="content"
              onHoverStart={() => {
                setHovered2(true)
              }}
              onHoverEnd={() => {
                setHovered2(false)
              }}
            >
              <motion.h1
                variants={textAnimation}
                animate={controls2}
                initial="initial"
              >
                Italy: The Colosseum
              </motion.h1>
            </motion.div>
            <motion.div
              className="floatingBackground"
              variants={bgAnimation}
              animate={controls2}
              initial="initial"
            >
              <StaticImage
                src="../../assets/images/colosseum.png"
                alt="the colosseum"
              />
            </motion.div>
            <motion.div
              className="floatingFoodie"
              variants={bgAnimation}
              animate={controls2}
              initial="initial"
            >
              <StaticImage src="../../assets/images/foodie-about.png" />
            </motion.div>
          </GalleryCategory>

          <GalleryCategory className="japan">
            <motion.div
              className="content"
              onHoverStart={() => {
                setHovered3(true)
              }}
              onHoverEnd={() => {
                setHovered3(false)
              }}
            >
              <motion.h1
                variants={textAnimation}
                animate={controls3}
                initial="initial"
              >
                Japan: Kinkaku-Ji
              </motion.h1>
            </motion.div>
            <motion.div
              className="floatingBackground"
              variants={bgAnimation}
              animate={controls3}
              initial="initial"
            >
              <StaticImage
                src="../../assets/images/kinkaku-ji.png"
                alt="kinkaku ji"
              />
            </motion.div>
            <motion.div
              className="floatingFoodie"
              variants={bgAnimation}
              animate={controls3}
              initial="initial"
            >
              <StaticImage src="../../assets/images/foodie-about.png" />
            </motion.div>
          </GalleryCategory>

          <GalleryCategory className="usa">
            <motion.div
              className="content"
              onHoverStart={() => {
                setHovered4(true)
              }}
              onHoverEnd={() => {
                setHovered4(false)
              }}
            >
              <motion.h1
                variants={textAnimation}
                animate={controls4}
                initial="initial"
              >
                USA: Statue of Liberty
              </motion.h1>
            </motion.div>
            <motion.div
              className="floatingBackground"
              variants={bgAnimation}
              animate={controls4}
              initial="initial"
            >
              <StaticImage
                src="../../assets/images/statue-of-liberty.png"
                alt="statue of liberty"
              />
            </motion.div>
            <motion.div
              className="floatingFoodie"
              variants={bgAnimation}
              animate={controls4}
              initial="initial"
            >
              <StaticImage src="../../assets/images/foodie-about.png" />
            </motion.div>
          </GalleryCategory>
        </Flex>
      </Container>
    </HomeGallerySection>
  )
}

export default HomeGallery
