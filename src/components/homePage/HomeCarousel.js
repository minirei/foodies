import { motion, AnimatePresence } from "framer-motion"
import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

// Styles
import { HomeCarouselSection, CarouselNav } from "../../styles/carouselStyles"

// Animation
const cardAnimation = {
  enter: direction => {
    return {
      x: direction > 0 ? `100vw` : `-100vw`,
    }
  },
  center: {
    zIndex: 10,
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.4,
      ease: "easeInOut",
      
    },
  },
  exit: direction => {
    return {
      zIndex: 0,
      x: direction < 0 ? `100vw` : `-100vw`,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: "easeInOut",
        
      },
    }
  },
}

const HomeCarousel = () => {
  const { launch, party, kitchen, supply, wars } = useStaticQuery(
    graphql`
      query {
        launch: file(relativePath: { eq: "roadmap-launch.jpeg" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              width: 2000
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        party: file(relativePath: { eq: "roadmap-party.jpeg" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              width: 2000
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        kitchen: file(relativePath: { eq: "roadmap-kitchen.jpeg" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              width: 2000
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        supply: file(relativePath: { eq: "roadmap-supply.jpeg" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              width: 2000
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        wars: file(relativePath: { eq: "roadmap-wars.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              width: 2000
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )

  const images = [
    getImage(launch),
    getImage(party),
    getImage(kitchen),
    getImage(supply),
    getImage(wars),
  ]

  const [[card, direction], setCard] = useState([0, 0])
  const paginate = newDirection => {
    if (card + newDirection === images.length) return
    if (card + newDirection < 0) return
    setCard([card + newDirection, newDirection])
  }

  return (
    <>
      <HomeCarouselSection>
      <div className="chapter">
        <h3>004 - Roadmap</h3>
      </div>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={card}
            className="wrapper"
            custom={direction}
            variants={cardAnimation}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <GatsbyImage
              className="image"
              image={images[card]}
              alt=""
              objectPosition="50% 100%"
              loading="eager"
              key={card}
            ></GatsbyImage>
          </motion.div>
        </AnimatePresence>
        <CarouselNav>
          <motion.div
            className="prev"
            onClick={() => {
              paginate(-1)
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="450.284 152.487 391.604 290.307"
              enable-background="new 450.284 152.487 391.604 290.307"
            >
              <g transform="translate(0 -37)">
                <polygon
                  fill="#FFFFFF"
                  points="450.284,311.096 755.958,311.096 667.735,208.821 690.465,189.487 841.889,323.405 
		841.889,345.875 690.465,479.794 667.735,460.459 755.958,357.836 450.284,357.836 	"
                />
              </g>
            </svg>
          </motion.div>
          <motion.div
            className="next"
            onClick={() => {
              paginate(1)
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="450.284 152.487 391.604 290.307"
              enable-background="new 450.284 152.487 391.604 290.307"
            >
              <g transform="translate(0 -37)">
                <polygon
                  fill="#FFFFFF"
                  points="450.284,311.096 755.958,311.096 667.735,208.821 690.465,189.487 841.889,323.405 
		841.889,345.875 690.465,479.794 667.735,460.459 755.958,357.836 450.284,357.836 	"
                />
              </g>
            </svg>
          </motion.div>
        </CarouselNav>
      </HomeCarouselSection>
    </>
  )
}

export default HomeCarousel
