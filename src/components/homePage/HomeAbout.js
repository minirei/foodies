import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

// Components
import { Container, Flex } from "../../styles/globalStyles"
import {
  HomeAboutSection,
  HomeAboutContent,
  HomeAboutImage,
} from "../../styles/homeStyles"
import Parallax from "../../elements/Parallax"

// Context
import { useGlobalStateContext } from "../../context/globalContext"

const HomeAbout = () => {
  const { isMobile } = useGlobalStateContext()
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    // rootMargin: `-10%`,
  })

  const [imageRef, imageinView] = useInView({
    triggerOnce: true,
    rootMargin: `-30%`,
  })

  const controls = useAnimation()

  const contentAnimation = isMobile
    ? {}
    : {
        hidden: {
          opacity: 0,
          y: 100,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: [0.6, 0.01, -0.05, 0.95],
          },
        },
      }

  const imageAnimation = {
    hidden: {
      y: 0,
    },
    visible: {
      y: `100%`,
      transition: {
        duration: 1.6,
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    },
  }

  useEffect(() => {
    if (contentInView) {
      controls.start("visible")
    }
  }, [controls, contentInView])

  useEffect(() => {
    if (imageinView) {
      controls.start("visible")
    }
  }, [controls, imageinView])

  return (
    <>
      <Parallax offset={isMobile ? 0 : 50}>
        <HomeAboutSection style={{ paddingTop: isMobile ? "5vh" : "" }}>
          <Container overflowVisible>
            <Flex
              spaceBetween
              style={{ flexDirection: isMobile ? "column" : "row" }}
            >
              <HomeAboutContent style={{ width: isMobile ? "100%" : "" }}>
                <Parallax offset={isMobile ? 0 : 100}>
                  <motion.div
                    className="animationWrapper"
                    ref={contentRef}
                    variants={contentAnimation}
                    animate={controls}
                    initial="hidden"
                  >
                    <h3 style={{ marginTop: isMobile ? 0 : "" }}>
                      Have a taste of novelty, <br /> only at Foodies.
                    </h3>
                    <p>
                      Food is something that connects us universally. Perhaps it
                      has to do with how we need it to live. But perhaps it can
                      be for much, much more than survival. Here at Foodies, we
                      bring Food to life!
                    </p>
                    <p>
                      Infused into pieces of art as NFTs, each Foodie is an
                      esteemed member of Foodie Town: a bustling hub with a
                      variety of hotspots and activities such as: Foodie
                      Kitchen, Foodie Parties, and Foodie Wars!
                    </p>
                    <p>
                      These features will all be implemented on the Cardano
                      blockchain, and owning a Foodie will grant you access to
                      Foodie Town and{" "}
                      <a href="#roadmap" alt="roadmap">
                        lots more!
                      </a>
                    </p>
                  </motion.div>
                </Parallax>
              </HomeAboutContent>

              <HomeAboutImage style={{ width: isMobile ? "100%" : "" }}>
                <Parallax offset={isMobile ? 0 : 50}>
                  <div className={`${isMobile ? "outerWrapper" : ""}`}>
                    <div
                      className="imageWrapper"
                      style={{ width: isMobile ? "120%" : "" }}
                    >
                      <StaticImage
                        className="image"
                        src="../../assets/images/foodie-about.png"
                        alt="foodie about"
                        objectFit="cover"
                      />
                      <motion.div
                        className="mask"
                        ref={imageRef}
                        variants={imageAnimation}
                        animate={controls}
                        initial="hidden"
                      ></motion.div>
                    </div>
                  </div>
                </Parallax>
              </HomeAboutImage>
            </Flex>
          </Container>
        </HomeAboutSection>
      </Parallax>
    </>
  )
}

export default HomeAbout
