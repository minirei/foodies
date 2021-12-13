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
            <p>
              The War Zone will be split into many boxing rings, where Foodies
              who choose to participate will randomly be paired up to fight.
              Simply link your wallet to the system, and select your Foodie!
            </p>
            <StaticImage
              src="../assets/images/wars-boxing-ring.png"
              alt="wars - boxing ring"
            />
          </SubPageSection>
          <SubPageSection>
            <h3>Gameplay</h3>
            <StaticImage
              src="../assets/images/wars-gamescreen.png"
              alt="wars - game screen"
            />
            <div className="caption">
              <p>Game Screen Mockup</p>
            </div>
            <p>
              Go back and forth with your opponent until to bring their Health
              Points (HP) to <strong>zero</strong>!
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
              will <strong>lose</strong> a trait it previously had before!
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
            <p className="kitchenStep">Attack</p>
            <p>
              Foodies attack with the item in their <strong>hands</strong>! For
              weapon-less Foodies, they will fight with their{" "}
              <em>bare fists</em>!
            </p>
            <p>
              Attack stats vary based on what Foodies carry in their{" "}
              <strong>hands</strong>!
            </p>
            <p className="kitchenStep">Boost</p>
            <p>
              Traits offer boosts to a Foodie. You may use a turn to boost your
              attack & defence stats!
            </p>
            <p className="kitchenStep">Run</p>
            <p>
              If a Foodie is really terrified of their opponent, running away is
              an option!
            </p>
            <p>
              In doing so, the Foodie has to <strong>choose</strong> one trait
              to give to their opponent as a form of compensation. This is as
              opposed to a <em>randomised</em> trait in the event of a loss.
            </p>
            <p className="kitchenStep">Side Note: Defence</p>
            <p>
              How well your Foodie defends against an opponent's attacks depends
              on the <strong>body</strong>!
            </p>
            <p>
              For example, a naked Foodie will lose more HP than a clothed
              Foodie if they both receive the same attack!
            </p>
          </SubPageSection>
          <SubPageSection>
            <h3>Important Details</h3>
            <p>
              The main factor which determines the <em>power</em> of your traits
              (Attacks/Boosts/Defence) depend mostly on the rarity of the
              traits!
            </p>
            <p>
              <strong>However</strong>, The Foodie Rulers would like to
              emphasize that Foodie Wars must allow for everyone, strong or
              weak, to stand a chance to win!
            </p>
            <StaticImage
              src="../assets/images/wars-king-queen-2.png"
              alt="king queen 2"
            />
            <p>
              As such,{" "}
              <strong>some common traits will have high stats as well!</strong>{" "}
              These traits will randomly get selected each month!
            </p>
          </SubPageSection>
          <SubPageSection>
            <p>
              Foodie Wars allow your Foodie to have a chance to acquire a new
              trait and upgrade itself! With the newly won trait, head over to
              the{" "}
              <Link className="link" to="/kitchen">
                Foodie Kitchen
              </Link>{" "}
              to recook your Foodie!
            </p>
          </SubPageSection>
        </div>
      </Container>
    </SubPageContainer>
  )
}

export default FoodieWars
