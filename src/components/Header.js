import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { motion, useViewportScroll } from "framer-motion"
import { useAnimation } from "framer-motion"
import PropTypes from "prop-types"

// Styles
import { Container, Flex } from "../styles/globalStyles"
import {
  HeaderSection,
  Navigation,
  Menu,
  Logo,
} from "../styles/headerStyles"

// Context
import { useGlobalStateContext } from "../context/globalContext"

const Header = ({ toggleMenu, setToggleMenu, accordian, setAccordian }) => {
  // For mobile
  const { isMobile } = useGlobalStateContext()

  // Animation
  const controls = useAnimation()

  const menuAnimation = {
    initial: {
      right: `5%`,
      transition: {
        duration: 1.6,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
    triggered: {
      right: `1%`,
      transition: {
        duration: 1.6,
        delay: 0.8,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
  }

  const logoAnimation = {
    initial: {
      opacity: 1,
      display: `flex`,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
    triggered: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
    hide: {
      display: `none`,
      transition: {
        delay: 1.2,
      },
    },
  }

  const navAnimation = {
    initial: {
      display: `block`,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
    triggered: {
      transition: {
        duration: 0.8,
        ease: [0.6, 0.01, -0.05, 0.9],
        staggerChildren: 0.2,
      },
    },
    hide: {
      display: `none`,
      transition: {
        delay: 2,
      },
    },
  }

  const navChildAnimation = {
    initial: {
      opacity: 1,
      display: `inline-block`,
    },
    triggered: {
      opacity: 0,
    },
  }

  const { scrollY } = useViewportScroll()

  scrollY.onChange(x => {
    setAccordian(x > 150 ? 1 : 0)
  })

  useEffect(() => {
    if (accordian) {
      controls.start("triggered")
      controls.start("hide")
    } else {
      controls.start("initial")
    }
  }, [accordian, controls])

  return (
    <>
      {isMobile ? (
        <HeaderSection>
          <Menu
            variants={menuAnimation}
            animate={controls}
            initial="initial"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <button>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </Menu>
          <Logo variants={logoAnimation} animate={controls} initial="initial">
            <Link to="/">
              <h1>FOODIES</h1>
            </Link>
          </Logo>
        </HeaderSection>
      ) : (
        <HeaderSection>
          <Menu
            variants={menuAnimation}
            animate={controls}
            initial="initial"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <div className="wrapper">
              <svg
                className="circleAround"
                width="50"
                height="50"
                viewBox="0 0 50 50"
              >
                <circle
                  className="path"
                  cx="25"
                  cy="25"
                  r="40"
                  stroke="black"
                  strokeWidth="2"
                  fill="none"
                ></circle>
              </svg>
              <button>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </Menu>
          <Logo variants={logoAnimation} animate={controls} initial="initial">
            <Link to="/">
              <h1>FOODIES</h1>
            </Link>
          </Logo>
          <Container fluid>
            <Flex flexEnd>
              <Navigation
                variants={navAnimation}
                animate={controls}
                initial="initial"
              >
                <Link className="navLink" to="/about">
                  <motion.h3 variants={navChildAnimation}>About</motion.h3>
                </Link>
                <Link className="navLink" to="/roadmap">
                  <motion.h3 variants={navChildAnimation}>Roadmap</motion.h3>
                </Link>
                <Link className="navLink" to="/faq">
                  <motion.h3 variants={navChildAnimation}>FAQs</motion.h3>
                </Link>
                <Link className="navLink" to="/guide">
                  <motion.h3 variants={navChildAnimation}>Guide</motion.h3>
                </Link>
              </Navigation>
            </Flex>
          </Container>
        </HeaderSection>
      )}
    </>
  )
}

Header.propTypes = {
  toggleMenu: PropTypes.bool.isRequired,
  setToggleMenu: PropTypes.func.isRequired,
  accordian: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  setAccordian: PropTypes.func.isRequired,
}

export default Header
