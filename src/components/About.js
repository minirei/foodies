import React from "react"

// Styles
import { SubPageContainer, SubPageSection } from "../styles/subPageStyles"
import { Container } from "../styles/globalStyles"

// Context
import { useGlobalStateContext } from "../context/globalContext"

const About = () => {
  const { isMobile } = useGlobalStateContext()
  return (
    <SubPageContainer className={`${isMobile && "mobile"}`}>
      <Container>
        <div className={`wrapper`}>
          <SubPageSection>
            <h3>About the Team</h3>
            <p>
              Hey There, we’re Soong and Rei, two individuals from Singapore!
            </p>
            <p>
              Growing up in a country where our cuisine is as diverse as our
              culture, our love for food has inspired us to start a food-based
              NFT project.
            </p>
            <p>
              Mirroring Singapore where people from vastly different communities
              share a common thread in the food we indulge, it is our goal to
              build a virtual town where Foodies from all walks of life can have
              an immersive and enriching experience!
            </p>
            <p>
              We are immensely committed to the development of this project and
              community, and are so excited for you to{" "}
              <a
                href="https://discord.gg/9Qttw23Zs2"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                join us
              </a>{" "}
              for the inception of Foodie Town!
            </p>
          </SubPageSection>
          <SubPageSection>
            <h3>Token Policy</h3>
            <p>
              We follow{" "}
              <a
                href="https://github.com/cardano-foundation/CIPs/blob/master/CIP-0025/CIP-0025.md"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                CIP-25
              </a>
              , the NFT metadata standard on Cardano, which was created by
              SpaceBudz. Images are stored on IPFS and you find the image link
              to your Foodie inside its metadata.
            </p>
            <p>
              Please ensure the validity of your Foodie! Our Policy ID:
              <br />
              16b8174d4cda3468d0566969b654979a26260cb91c8754b540ca7393
            </p>
          </SubPageSection>
          <SubPageSection>
            <h3>Contact Us</h3>
            <p>
              Do you have any queries or wish to collaborate? Contact us at:{" "}
              <strong>foodiescnft@gmail.com</strong>
            </p>
          </SubPageSection>
        </div>
      </Container>
    </SubPageContainer>
  )
}

export default About
