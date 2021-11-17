import React, { useEffect, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion, useAnimation } from "framer-motion"

// Styles
import { Flex, Container } from "../../styles/globalStyles"
import {
  HomeRevealSection,
  HomeCurtain,
  CurtainContent,
  CurtainHeading,
  CurtainCover,
  CurtainText,
  CurtainContentMask,
  CurtainImage,
  CurtainImageMask,
} from "../../styles/curtainStyles"

// Context
import { useGlobalStateContext } from "../../context/globalContext"

const content = {
  community:
    "We are committed to creating an engaging ecosystem in Foodie Town, where you’ll be able to live as your Foodie, hangout with friends, continually upgrade your Foodie, and expand your collection! Furthermore, all Foodies will also stand a chance to win vouchers, airdrops, and more! ",
  difference:
    "We pledge to donate 5% of all Foodie proceeds to alleviate rampant starvation across the globe. All Foodie owners have a direct impact in providing food to those in need. Furthermore, the ecosystem which exists in Foodie Town continually seeks to increase the value of each Foodie. Thus, Foodie Town aims to improve your overall wellbeing and financial situation.",
  food: "As our entire project lives and breathes food, you can be certain that everything - and we mean everything - incorporates our love of various cuisines from all corners of the globe. We are Foodies after all! From our planned Foodie Parties to the weekly “Foodie of the Week” competition on our socials, we truly hope to foster a community of Foodies!",
}

