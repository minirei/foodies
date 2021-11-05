import { motion, AnimatePresence } from "framer-motion"
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

// Styles
import { HomeCarouselSection } from "../../styles/carouselStyles"

const HomeCarousel = () => {
  const { launch } = useStaticQuery(
    graphql`
      query {
        launch: file(relativePath: { eq: "hero.jpeg" }) {
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

  //   const images = [launch, party, kitchen, supply, wars]
  const image = getImage(launch)

  return (
    <>
      <HomeCarouselSection>
        <div className="wrapper">
          <GatsbyImage className="image" image={image} alt=""></GatsbyImage>
        </div>
      </HomeCarouselSection>
    </>
  )
}

export default HomeCarousel
