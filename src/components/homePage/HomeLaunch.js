import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

// Styles
import { Container, Flex } from "../../styles/globalStyles"
import {
  HomeLaunchSection,
  HomeLaunchContent,
  Marquee,
} from "../../styles/launchStyles"

// Elements
import Parallax from "../../elements/Parallax"

const AnimatedLetters = ({ title }) => {
  return (
    <span className="rowTitle">
      {[...title].map(letter => (
        <span className="rowLetter" key={`${letter}${Math.random().toString()}`}>{letter}</span>
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
                  Comprises <strong>10,000</strong> uniquely cooked individuals
                  (over <strong>8 categories</strong> and more than{" "}
                  <strong>100 traits</strong>) made of <em>real</em>, edible
                  food ingredients!
                </p>
                <p>
                  Each foodie will belong to 1 of these 4 nationalities:{" "}
                  <em>Japanese, Italian, American and Chinese</em>, some of the
                  most popular cuisines in the world. Visually-stunning and
                  deliciously-prepared, each Foodie embodies the spirit of love,
                  diversity, and appreciation of food from various cultures!{" "}
                </p>
              </motion.div>
            </Parallax>
          </Flex>
        </Container>
      </HomeLaunchContent>
    </HomeLaunchSection>
  )
}

export default HomeLaunch