const HomeReveal = () => {
  const { isMobile } = useGlobalStateContext()

  // Animation
  const [hovered1, setHovered1] = useState(false)
  const [hovered2, setHovered2] = useState(false)
  const [hovered3, setHovered3] = useState(false)
  const colorControls = useAnimation()

  // Colour
  const bg1 = `rgb(67,121,123)`
  const bg2 = `rgb(222,137,143)`
  const bg3 = `rgb(78, 128, 163)`
  const bgDefault = `rgb(232, 182, 102)`
  const [bgColor, setBgColor] = useState(bgDefault)

  useEffect(() => {
    if (hovered1) {
      setBgColor(bg1)
    } else if (hovered2) {
      setBgColor(bg2)
    } else if (hovered3) {
      setBgColor(bg3)
    } else {
      setBgColor(bgDefault)
    }
  }, [hovered1, hovered2, hovered3, colorControls])
  return isMobile ? (
    <HomeRevealSection className="mobile">
      <div className="chapter mobile">
        <h1>002 - Our Core Values</h1>
      </div>
      <Flex vertical>
        <div className="wrapper">
          <Container>
            <CurtainContent className="mobile first">
              <CurtainHeading>
                <h2>01</h2>
                <h3>Vibrant,</h3>
                <h3>Sustainable</h3>
                <h3>Community</h3>
              </CurtainHeading>
              <CurtainText className="community">
                <p>{content.community}</p>
              </CurtainText>
            </CurtainContent>
          </Container>
          <CurtainImage>
            <StaticImage
              className="image"
              src="../../assets/images/curtain-community.jpeg"
              alt="community curtain"
            />
          </CurtainImage>
        </div>
        <div className="wrapper">
          <Container>
            <CurtainContent className="mobile">
              <CurtainHeading>
                <h2>02</h2>
                <h3>Making a</h3>
                <h3>Difference</h3>
              </CurtainHeading>
              <CurtainText className="difference">
                <p>{content.difference}</p>
              </CurtainText>
            </CurtainContent>
          </Container>
          <CurtainImage>
            <StaticImage
              className="image"
              src="../../assets/images/curtain-difference.jpeg"
              alt="difference curtain"
            />
          </CurtainImage>
        </div>
        <div className="wrapper">
          <Container>
            <CurtainContent className="mobile">
              <CurtainHeading>
                <h2>03</h2>
                <h3>Appreciating</h3>
                <h3>Culture &</h3>
                <h3>Cuisine</h3>
              </CurtainHeading>
              <CurtainText className="food">
                <p>{content.food}</p>
              </CurtainText>
            </CurtainContent>
          </Container>
          <CurtainImage>
            <StaticImage
              className="image"
              src="../../assets/images/curtain-food.jpeg"
              alt="food curtain"
            />
          </CurtainImage>
        </div>
      </Flex>
    </HomeRevealSection>
  ) : (
    <>
      <HomeRevealSection>
        <motion.div
          className="chapter"
          animate={{ opacity: hovered1 ? 0 : 1 }}
          transition={{
            duration: 1,
            ease: [0.6, 0.01, -0.05, 0.9],
          }}
        >
          <h1>002 - Our Core Values</h1>
        </motion.div>
        <Flex spaceBetween>
          {/* FIRST CURTAIN */}
          <HomeCurtain
            onHoverStart={() => {
              setHovered1(!hovered1)
            }}
            onHoverEnd={() => {
              setHovered1(!hovered1)
            }}
          >
            <CurtainContent>
              <CurtainHeading
                animate={{ y: hovered1 ? `-20vh` : 0 }}
                transition={{
                  duration: 1.4,
                  ease: [0.6, 0.01, -0.05, 0.9],
                }}
              >
                <h2>01</h2>
                <h3>Vibrant,</h3>
                <h3>Sustainable</h3>
                <h3>Community</h3>
              </CurtainHeading>
              <CurtainCover>
                <CurtainText
                  animate={{ y: hovered1 ? `-20vh` : 0 }}
                  transition={{
                    duration: 1.4,
                    ease: [0.6, 0.01, -0.05, 0.9],
                  }}
                  className="community"
                >
                  <p>{content.community}</p>
                </CurtainText>
                <CurtainContentMask
                  animate={{
                    y: hovered1 ? `100vh` : 0,
                    backgroundColor: bgColor,
                  }}
                  transition={{
                    y: { delay: 0.2, duration: 1, ease: "easeOut" },
                    duration: 1,
                    ease: "easeOut",
                  }}
                />
              </CurtainCover>
            </CurtainContent>
            <CurtainImage
              animate={{ scale: hovered1 ? 1 : 1.4 }}
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
            >
              <StaticImage
                className="image"
                src="../../assets/images/curtain-community.jpeg"
                alt="community curtain"
              />
              <CurtainImageMask
                animate={{
                  y: hovered1 ? `140vh` : 0,
                  backgroundColor: bgColor,
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
              />
            </CurtainImage>
          </HomeCurtain>

          {/* SECOND CURTAIN */}
          <HomeCurtain
            onHoverStart={() => {
              setHovered2(!hovered2)
            }}
            onHoverEnd={() => {
              setHovered2(!hovered2)
            }}
          >
            <CurtainContent>
              <CurtainHeading
                animate={{ y: hovered2 ? `-20vh` : 0 }}
                transition={{
                  duration: 1.4,
                  ease: [0.6, 0.01, -0.05, 0.9],
                }}
              >
                <h2>02</h2>
                <h3>Making a</h3>
                <h3>Difference</h3>
              </CurtainHeading>
              <CurtainCover>
                <CurtainText
                  animate={{ y: hovered2 ? `-20vh` : 0 }}
                  transition={{
                    duration: 1.4,
                    ease: [0.6, 0.01, -0.05, 0.9],
                  }}
                  className="difference"
                >
                  <p>{content.difference}</p>
                </CurtainText>
                <CurtainContentMask
                  animate={{
                    y: hovered2 ? `100vh` : 0,
                    backgroundColor: bgColor,
                  }}
                  transition={{
                    y: { delay: 0.2, duration: 1, ease: "easeOut" },
                    duration: 1,
                    ease: "easeOut",
                  }}
                />
              </CurtainCover>
            </CurtainContent>
            <CurtainImage
              animate={{ scale: hovered2 ? 1 : 1.4 }}
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
            >
              <StaticImage
                className="image"
                src="../../assets/images/curtain-difference.jpeg"
                alt="difference curtain"
              />
              <CurtainImageMask
                animate={{
                  y: hovered2 ? `140vh` : 0,
                  backgroundColor: bgColor,
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
              />
            </CurtainImage>
          </HomeCurtain>

          {/* THIRD CURTAIN */}
          <HomeCurtain
            onHoverStart={() => {
              setHovered3(!hovered3)
            }}
            onHoverEnd={() => {
              setHovered3(!hovered3)
            }}
          >
            <CurtainContent>
              <CurtainHeading
                animate={{ y: hovered3 ? `-20vh` : 0 }}
                transition={{
                  duration: 1.4,
                  ease: [0.6, 0.01, -0.05, 0.9],
                }}
              >
                <h2>03</h2>
                <h3>Appreciating</h3>
                <h3>Culture</h3>
                <h3>& Cuisine</h3>
              </CurtainHeading>
              <CurtainCover>
                <CurtainText
                  animate={{ y: hovered3 ? `-20vh` : 0 }}
                  transition={{
                    duration: 1.4,
                    ease: [0.6, 0.01, -0.05, 0.9],
                  }}
                  className="food"
                >
                  <p>{content.food}</p>
                </CurtainText>
                <CurtainContentMask
                  animate={{
                    y: hovered3 ? `100vh` : 0,
                    backgroundColor: bgColor,
                  }}
                  transition={{
                    y: { delay: 0.2, duration: 1, ease: "easeOut" },
                    duration: 1,
                    ease: "easeOut",
                  }}
                />
              </CurtainCover>
            </CurtainContent>
            <CurtainImage
              animate={{ scale: hovered3 ? 1 : 1.4 }}
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
            >
              <StaticImage
                className="image"
                src="../../assets/images/curtain-food.jpeg"
                alt="food curtain"
              />
              <CurtainImageMask
                animate={{
                  y: hovered3 ? `140vh` : 0,
                  backgroundColor: bgColor,
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
              />
            </CurtainImage>
          </HomeCurtain>
        </Flex>
      </HomeRevealSection>
    </>
  )
}

export default HomeReveal
