import { StaticImage } from "gatsby-plugin-image"
import React from "react"

// Components
import { Container, Flex } from "../../styles/globalStyles"
import {
  HomeAboutSection,
  HomeAboutContent,
  HomeAboutImage,
} from "../../styles/homeStyles"

const HomeAbout = () => {
  return (
    <>
      <HomeAboutSection>
        <Container>
          <Flex spaceEvenly>
            <HomeAboutContent>
              <h3>Welcome to FOODIES: An NFT Project, <strong>but so much more</strong>.</h3>
              <p>
                Food is something that connects us universally. Perhaps it has
                to do with how we need it to live. But perhaps it can be for
                much, much more than survival. Here at Foodies, we bring Food to
                life!
              </p>
              <p>
                Foodies will live in Foodie Town, a bustling hub with a variety
                of hotspots and activities such as: Foodie Kitchen, Foodie
                Parties, and Foodie Wars!
              </p>
            </HomeAboutContent>
            <HomeAboutImage>
              <StaticImage
                className="image"
                src="../../assets/images/foodie-about.png"
                alt="foodie about"
                objectFit="cover"
              />
            </HomeAboutImage>
          </Flex>
        </Container>
      </HomeAboutSection>
    </>
  )
}

export default HomeAbout
