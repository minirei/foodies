import React from "react"
import { StaticImage } from "gatsby-plugin-image"

// Styles
import { Flex } from "../../styles/globalStyles"
import {
  HomeRevealSection,
  HomeCurtain,
  CurtainContent,
  CurtainHeading,
  CurtainText,
  CurtainContentMask,
  CurtainImage,
  CurtainImageMask,
} from "../../styles/curtainStyles"

const HomeReveal = () => {
  return (
    <>
      <HomeRevealSection>
        <Flex spaceBetween>
          <HomeCurtain>
            <CurtainContent>
              <CurtainHeading>
                <p>01</p>
                <h1>Vibrant,</h1>
                <h1>Sustainable</h1>
                <h1>Community</h1>
              </CurtainHeading>
              <CurtainText>
                <p>
                  Here at Foodies, we vow to build a vibrant and sustainable
                  community with events to look forward to every month. Take a
                  look at our Roadmap for all the upcoming plans we have for
                  Foodie Town!
                </p>
              </CurtainText>
              <CurtainContentMask />
            </CurtainContent>
            <CurtainImage>
              <StaticImage />
              <CurtainImageMask />
            </CurtainImage>
          </HomeCurtain>

          <HomeCurtain>
            <CurtainHeading>
              <p>02</p>
              <h1>Making A</h1>
              <h1>Difference</h1>
            </CurtainHeading>
            <CurtainText>
              <p>
                5% of all Foodies proceeds from start to end will be donated to
                food charities around the world as selected by the community.
                Foodies will not only feed those in need, but create joy and fun
                for all Foodie holders.
              </p>
            </CurtainText>
            <CurtainContentMask />
          </HomeCurtain>

          <HomeCurtain>
            <CurtainHeading>
              <p>03</p>
              <h1>Appreciating</h1>
              <h1>Culture</h1>
              <h1>& Cuisine</h1>
            </CurtainHeading>
            <CurtainText>
              <p>
                This project centres around food, even the art itself. The
                Foodies Community would like to enable the appreciation of food
                from various cultures via Foodie Parties as well as our Discord
                Channel.
              </p>
            </CurtainText>
            <CurtainContentMask />
          </HomeCurtain>
        </Flex>
      </HomeRevealSection>
    </>
  )
}

export default HomeReveal
