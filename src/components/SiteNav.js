import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { AnimatePresence, motion, useAnimation } from "framer-motion"
import PropTypes from "prop-types"

// Styles
import { Container, Flex } from "../styles/globalStyles"
import { Menu, Logo } from "../styles/headerStyles"
import {
  SiteNavSection,
  NavHeader,
  NavContent,
  Heading,
  NavBottom,
  Icon,
} from "../styles/navStyles"
import { StaticImage } from "gatsby-plugin-image"

const SiteNav = ({ toggleMenu, setToggleMenu, accordian }) => {
  const controls = useAnimation()

  const logoAnimation = {
    initial: {
      opacity: accordian ? 0 : 1,
    },
    triggered: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    exit: {
      opacity: accordian ? 0 : 1,
    },
  }
  const navAnimation = {
    initial: {
      y: "-100%",
    },
    triggered: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    exit: {
      y: "-100%",
      transition: {
        delay: 0.4,
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }
  const topLeftLineAnimation = {
    initial: {
      y: "-100%",
    },
    triggered: {
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    exit: {
      y: "-100%",
      transition: {
        delay: 0.3,
        duration: 0.6,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  const topRightLineAnimation = {
    initial: {
      y: "-100%",
    },
    triggered: {
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    exit: {
      y: "-100%",
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  const bottomLeftLineAnimation = {
    initial: {
      y: "-100%",
    },
    triggered: {
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    exit: {
      y: "-100%",
      transition: {
        delay: 0.1,
        duration: 0.4,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  const bottomRightLineAnimation = {
    initial: {
      y: "-100%",
    },
    triggered: {
      y: 0,
      transition: {
        delay: 1,
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    exit: {
      y: "-100%",
      transition: {
        duration: 0.4,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  const horizontalLineAnimation = {
    initial: {
      x: "-100%",
    },
    triggered: {
      x: 0,
      transition: {
        delay: 0.4,
        duration: 1.4,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    exit: {
      x: "-100%",
      transition: {
        duration: 1.2,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  useEffect(() => {
    if (toggleMenu) {
      controls.start("triggered")
    }
  }, [controls, toggleMenu])

  console.log(`${logoAnimation}`)
  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <>
            <NavHeader>
              <Logo
                variants={logoAnimation}
                animate={controls}
                initial="initial"
                exit="exit"
              >
                <h1>Foodies</h1>
              </Logo>
              <Menu
                className={`${accordian && "scrolled"} `}
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <button>
                  <span></span>
                  <span></span>
                </button>
              </Menu>
            </NavHeader>
            <SiteNavSection
              variants={navAnimation}
              animate={controls}
              initial="initial"
              exit="exit"
            >
              <Flex vertical center>
                <NavContent>
                  <div className="main">
                    <motion.span
                      className="line"
                      variants={topLeftLineAnimation}
                      animate={controls}
                      initial="initial"
                      exit="exit"
                    />
                    <Heading large>About</Heading>
                    <Heading large>FAQs</Heading>
                    <Heading large>Guide</Heading>
                    <Heading large>Mint</Heading>
                  </div>
                  <div className="roadmap">
                    <motion.span
                      className="line"
                      variants={topRightLineAnimation}
                      animate={controls}
                      initial="initial"
                      exit="exit"
                    />
                    <Heading large>Roadmap</Heading>
                    <Heading>Foodie Parties</Heading>
                    <Heading>Foodie Kitchen</Heading>
                    <Heading>Supply Drop</Heading>
                    <Heading>Foodie Wars</Heading>
                  </div>
                  <motion.span
                    className="horizontalLine"
                    variants={horizontalLineAnimation}
                    animate={controls}
                    initial="initial"
                    exit="exit"
                  />
                </NavContent>
                <NavBottom>
                  <div className="leftInfo">
                    <div className="imageWrapper">
                      <StaticImage
                        className="image"
                        src="../assets/images/cardano-logo.png"
                        alt="cardano logo"
                      />
                    </div>
                    <p>Powered by Cardano</p>
                  </div>
                  <div className="wrapper">
                    <div className="info">
                      <div className="infoWrapper">
                        <h3>Follow Us. No Filter.</h3>
                        <p>
                          POLICY ID:
                          7eb7cf060a9740b63de68afb1c0fde7f74f2895c981573259046ae3f
                        </p>
                      </div>
                    </div>
                    <div className="socials">
                      <Flex>
                        <Icon>
                          <div className="svgWrapper">
                            {/* <span className="line"></span> */}
                            <a
                              href="https://twitter.com/Foodies_CNFT"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fillRule="evenodd"
                              >
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />{" "}
                              </svg>
                            </a>
                          </div>
                        </Icon>
                        <Icon className>
                          <div className="svgWrapper">
                            <motion.span
                              className="line short"
                              variants={bottomLeftLineAnimation}
                              animate={controls}
                              initial="initial"
                              exit="exit"
                            />
                            <a
                              href="https://discord.gg/9Qttw23Zs2"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fillRule="evenodd"
                              >
                                <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />{" "}
                              </svg>
                            </a>
                          </div>
                        </Icon>
                        <Icon>
                          <div className="svgWrapper">
                            <motion.span
                              className="line short"
                              variants={bottomRightLineAnimation}
                              animate={controls}
                              initial="initial"
                              exit="exit"
                            />
                            <a
                              href="https://www.instagram.com/foodies.nft/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fillRule="evenodd"
                              >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />{" "}
                              </svg>
                            </a>
                          </div>
                        </Icon>
                      </Flex>
                    </div>
                  </div>
                </NavBottom>
              </Flex>
            </SiteNavSection>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

SiteNav.propTypes = {
  toggleMenu: PropTypes.bool.isRequired,
  setToggleMenu: PropTypes.func.isRequired,
  accordian: PropTypes.bool.isRequired,
}

export default SiteNav
