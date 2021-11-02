import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

// Styles
import { Flex } from "../../styles/globalStyles"
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
import { motion } from "framer-motion"

const HomeReveal = () => {
  // Animation
  const [hovered1, setHovered1] = useState(false)
  const [hovered2, setHovered2] = useState(false)
  const [hovered3, setHovered3] = useState(false)

  return (
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
          <h3>001 - Our Core Values</h3>
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
                animate={{ y: hovered1 ? `-10vh` : 0 }}
                transition={{
                  duration: 1.4,
                  ease: [0.6, 0.01, -0.05, 0.9],
                }}
              >
                <p>01</p>
                <h1>Vibrant,</h1>
                <h1>Sustainable</h1>
                <h1>Community</h1>
              </CurtainHeading>
              <CurtainCover>
                <CurtainText
                  animate={{ y: hovered1 ? `-10vh` : 0 }}
                  transition={{
                    duration: 1.4,
                    ease: [0.6, 0.01, -0.05, 0.9],
                  }}
                >
                  <p>
                    Here at Foodies, we vow to build a vibrant and sustainable
                    community with events to look forward to every month. Take a
                    look at our Roadmap for all the upcoming plans we have for
                    Foodie Town!
                  </p>
                </CurtainText>
                <CurtainContentMask
                  animate={{ y: hovered1 ? `100vh` : 0 }}
                  transition={{
                    duration: 1.4,
                    ease: "easeOut",
                    delay: 0.1,
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
                src="../../assets/images/baby-panda.jpg"
                alt="community image"
              />
              <CurtainImageMask
                animate={{ y: hovered1 ? `140vh` : 0 }}
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
                animate={{ y: hovered2 ? `-10vh` : 0 }}
                transition={{
                  duration: 1.4,
                  ease: [0.6, 0.01, -0.05, 0.9],
                }}
              >
                <p>02</p>
                <h1>Making a</h1>
                <h1>Difference</h1>
              </CurtainHeading>
              <CurtainCover>
                <CurtainText
                  animate={{ y: hovered2 ? `-10vh` : 0 }}
                  transition={{
                    duration: 1.4,
                    ease: [0.6, 0.01, -0.05, 0.9],
                  }}
                >
                  <p>
                    5% of all Foodies proceeds from start to end will be donated
                    to food charities around the world as selected by the
                    community. Foodies will not only feed those in need, but
                    create joy and fun for all Foodie holders.
                  </p>
                </CurtainText>
                <CurtainContentMask
                  animate={{ y: hovered2 ? `100vh` : 0 }}
                  transition={{
                    duration: 1.4,
                    ease: "easeOut",
                    delay: 0.1,
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
                src="../../assets/images/colosseum.png"
                alt="charity image"
              />
              <CurtainImageMask
                animate={{ y: hovered2 ? `140vh` : 0 }}
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
                animate={{ y: hovered3 ? `-10vh` : 0 }}
                transition={{
                  duration: 1.4,
                  ease: [0.6, 0.01, -0.05, 0.9],
                }}
              >
                <p>03</p>
                <h1>Appreciating</h1>
                <h1>Culture</h1>
                <h1>& Cuisine</h1>{" "}
              </CurtainHeading>
              <CurtainCover>
                <CurtainText
                  animate={{ y: hovered3 ? `-10vh` : 0 }}
                  transition={{
                    duration: 1.4,
                    ease: [0.6, 0.01, -0.05, 0.9],
                  }}
                >
                  <p>
                    This project centres around food, even the art itself. The
                    Foodies Community would like to enable the appreciation of
                    food from various cultures via Foodie Parties as well as our
                    Discord Channel.
                  </p>
                </CurtainText>
                <CurtainContentMask
                  animate={{ y: hovered3 ? `100vh` : 0 }}
                  transition={{
                    duration: 1.4,
                    ease: "easeOut",
                    delay: 0.1,
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
                src="../../assets/images/foodie-town.webp"
                alt="food image"
              />
              <CurtainImageMask
                animate={{ y: hovered3 ? `140vh` : 0 }}
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
