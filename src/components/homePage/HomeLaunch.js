import React from "react"
import { StaticImage } from "gatsby-plugin-image"

// Styles
import { Container, Flex } from "../../styles/globalStyles"
import {
  HomeLaunchSection,
  HomeLaunchContent,
  HomeLaunchGallery,
  GalleryImages,
  HomeLaunchImage,
  HomeLaunchFiller,
} from "../../styles/homeStyles"

const HomeLaunch = () => {
  return (
    <>
      <HomeLaunchSection>
        <HomeLaunchContent>
          <Container>
            <Flex spaceBetween>
              <Flex vertical center className="launchInfo">
                <h3>THIS FOODIES LAUNCH</h3>
                <p>
                  Comprises 10,000 uniquely cooked individuals (over{" "}
                  <strong>8 categories</strong> and more than{" "}
                  <strong>100 traits</strong>) made of - you guessed it - real,
                  edible food ingredients! Each foodie will belong to 1 of these
                  4 nationalities:{" "}
                  <em>Japanese, Italian, American and Chinese</em>, some of the
                  most popular cuisines in the world. Visually-stunning and
                  deliciously-prepared, each Foodie embodies the spirit of love,
                  diversity, and appreciation of food from various cultures!{" "}
                </p>
              </Flex>
              <h1>
                DEC <br />
                2021
              </h1>
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
