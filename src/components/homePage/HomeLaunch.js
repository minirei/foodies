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

const HomeLaunch = () => {
  const AnimatedLetters = ({ title }) => {
    return (
      <span className="rowTitle">
        {[...title].map(letter => (
          <span
            className="rowLetter"
            key={`${letter}${Math.random().toString()}`}
          >
            {letter}
          </span>
        ))}
      </span>
    )
  }

  AnimatedLetters.propTypes = {
    title: PropTypes.string,
  }

  // Marquee
  const [playMarquee, setPlayMarquee] = useState(false)

  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: `-5%`,
  })
  const [marqueeRef, marqueeInView] = useInView({
    triggerOnce: true,
    rootMargin: `-20%`,
  })
  const controls = useAnimation()
  const marqueeControls = useAnimation()

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

  const bannerAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  }

  const letterAnimation = {
    hidden: { y: 400 },
    visible: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  useEffect(() => {
    if (marqueeInView) {
      console.log("in view")
      marqueeControls.start("visible")
      setTimeout(() => {
        setPlayMarquee(true)
      }, 2000)
    }
  }, [marqueeInView])

  return (
    <HomeLaunchSection>
      <Marquee ref={marqueeRef}>
        <motion.div
          className={`marqueeInner ${playMarquee && "animate"}`}
          variants={bannerAnimation}
          animate={marqueeControls}
          initial="hidden"
        >
          <AnimatedLetters title={"DECEMBER'21"} />
          <motion.span className="rowLetter" variants={letterAnimation}>
            D
          </motion.span>
          <motion.span className="rowLetter" variants={letterAnimation}>
            E
          </motion.span>
          <motion.span className="rowLetter" variants={letterAnimation}>
            C
          </motion.span>
          <motion.span className="rowLetter" variants={letterAnimation}>
            E
          </motion.span>
          <motion.span className="rowLetter" variants={letterAnimation}>
            M
          </motion.span>
          <motion.span className="rowLetter" variants={letterAnimation}>
            B
          </motion.span>
          <motion.span className="rowLetter" variants={letterAnimation}>
            E
          </motion.span>
          <motion.span className="rowLetter" variants={letterAnimation}>
            R
          </motion.span>
          <motion.span className="rowLetter" variants={letterAnimation}>
            '
          </motion.span>
          <motion.span className="rowLetter" variants={letterAnimation}>
            2
          </motion.span>
          <motion.span className="rowLetter" variants={letterAnimation}>
            1
          </motion.span>
          <AnimatedLetters title={"DECEMBER'21"} />
          <AnimatedLetters title={"DECEMBER'21"} />
        </motion.div>
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
