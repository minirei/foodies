import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { motion, useViewportScroll } from "framer-motion"
import { useAnimation } from "framer-motion"

// Styles
import { Container, Flex } from "../styles/globalStyles"
import {
  HeaderSection,
  Navigation,
  Menu,
  Logo,
  Socials,
} from "../styles/headerStyles"

// Hooks
import useWindowSize from "../hooks/useWindowSize"

const Header = () => {
  // For mobile
  const size = useWindowSize()
  const small = size.width < 1024

  // Animation
  const controls = useAnimation()

  const menuAnimation = {
    initial: {
      right: `10%`,
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
        duration: 1.2,
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
  const [accordian, setAccordian] = useState(0)

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
      {small ? (
        <HeaderSection>
          <Flex spaceBetween>
            <Menu className="mobile">
              <button>
                <span></span>
                <span></span>
              </button>
            </Menu>
            <Logo variants={logoAnimation} animate={controls} initial="initial">
              <h1>Foodies</h1>
            </Logo>
          </Flex>
        </HeaderSection>
      ) : (
        <HeaderSection>
          <Menu variants={menuAnimation} animate={controls} initial="initial">
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
          <Logo variants={logoAnimation} animate={controls} initial="initial">
            <Link href="/">
              <h1>Foodies</h1>
            </Link>
          </Logo>
          <Container>
            <Flex flexEnd>
              <Navigation
                variants={navAnimation}
                animate={controls}
                initial="initial"
              >
                <Link className="navLink" href="/about">
                  <motion.h3 variants={navChildAnimation}>About</motion.h3>
                </Link>
                <Link className="navLink" href="/roadmap">
                  <motion.h3 variants={navChildAnimation}>Roadmap</motion.h3>
                </Link>
                <Link className="navLink" href="/faq">
                  <motion.h3 variants={navChildAnimation}>FAQs</motion.h3>
                </Link>
                <Link className="navLink" href="/guide">
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

export default Header
