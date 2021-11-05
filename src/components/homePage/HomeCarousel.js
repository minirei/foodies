import { motion, AnimatePresence } from "framer-motion"
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

// Styles
import { HomeCarouselSection } from "../../styles/carouselStyles"
import { cover } from "jimp"

const HomeCarousel = () => {
  const { launch, party, kitchen, supply, wars } = useStaticQuery(
    graphql`
      query {
        launch: file(relativePath: { eq: "roadmap-launch.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              width: 2000
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        party: file(relativePath: { eq: "roadmap-party.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              width: 2000
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        kitchen: file(relativePath: { eq: "roadmap-kitchen.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              width: 2000
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        supply: file(relativePath: { eq: "roadmap-supply.png" }) {
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

  const images = [launch, party, kitchen, supply, wars]
  const image = getImage(images[1])

  return (
    <>
      <HomeCarouselSection>
        <div className="wrapper">
          <GatsbyImage
            className="image"
            image={image}
            alt=""
            objectPosition="50% 100%"
          ></GatsbyImage>
        </div>
      </HomeCarouselSection>
    </>
  )
}

export default HomeCarousel
