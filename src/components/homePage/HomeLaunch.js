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

// Context
import { useGlobalStateContext } from "../../context/globalContext"

// Elements
import Parallax from "../../elements/Parallax"

const HomeLaunch = () => {
  const { isMobile } = useGlobalStateContext()

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
    rootMargin: `-25%`,
  })
  const [marqueeRef, marqueeInView] = useInView({
    triggerOnce: true,
    rootMargin: `-25%`,
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
        staggerChildren: 0.08,
        duration: 1,
      },
    },
  }

  const letterAnimation = {
    hidden: { y: 400 },
    visible: {
      y: 0,
    },
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  useEffect(() => {
    if (marqueeInView) {
      marqueeControls.start("visible")
      setTimeout(() => {
        setPlayMarquee(true)
      }, 1500)
    }
  }, [marqueeInView])

  // Colour Animation
  const bgDefault = `rgb(255, 248, 237)`
  const bgChange = `rgb(241,202,137)`
  const colorAnimation = {
    initial: {
      backgroundColor: bgDefault,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    changeColor: {
      backgroundColor: bgChange,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  }
  const colorControls = useAnimation()
  const [bgRef, bgInView] = useInView({
    rootMargin: `-50%`,
  })
  useEffect(() => {
    if (bgInView) colorControls.start("changeColor")
    else colorControls.start("initial")
  }, [bgInView, colorControls])

  return (
    <HomeLaunchSection
      variants={colorAnimation}
      animate={colorControls}
      initial="initial"
      ref={bgRef}
    >
      <Marquee ref={marqueeRef}>
        <motion.div
          className={`marqueeInner ${playMarquee && "animate"} ${
            isMobile && "mobile"
          }`}
          variants={bannerAnimation}
          animate={marqueeControls}
          initial="hidden"
        >
          <AnimatedLetters title={"DECEMBER'21"} />
          <div className="rowTitle">
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
          </div>
          <AnimatedLetters title={"DECEMBER'21"} />
          <AnimatedLetters title={"DECEMBER'21"} />
        </motion.div>
      </Marquee>
      <HomeLaunchContent className={`${isMobile && "mobile"}`}>
        <Container>
          <Flex
            vertical
            alignTop
            className={`launchInfo ${isMobile && "mobile"}`}
          >
            <Parallax offset={isMobile ? 0 : 50}>
              <motion.div
                className="contentAnimationWrapper"
                ref={contentRef}
                variants={contentAnimation}
                animate={controls}
                initial="hidden"
              >
                <h3>This Foodies Launch</h3>
                <p>
                  Comprises 10,000 uniquely cooked individuals made of real,
                  edible food ingredients! With more than 100 traits over 8
                  categories, randomly distributed according to predetermined
                  rarities, you can be sure that each Foodie is like no other!
                </p>
                <p>
                  Every Foodie has traits that represent ingredients from
                  popular cuisines around the world. Visually-stunning and
                  deliciously-prepared, each Foodie embodies the spirit of love,
                  diversity, and appreciation of food!
                </p>
                <p>
                  Some lucky Foodies even have special backgrounds, which
                  represent popular global landmarks! Have a sneak peek below!
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
