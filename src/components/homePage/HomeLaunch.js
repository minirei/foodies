import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

// Styles
import { Container, Flex } from "../../styles/globalStyles"
import {
  HomeLaunchSection,
  HomeLaunchContent,
  Marquee,
  HomeLaunchGallery,
  GalleryImages,
  HomeLaunchImage,
} from "../../styles/launchStyles"

// Elements
import Parallax from "../../elements/Parallax"

const AnimatedLetters = ({ title }) => {
  return (
    <span className="rowTitle">
      {[...title].map(letter => (
        // eslint-disable-next-line react/jsx-key
        <span className="rowLetter">{letter}</span>
      ))}
    </span>
  )
}

AnimatedLetters.propTypes = {
  title: PropTypes.string,
}

const HomeLaunch = () => {
  // Marquee
  const [playMarquee, setPlayMarquee] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true)
    }, 2000)
  }, [])

  // Animation
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: `-5%`,
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
      <HomeLaunchSection>
        <Marquee>
          <div className={`marqueeInner ${playMarquee && "animate"}`}>
            <AnimatedLetters title={"DECEMBER'21"} />
            <AnimatedLetters title={"DECEMBER'21"} />
            <AnimatedLetters title={"DECEMBER'21"} />
            <AnimatedLetters title={"DECEMBER'21"} />
          </div>
        </Marquee>
        <HomeLaunchContent>
          <Container>
            <Flex vertical alignTop className="launchInfo">
              <Parallax offset={100}>
                <motion.div
                  className="contentAnimationWrapper"
                  ref={contentRef}
                  variants={contentAnimation}
                  animate={controls}
                  initial="hidden"
                >
                  <h3>THIS FOODIES LAUNCH</h3>
                  <p>
                    Comprises <strong>10,000</strong> uniquely cooked
                    individuals (over <strong>8 categories</strong> and more
                    than <strong>100 traits</strong>) made of <em>real</em>,
                    edible food ingredients!
                  </p>
                  <p>
                    Each foodie will belong to 1 of these 4 nationalities:{" "}
                    <em>Japanese, Italian, American and Chinese</em>, some of
                    the most popular cuisines in the world. Visually-stunning
                    and deliciously-prepared, each Foodie embodies the spirit of
                    love, diversity, and appreciation of food from various
                    cultures!{" "}
                  </p>
                </motion.div>
              </Parallax>
            </Flex>
          </Container>
        </HomeLaunchContent>

        <HomeLaunchGallery>
          <Container>
            <h3>
              There are many traits common to all nationalities! <br />
              But each nationality will have certain{" "}
              <strong>rare traits</strong> such as:
            </h3>
          </Container>
          <GalleryImages>
            <HomeLaunchImage>
              <StaticImage
                className="image"
                src="../../assets/images/colosseum.png"
                alt="colosseum"
                objectFit="cover"
              />
              <p>Italy: The Colosseum</p>
            </HomeLaunchImage>
            <HomeLaunchImage>
              <StaticImage
                className="image"
                src="../../assets/images/forbidden-city.png"
                alt="forbidden city"
                objectFit="cover"
              />
              <p>China: The Forbidden City</p>
            </HomeLaunchImage>
            <HomeLaunchImage>
              <StaticImage
                className="image"
                src="../../assets/images/statue-of-liberty.png"
                alt="statue of liberty"
                objectFit="cover"
              />
              <p>USA: The Statue of Liberty</p>
            </HomeLaunchImage>
            <HomeLaunchImage>
              <StaticImage
                className="image"
                src="../../assets/images/kinkaku-ji.png"
                alt="kinkaku ji"
                objectFit="cover"
              />
              <p>Japan: Kinkaku-ji</p>
            </HomeLaunchImage>
          </GalleryImages>
        </HomeLaunchGallery>
      </HomeLaunchSection>
    </>
  )
}

export default HomeLaunch
