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

const HomeAbout = () => {
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    // rootMargin: `-10%`,
  })
  const controls = useAnimation()

  const contentAnimation = {
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

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  return (
    <>
      <Parallax>
        <HomeAboutSection>
          <Container overflowVisible>
            <Flex spaceBetween>
              <HomeAboutContent>
                <Parallax offset={150}>
                  <motion.div
                    className="animationWrapper"
                    ref={contentRef}
                    variants={contentAnimation}
                    animate={controls}
                    initial="hidden"
                  >
                    <h3>
                      Welcome to FOODIES: An NFT Project,{" "}
                      <strong>but so much more</strong>.
                    </h3>
                    <p>
                      Food is something that connects us universally. Perhaps it
                      has to do with how we need it to live. But perhaps it can
                      be for much, much more than survival. Here at Foodies, we
                      bring Food to life!
                    </p>
                    <p>
                      Foodies will live in Foodie Town, a bustling hub with a
                      variety of hotspots and activities such as: Foodie
                      Kitchen, Foodie Parties, and Foodie Wars!
                    </p>
                  </motion.div>
                </Parallax>
              </HomeAboutContent>

              <HomeAboutImage>
                <Parallax offset={0}>
                  <StaticImage
                    className="image"
                    src="../../../static/images/foodie-about.png"
                    alt="foodie about"
                    objectFit="cover"
                  />
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
