import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"

// Styles
import { Container, Flex } from "../../styles/globalStyles"
import {
  HomeLaunchSection,
  HomeLaunchContent,
  Marquee,
  HomeLaunchGallery,
  GalleryImages,
  HomeLaunchImage,
} from "../../styles/launchStyles"

const AnimatedLetters = ({ title }) => {
  return (
    <span className="rowTitle">
      {[...title].map(letter => (
        <span className="rowLetter" key={letter}>
          {letter}
        </span>
      ))}
    </span>
  )
}

AnimatedLetters.propTypes = {
  title: PropTypes.string.isrequired,
}

const HomeLaunch = () => {
  return (
    <>
      <HomeLaunchSection>
        <Marquee>
          <div className="marqueeInner">
            <AnimatedLetters title={"DECEMBER'21"} />
            <AnimatedLetters title={"DECEMBER'21"} />
            <AnimatedLetters title={"DECEMBER'21"} />
            <AnimatedLetters title={"DECEMBER'21"} />
          </div>
        </Marquee>
        <HomeLaunchContent>
          <Container>
            <Flex vertical center className="launchInfo">
              <h3>THIS FOODIES LAUNCH</h3>
              <p>
                Comprises <strong>10,000</strong> uniquely cooked individuals
                (over <strong>8 categories</strong> and more than{" "}
                <strong>100 traits</strong>) made of <em>real</em>, edible food
                ingredients!
              </p>
              <p>
                Each foodie will belong to 1 of these 4 nationalities:{" "}
                <em>Japanese, Italian, American and Chinese</em>, some of the
                most popular cuisines in the world. Visually-stunning and
                deliciously-prepared, each Foodie embodies the spirit of love,
                diversity, and appreciation of food from various cultures!{" "}
              </p>
            </Flex>
          </Container>
        </HomeLaunchContent>

        <HomeLaunchGallery>
          <Container>
            <h3>
              There are many traits common to all nationalities! <br />
              But each nationality will have certain{" "}
              <strong>rare traits</strong> such as:
            </h3>
          </Container>
          <GalleryImages>
            <HomeLaunchImage>
              <StaticImage
                className="image"
                src="../../assets/images/colosseum.png"
                alt="colosseum"
                objectFit="cover"
              />
              <p>Italy: The Colosseum</p>
            </HomeLaunchImage>
            <HomeLaunchImage>
              <StaticImage
                className="image"
                src="../../assets/images/forbidden-city.png"
                alt="forbidden city"
                objectFit="cover"
              />
              <p>China: The Forbidden City</p>
            </HomeLaunchImage>
            <HomeLaunchImage>
              <StaticImage
                className="image"
                src="../../assets/images/statue-of-liberty.png"
                alt="statue of liberty"
                objectFit="cover"
              />
              <p>USA: The Statue of Liberty</p>
            </HomeLaunchImage>
            <HomeLaunchImage>
              <StaticImage
                className="image"
                src="../../assets/images/kinkaku-ji.png"
                alt="kinkaku ji"
                objectFit="cover"
              />
              <p>Japan: Kinkaku-ji</p>
            </HomeLaunchImage>
          </GalleryImages>
        </HomeLaunchGallery>
      </HomeLaunchSection>
    </>
  )
}

export default HomeLaunch
