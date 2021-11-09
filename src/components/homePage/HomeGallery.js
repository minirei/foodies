import React, { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useTransform } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"

// Hooks
import useMousePosition from "../../hooks/useMousePosition"

// Styles
import { Container, Flex } from "../../styles/globalStyles"
import { HomeGallerySection, GalleryCategory } from "../../styles/galleryStyles"

// Context
import { useGlobalStateContext } from "../../context/globalContext"

const HomeGallery = () => {
  const { isMobile } = useGlobalStateContext()

  // Floating requirements
  let floatingRef = useRef()
  const [hovered1, setHovered1] = useState(false)
  const [hovered2, setHovered2] = useState(false)
  const [hovered3, setHovered3] = useState(false)
  const [hovered4, setHovered4] = useState(false)
  const { x, y } = useMousePosition()

  // Distance from top of viewport
  const [topPositionState, setTopPositionState] = useState({ top: null })
  useEffect(() => {
    if (isMobile) return
    setTopPositionState({
      top: floatingRef.current.getBoundingClientRect().top,
    })
  }, [])

  // Colours
  const bg1 = `rgb(241,202,137)`
  const bg2 = `rgb(254,200,216)`
  const bg3 = `rgb(181,234,234)`
  const bg4 = `rgb(192, 237, 196)`
  const bgDefault = `rgb(255, 248, 237)`

  // Animation
  const colorControls = useAnimation()
  const controls1 = useAnimation()
  const controls2 = useAnimation()
  const controls3 = useAnimation()
  const controls4 = useAnimation()

  const colorAnimation = isMobile
    ? {}
    : {
        initial: {
          backgroundColor: bgDefault,
          transition: {
            duration: 1,
            ease: "easeOut",
          },
        },
        cat1: {
          backgroundColor: bg1,
          transition: {
            duration: 1,
            ease: "easeOut",
          },
        },
        cat2: {
          backgroundColor: bg2,
          transition: {
            duration: 1,
            ease: "easeOut",
          },
        },
        cat3: {
          backgroundColor: bg3,
          transition: {
            duration: 1,
            ease: "easeOut",
          },
        },
        cat4: {
          backgroundColor: bg4,
          transition: {
            duration: 1,
            ease: "easeOut",
          },
        },
      }

  const textAnimation = isMobile
    ? {}
    : {
        initial: {
          color: `rgb(40,10,11)`,
          opacity: 1,
          zIndex: 2,
          transition: {
            delay: 0.2,
            duration: 0.2,
          },
        },
        triggered: {
          color: `rgb(255, 248, 237)`,
          zIndex: 2,
          opacity: 1,
          transition: {
            duration: 0.1,
            ease: [0.6, 0.01, -0.05, 0.9],
          },
        },
        fade: {
          opacity: 0.2,
          zIndex: 0,
          transition: {
            duration: 0.1,
            ease: [0.6, 0.01, -0.05, 0.9],
          },
        },
        exit: {
          color: `rgb(40,10,11)`,
          opacity: 1,
          zIndex: 2,
          transition: {
            duration: 0.2,
          },
        },
      }

  const bgAnimation = isMobile
    ? {}
    : {
        initial: {
          opacity: 0,
          y: 0,
        },
        opacityTrigger: {
          opacity: 1,
        },
        triggered: {
          y: (y - topPositionState.top) / 4,
          transition: {
            ease: "linear",
            duration: 0,
          },
        },
        exit: {
          opacity: 0,
        },
      }

  const bgFoodieAnimation = isMobile
    ? {}
    : {
        initial: {
          opacity: 0,
          y: 0,
        },
        opacityTrigger: {
          opacity: 1,
        },
        triggered: {
          y: (y - topPositionState.top) / 8,
          transition: {
            ease: "linear",
            duration: 0,
          },
        },
        exit: {
          opacity: 0,
        },
      }

  useEffect(() => {
    if (hovered1) {
      controls1.start("triggered")
      controls1.start("opacityTrigger")
      colorControls.start("cat1")
    } else if (hovered2 || hovered3 || hovered4) {
      controls1.start("fade")
    } else {
      controls1.start("exit")
      colorControls.start("initial")
    }
  }, [controls1, hovered1, y])

  useEffect(() => {
    if (hovered2) {
      controls2.start("triggered")
      controls2.start("opacityTrigger")
      colorControls.start("cat2")
    } else if (hovered1 || hovered3 || hovered4) {
      controls2.start("fade")
    } else {
      controls2.start("exit")
      colorControls.start("initial")
    }
  }, [controls2, hovered2, y])

  useEffect(() => {
    if (hovered3) {
      controls3.start("triggered")
      controls3.start("opacityTrigger")
      colorControls.start("cat3")
    } else if (hovered1 || hovered2 || hovered4) {
      controls3.start("fade")
    } else {
      controls3.start("exit")
      colorControls.start("initial")
    }
  }, [controls3, hovered3, y])

  useEffect(() => {
    if (hovered4) {
      controls4.start("triggered")
      controls4.start("opacityTrigger")
      colorControls.start("cat4")
    } else if (hovered1 || hovered2 || hovered3) {
      controls4.start("fade")
    } else {
      controls4.start("exit")
      colorControls.start("initial")
    }
  }, [controls4, hovered4, y])

  return (
    <HomeGallerySection
      ref={floatingRef}
      variants={colorAnimation}
      animate={colorControls}
      initial="initial"
      className={`${isMobile && "mobile"}`}
    >
      <div className="chapter">
        <h1>001 - Cultural Diversity</h1>
      </div>
      <Container overflowVisible>
        <Flex vertical style={{justifyContent: isMobile ? "space-between" : ""}}>
          <GalleryCategory className={`china ${isMobile && "mobile"}`}>
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
            <div className="imageWrapper">
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
                variants={bgFoodieAnimation}
                animate={controls1}
                initial="initial"
              >
                <StaticImage
                  src="../../assets/images/chinese-foodie.png"
                  alt="chinese foodie"
                />
              </motion.div>
            </div>
          </GalleryCategory>

          <GalleryCategory className={`italy ${isMobile && "mobile"}`}>
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
            <div className="imageWrapper">
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
                variants={bgFoodieAnimation}
                animate={controls2}
                initial="initial"
              >
                <StaticImage
                  src="../../assets/images/italian-foodie.png"
                  alt="italian foodie"
                />
              </motion.div>
            </div>
          </GalleryCategory>

          <GalleryCategory className={`japan ${isMobile && "mobile"}`}>
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
            <div className="imageWrapper">
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
                variants={bgFoodieAnimation}
                animate={controls3}
                initial="initial"
              >
                <StaticImage
                  src="../../assets/images/japanese-foodie.png"
                  alt="japanese foodie"
                />
              </motion.div>
            </div>
          </GalleryCategory>

          <GalleryCategory className={`usa ${isMobile && "mobile"}`}>
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
            <div className="imageWrapper">
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
                variants={bgFoodieAnimation}
                animate={controls4}
                initial="initial"
              >
                <StaticImage
                  src="../../assets/images/american-foodie.png"
                  alt="american foodie"
                />
              </motion.div>
            </div>
          </GalleryCategory>
        </Flex>
      </Container>
    </HomeGallerySection>
  )
}

export default HomeGallery
