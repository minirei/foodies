import React from "react"
import { StaticImage } from "gatsby-plugin-image"

// Styles
import { SubPageContainer, SubPageSection } from "../styles/subPageStyles"
import { Container } from "../styles/globalStyles"

// Context
import { useGlobalStateContext } from "../context/globalContext"
import { Link } from "gatsby"

const FoodieWars = () => {
  const { isMobile } = useGlobalStateContext()
  return (
    <SubPageContainer className={`${isMobile && "mobile"}`}>
      <Container>
        <div className="wrapper">
          <SubPageSection>
            <h3>Foodie Wars</h3>
            <p>
              To throw some spice and fun into Foodie Town, the Foodie Rulers
              have decided to introduce <strong>Foodie Wars</strong> — a 24 hour
              tournament that will take place once a month!
            </p>
            <StaticImage
              src="../assets/images/wars-king-queen.png"
              alt="king queen"
            />
          </SubPageSection>
          <SubPageSection>
            <p>
              The War Zone will be split into many boxing rings, where Foodies
              who choose to participate will randomly be paired up to fight.
              Just link your wallet to the system, and select your Foodie!
            </p>
            <StaticImage
              src="../assets/images/wars-king-queen.png"
              alt="wars - game screen"
            />
            <div className="caption">
              <p>Game Screen Mockup</p>
            </div>
            <p>
              Go back and forth with your opponent until to bring their Health
              Points (HP) to zero!
            </p>
            <p>
              The winner will receive a randomised trait from the loser in the
              form of a new{" "}
              <Link to="/supply" className="link">
                Foodie Trait NFT
              </Link>
              , as well as their Foodie back in their wallet!
            </p>
            <p>
              The loser will be returned their Foodie as well, but this Foodie
              will not have the trait it previously had before!
            </p>
            <StaticImage
              src="../assets/images/wars-results.png"
              alt="results of foodie wars"
            />
            <div className="caption">
              <p>Results</p>
            </div>
          </SubPageSection>
          <SubPageSection>
            <h3>The Move List</h3>
          </SubPageSection>
          <SubPageSection>
            <h3>Important Details</h3>
          </SubPageSection>
          
        </div>
      </Container>
    </SubPageContainer>
  )
}

export default FoodieWars
