import React, { useEffect } from "react"
import { Link } from "gatsby"
import { AnimatePresence, motion, useAnimation } from "framer-motion"
import PropTypes from "prop-types"

// Styles
import { Flex } from "../../styles/globalStyles"
import { Menu, Logo } from "../../styles/headerStyles"
import {
  SiteNavSection,
  SiteNavMobile,
  NavHeader,
  NavContent,
  Heading,
  NavBottom,
  Icon,
} from "../../styles/navStyles"

// Context
import { useGlobalStateContext } from "../../context/globalContext"

const SiteNav = ({ toggleMenu, setToggleMenu, accordian }) => {
  const { isMobile } = useGlobalStateContext()
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

  // Triggers menu animation when opened AND turns scrolling off
  useEffect(() => {
    if (toggleMenu) {
      controls.start("triggered")
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [controls, toggleMenu])

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
                <Link to="/">
                  <h1>FOODIES</h1>
                </Link>
              </Logo>
              <Menu
                className={`${accordian && "scrolled"} ${isMobile && "mobile"}`}
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                <div className="wrapper">
                  <svg
                    className={`circleAround ${isMobile && "mobile"}`}
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
            </NavHeader>
            {isMobile ? (
              <SiteNavMobile
                variants={navAnimation}
                animate={controls}
                initial="initial"
                exit="exit"
              >
                <Flex vertical center>
                  <div className="links">
                    <Link
                      to="/#roadmap"
                      onClick={() => setToggleMenu(!toggleMenu)}
                    >
                      <Heading large mobile>
                        Roadmap
                      </Heading>
                    </Link>
                    <Link
                      to="/party"
                      onClick={() => setToggleMenu(!toggleMenu)}
                    >
                      <Heading large mobile>
                        Foodie Parties
                      </Heading>
                    </Link>
                    <Link
                      to="/supply"
                      onClick={() => setToggleMenu(!toggleMenu)}
                    >
                      <Heading large mobile>
                        Supply Drop
                      </Heading>
                    </Link>
                    <Link
                      to="/kitchen"
                      onClick={() => setToggleMenu(!toggleMenu)}
                    >
                      <Heading large mobile>
                        Foodie Kitchen
                      </Heading>
                    </Link>
                    <Link
                      to="/about"
                      onClick={() => setToggleMenu(!toggleMenu)}
                    >
                      <Heading large mobile>
                        About{" "}
                      </Heading>
                    </Link>
                    <Link to="/faq" onClick={() => setToggleMenu(!toggleMenu)}>
                      <Heading large mobile>
                        FAQ
                      </Heading>
                    </Link>
                    <Link
                      to="/guide"
                      onClick={() => setToggleMenu(!toggleMenu)}
                    >
                      <Heading large mobile>
                        Guide
                      </Heading>
                    </Link>
                  </div>
                  <div className="socialsCaption">
                    <p>Follow Us. No Filter</p>
                  </div>
                  <div className="socials">
                    <Flex>
                      <span className="horizontalLine top" />
                      <span className="horizontalLine bottom" />
                      <Icon>
                        <div className="svgWrapper">
                          <a
                            rel="noopener"
                            href="https://twitter.com/Foodies_CNFT"
                            target="_blank"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              height="100px"
                              width="100px"
                            >
                              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />{" "}
                            </svg>
                          </a>
                        </div>
                      </Icon>
                      <Icon className>
                        <div className="svgWrapper">
                          <motion.span className="line short" />
                          <a
                            rel="noopener"
                            href="https://discord.gg/9Qttw23Zs2"
                            target="_blank"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 71 55"
                              height="100px"
                              width="100px"
                            >
                              <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" />
                            </svg>
                          </a>
                        </div>
                      </Icon>
                      <Icon>
                        <div className="svgWrapper">
                          <motion.span className="line short" />
                          <a
                            rel="noopener"
                            href="https://www.instagram.com/foodies.nft/"
                            target="_blank"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              height="100px"
                              width="100px"
                            >
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />{" "}
                            </svg>
                          </a>
                        </div>
                      </Icon>
                    </Flex>
                  </div>
                </Flex>
              </SiteNavMobile>
            ) : (
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
                      <Link
                        to="/about"
                        onClick={() => setToggleMenu(!toggleMenu)}
                      >
                        <Heading large hover>
                          About{" "}
                        </Heading>
                      </Link>
                      <Link
                        to="/faq"
                        onClick={() => setToggleMenu(!toggleMenu)}
                      >
                        <Heading large hover>
                          FAQ
                        </Heading>
                      </Link>
                      <Link
                        to="/guide"
                        onClick={() => setToggleMenu(!toggleMenu)}
                      >
                        <Heading large hover>
                          Guide
                        </Heading>
                      </Link>
                      <Heading large unavailable>
                        Mint (17 Dec)
                      </Heading>
                    </div>
                    <div className="roadmap">
                      <motion.span
                        className="line"
                        variants={topRightLineAnimation}
                        animate={controls}
                        initial="initial"
                        exit="exit"
                      />
                      <Link
                        to="/party"
                        onClick={() => setToggleMenu(!toggleMenu)}
                      >
                        <Heading large hover>
                          Foodie Parties
                        </Heading>
                      </Link>
                      <Link
                        to="/supply"
                        onClick={() => setToggleMenu(!toggleMenu)}
                      >
                        <Heading large hover>
                          Supply Drop
                        </Heading>
                      </Link>
                      <Link
                        to="/kitchen"
                        onClick={() => setToggleMenu(!toggleMenu)}
                      >
                        <Heading large hover>
                          Foodie Kitchen
                        </Heading>
                      </Link>
                      <Heading unavailable>Foodie Wars</Heading>
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
                      <div className="cardanoWrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1000"
                          height="1000"
                          viewBox="0 0 2000 1848"
                          className="cardanoSVG"
                        >
                          <g fill="#000">
                            <path d="M975.46 5.46c43.59-22.73 96.8 30 73.64 73.55-13.45 35.5-64.45 44.94-90.5 17.88C931 70.92 940 19.59 975.46 5.46M506.61 56c26.48-10.9 60 13.36 57.3 42.22 2.81 31.33-35.5 54.39-62.49 39.5-35.76-13.85-31.67-71.9 5.19-81.72M1466.87 138.6c-41.38-5-47.93-70.06-8.09-83.16 30.9-15.07 59.25 13.19 63.77 42.48-6.48 25.01-27.42 47.91-55.68 40.68M613.29 255.55c44.27-28 107.44 13.7 100.63 65.12-2.3 51.92-71.26 82-110.17 46.9-37.62-27.57-31.92-90.82 9.54-112.02M1289.1 285.26c19.75-50.9 99.78-52.44 122.26-2.89 22.22 38.56-5.11 86.31-44.7 99.42-52.44 9.79-102.25-46.9-77.56-96.53M919 378.9c-.43-43.75 39.42-76.35 81-79.33 27.58 5.53 57.64 17.28 69.47 45.11 22.05 38.39 2.47 91.25-37.37 108.87-18.22 10.21-39.76 6.38-59.6 5.19-30.33-14.89-55.87-44.09-53.5-79.84M221.75 442.65c40.44-24.86 95 20.51 79.69 64.44-8.43 38-59.51 53.46-88.71 29.2-31.17-22.73-26.23-77.38 9.02-93.64M1719 442.57c34.31-26.64 90.93 3.92 86.84 47.24 2.3 39.5-46.65 69.29-80.71 48.95-37.51-16.86-41.34-74.57-6.13-96.19M1115.08 521.22c56.62-20.34 123.87 4 156.14 54.48 42.57 61.71 19.92 155.69-46.14 191.1-68.45 41.88-168.4 6.38-193.68-70.06-28.7-68.43 13.11-154.07 83.68-175.52M782.88 527.95c62.75-29.62 147.2-4.77 177.51 59.42 35.67 62.48 8.09 149.48-55.68 181.74-63.85 36.26-153.93 8.77-184.83-58.31-34.65-64.87-3.88-152.98 63-182.85M450.25 641.67c4.77-40.43 42.91-66.74 81.39-69.46 41.46 5 74.58 37.2 79.09 79.16-2.72 41.54-34.82 82.14-78.84 81.89-48.43 4.17-90.89-44.01-81.64-91.59M1432.73 581c49.72-28.94 118.76 13.19 116.55 70.31 3.41 60.52-73 103.17-122.51 67.67-51.43-29.56-47.42-112.81 5.96-137.98M647.69 794.3c58.15-16 124.64 11.41 153.16 64.86 31.24 53.8 18.47 128.54-30.05 168-62.23 57.88-177 34.64-210.12-44.35-38.06-72.41 8.17-169.45 87.01-188.51M1277.78 794c56.53-16.17 122.94 5.62 153.33 57.12 40.18 58.9 21 146.75-38.82 184.72-62.66 44.09-159.72 20.94-194.2-48-41.8-71.31.26-172.09 79.69-193.84M273.68 861.2c50.23-19 105.91 36.43 85.56 86.23-12.43 45.37-76.37 62.14-109.4 28.69-38.65-31.41-24.34-101.3 23.84-114.92M1635.18 933.47c-1.45-41.62 29-78.48 71.68-80.78 34.4 5.45 67.85 33.2 65.13 70.65 3.15 49.46-56.45 83.08-98.59 59.84-19.75-10.04-29.88-30.3-38.22-49.71M26.7 885.63c30.22-13.19 67.6 13 60.7 46.56-1.62 38-57.72 52.61-78.33 20.86C-9.14 931 1.76 897 26.7 885.63zM1932.13 884.87c21.28-15.15 55.42-4.26 63.85 20.6 14.3 27.15-11.92 64.35-42.48 59.76-42.9 3.91-56.78-61.47-21.37-80.36M811.83 1067.28c79.52-20.68 165 45.63 165.5 127.51 5.19 82.74-79 156.11-160.4 137-62.92-10.13-112.29-70.74-110.25-134.32-.17-60.81 45.72-117.33 105.15-130.19M1126.75 1067.11c80.71-22.56 168.74 44.94 167.46 128.71 4.26 81.21-77.3 152.11-157 136-75-9.7-130.34-92.1-109.4-164.88 10.57-48.5 51.09-87.94 98.94-99.83M519.56 1117.51c55.85-9.53 108.21 52.78 85.56 105.81-16.52 56.51-98.76 71.84-135.12 25.68-42.65-44.33-10.81-125.37 49.56-131.49M1443.11 1120c49.8-20.86 110.93 22.22 107.1 76.27 2 59.5-73.47 100.53-122.17 65.8-55.16-31.18-45.12-122.94 15.07-142.07M1701.25 1378.92c-19.5-36.35 15.92-84.53 56.28-77.8 20.09-.34 34.14 15.49 47 28.77 2.64 21.54 7.07 47.24-10.81 63.84-24.28 30.73-79.28 21.96-92.47-14.81M221.58 1311.24c37.72-25.11 92 12.34 83.52 56.44-4.51 39-53.64 61.29-86 39.16-34.73-20.09-33.45-77.29 2.48-95.6M966.78 1392.88c49.38-21.79 112.29 21.2 107.61 75.59 3.66 60.1-74.15 101.72-122.43 65.63-53.63-30.99-44.69-122.16 14.82-141.22M621.63 1473.4c42.06-22.13 98.5 16.09 94.67 63.16 1.28 38.65-36.44 71.59-74.58 65.88-31.59-.68-52.19-29-62.32-55.93.52-29.35 12.6-62.04 42.23-73.11M1320.77 1474.08c43.25-26.73 104.72 11.66 100.63 62 1.11 52.61-68.36 86.31-108.63 51.75-38.99-27.09-34.23-92.21 8-113.75M1442.35 1774.65c-19.24-29.11 3.41-64.18 34.65-70.82 25.12 5.11 51.68 24 46.4 53.12-3.66 39.41-61.3 51.5-81.05 17.7M477.24 1749.37c7.66-23.07 26.22-46 53.38-40 39.59 2.81 51.34 62.48 16.69 80.87-31.16 21.01-67.31-7.76-70.07-40.87M942.85 1775.84c7.58-34.13 51.76-50.73 80.88-32.6 19.24 8.26 24.86 29.79 29.8 48.09-2.64 9.53-5 19.07-7.32 28.6-11.92 14.13-27.24 28.26-47.08 27.75-36.87 4.32-70.13-37.36-56.28-71.84" />
                          </g>
                        </svg>
                      </div>
                      <p>Powered by Cardano</p>
                    </div>
                    <div className="wrapper">
                      <div className="info">
                        <div className="infoWrapper">
                          <h3>Follow Us. No Filter.</h3>
                          <p>
                            POLICY ID:
                            129b6e979309b919f4f56c80b00d55149c073fd74176917c1ff560f2
                          </p>
                        </div>
                      </div>
                      <div className="socials">
                        <Flex>
                          <Icon>
                            <div className="svgWrapper">
                              <a
                                rel="noopener"
                                href="https://twitter.com/Foodies_CNFT"
                                target="_blank"
                              >
                                <motion.svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fillRule="evenodd"
                                  height="1000"
                                  width="1000"
                                  whileHover={{ scale: 1.2 }}
                                >
                                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />{" "}
                                </motion.svg>
                              </a>
                            </div>
                          </Icon>
                          <Icon>
                            <div className="svgWrapper">
                              <motion.span
                                className="line short"
                                variants={bottomLeftLineAnimation}
                                animate={controls}
                                initial="initial"
                                exit="exit"
                              />
                              <a
                                rel="noopener"
                                href="https://discord.gg/9Qttw23Zs2"
                                target="_blank"
                              >
                                <motion.svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 71 55"
                                  fillRule="evenodd"
                                  height="1000"
                                  width="1000"
                                  whileHover={{ scale: 1.2 }}
                                >
                                  <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" />
                                </motion.svg>
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
                                rel="noopener"
                                href="https://www.instagram.com/foodies.nft/"
                                target="_blank"
                              >
                                <motion.svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fillRule="evenodd"
                                  height="1000"
                                  width="1000"
                                  whileHover={{ scale: 1.2 }}
                                >
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />{" "}
                                </motion.svg>
                              </a>
                            </div>
                          </Icon>
                        </Flex>
                      </div>
                    </div>
                  </NavBottom>
                </Flex>
              </SiteNavSection>
            )}
          </>
        )}
      </AnimatePresence>
    </>
  )
}

SiteNav.propTypes = {
  toggleMenu: PropTypes.bool.isRequired,
  setToggleMenu: PropTypes.func.isRequired,
  accordian: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
}

export default SiteNav
