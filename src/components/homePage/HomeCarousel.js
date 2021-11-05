import { motion, AnimatePresence } from "framer-motion"
import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

// Styles
import { HomeCarouselSection, CarouselNav } from "../../styles/carouselStyles"

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
  // const image = getImage(images[1])

  const [[card, direction], setCard] = useState([0, 0])
  const paginate = newDirection => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <>
      <HomeCarouselSection>
        <div className="wrapper">
          <GatsbyImage
            className="image"
            image={images[card]}
            alt=""
            objectPosition="50% 100%"
          ></GatsbyImage>
        </div>
        <CarouselNav>
          <motion.div className="prev">
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
          <motion.div className="next">
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
