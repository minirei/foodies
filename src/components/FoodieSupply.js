import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// Styles
import {
  SubPageContainer,
  SubPageSection,
  SupplyExamples,
} from "../styles/subPageStyles"
import { Container } from "../styles/globalStyles"

// Context
import { useGlobalStateContext } from "../context/globalContext"

const FoodieSupply = () => {
  const { isMobile } = useGlobalStateContext()
  return (
    <SubPageContainer className={`${isMobile && "mobile"}`}>
      <Container>
        <div className="wrapper">
          <SubPageSection>
            <h3>
              <strong>Suppliers Come to Town</strong>
            </h3>
            <p>
              Once a month, ingredient suppliers will visit Foodie Town,
              bringing <strong>limited edition traits</strong> each month! These
              limited edition traits will be in the form of{" "}
              <strong>Foodie Ingredient NFTs</strong>, and are available for
              minting <strong>only</strong> for those holding onto Foodies.
            </p>
            <SupplyExamples style={{ height: isMobile ? "25vh" : "" }}>
              <div className="content">
                <div className="imageWrapper">
                  <StaticImage
                    src="../assets/images/supplypage-heart-eyes.png"
                    alt="heart eyes example"
                    objectFit="cover"
                  />
                </div>
                <div className="caption">
                  <p>
                    Eyes: <em>Heart Eyes</em>
                  </p>
                </div>
              </div>
              <div className="content">
                <div className="imageWrapper">
                  <StaticImage
                    src="../assets/images/supplypage-herbs.png"
                    alt="herbs example"
                    objectFit="cover"
                  />
                </div>
                <div className="caption">
                  <p>
                    Hands: <em>Herbs</em>
                  </p>
                </div>
              </div>
              <div className="content">
                <div className="imageWrapper">
                  <StaticImage
                    src="../assets/images/supplypage-ninja-headband.png"
                    alt="ninjga example"
                    objectFit="cover"
                  />
                </div>
                <div className="caption">
                  <p>
                    Headgear: <em>Ninja</em>
                  </p>
                </div>
              </div>
            </SupplyExamples>
          </SubPageSection>
          <SubPageSection>
            <h3>
              <strong>Implementation</strong>
            </h3>
            <p>
              One new Foodie Ingredient <strong>per category</strong> will be
              released per month, with each having a{" "}
              <strong>small fixed supply</strong>. These <strong>NFTs</strong>{" "}
              will be thrown into the same minting pool, which Foodie holders
              can mint from to receive one at <strong>random</strong>!
            </p>
            <p>
              Holders are free to mint{" "}
              <strong>as many Foodie Ingredient NFTs</strong> as they want,
              until they are sold out.
            </p>
          </SubPageSection>
          <SubPageSection>
            <h3>Utility of Foodie Trait NFTs</h3>
            <p>
              These traits that you mint can then be added into your recipe to
              re-cook your Foodie (checkout{" "}
              <Link className="link" to="/about">
                Foodie Kitchen
              </Link>
              !), resold on the secondary market or kept for future use!
            </p>
            <p>
              It’s also important to note that while we are introducing new
              Foodie traits,{" "}
              <strong>the total number of Foodies remains constant!</strong>{" "}
            </p>
            <p>
              This means that the more common traits will be swapped out with
              these new limited edition traits over time! Essentially, Foodies
              will become <strong>even more diverse and unique!</strong>
            </p>
          </SubPageSection>
        </div>
      </Container>
    </SubPageContainer>
  )
}

export default FoodieSupply
