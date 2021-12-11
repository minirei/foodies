import React from "react"
import { Link } from "gatsby"

// Styles
import { SubPageContainer, SubPageSection } from "../styles/subPageStyles"
import { Container } from "../styles/globalStyles"

// Context
import { useGlobalStateContext } from "../context/globalContext"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const FAQ = () => {
  const { isMobile } = useGlobalStateContext()
  return (
    <SubPageContainer className={`${isMobile && "mobile"}`}>
      <Container>
        <div className={`wrapper`}>
          <SubPageSection>
            <h3>FAQ</h3>
            <p className="question firstChild">When will the drop happen?</p>
            <p>
              The first Foodies launch, with 2,500 Foodies available for
              minting, will take place on <strong>17 Dec, 4pm UTC</strong>. From
              now till then, we will be focusing on growing the community and
              ensuring most people in the CNFT space know about Foodies!
            </p>
            <p className="question">How do I mint a Foodie?</p>
            <p>
              On launch day, a wallet address will be released on this website
              and our socials. Each foodie will cost <strong>45 ADA</strong>.
              Refer to our{" "}
              <Link to="/guide" className="link">
                guide
              </Link>{" "}
              for more details!
            </p>
            <p className="question">How are the 2,500 Foodies cooked?</p>
            <p>
              Foodies are made of real food ingredients. Each trait was
              exquisitely molded from and shaped with food! These traits have
              been algorithmically randomised to create 2,500{" "}
              <strong>unique</strong> Foodies from billions of possible
              combinations. These are the chosen ones that will live on the
              blockchain in Foodie Town!
            </p>
            <p className="question">How many Foodies will there be in total?</p>
            <p>
              There will be 10,000 Foodies in total after 4 Foodies drops! The
              reason why we chose 10,000 is that we envision a large community
              here at Foodie Town, for the future and longevity of the project
              (eg. Foodie Kitchen and Foodie Wars, where it'll be way more fun
              with large numbers of holders participating!) We also have utmost
              confidence in our unique project art and the immense potential of
              our roadmap!
            </p>
            <p className="question">
              Why not release all 10,000 Foodies in the first drop?
            </p>
            <p>
              As part of our goals for Foodie Town to be sustainable and
              flourishing, we have decided to release Foodies in 4 batches of
              2,500 each. By doing so, we will be better able to push demand
              above supply, building confidence among Foodie holders and
              incentivising more people to hold Foodies.
            </p>
            <p>
              Secondly, we want more people within the CNFT community to be able
              to learn about this project and join Foodie Town before we sell
              out. With our first drop, we hope that Foodie Holders would spread
              the word and change their Discord/Twitter PFPs!
            </p>
            <p className="question">How does the rarity work in Foodies?</p>
            <p>
              There are over 100 traits spread across 8 categories in total.
              Even though certain traits are set to be more rare than others,
              you can be assured that each Foodie is unique and wonderfully
              made! A rarity table will be released right after minting, and we
              will be listed on{" "}
              <a
                rel="noopener"
                className="link"
                target="_blank"
                href="https://cnft.tools/"
              >
                cnft.tools
              </a>
              , where you will be able to see your Foodies’ rarity stats.
            </p>
            <p className="question">How many Foodies can I mint?</p>
            <p>
              You can mint only <strong>one Foodie per transaction</strong>, but
              are free to mint as many Foodies as you’d like per wallet.
            </p>
            <p className="question">What can I do with my Foodies?</p>
            <p>
              Each Foodie is an esteemed member of Foodie Town, and will be
              given the exclusive rights to participate in all activities
              within. For more details, please refer to our{" "}
              <AnchorLink to="/#roadmap" className="link">
                roadmap
              </AnchorLink>
              .{" "}
            </p>
            <p>
              If you’ve had enough fun in Foodie Town and are willing to pass
              your Foodie on to the next holder, you can do so via Cardano NFT
              marketplaces such as{" "}
              <a
                rel="noopener"
                className="link"
                target="_blank"
                href="https://cnft.io/"
              >
                cnft.io
              </a>{" "}
              &{" "}
              <a
                rel="noopener"
                className="link"
                target="_blank"
                href="https://tokhun.io/"
              >
                tokhun.io
              </a>
              , or escrows on{" "}
              <a
                rel="noopener"
                className="link"
                target="_blank"
                href="https://discord.gg/9Qttw23Zs2"
              >
                Discord
              </a>
              !
            </p>
            <p className="question">How many Foodies will your team keep?</p>
            <p>
              The Foodies team will reserve 30 Foodies, solely to mint them for
              community giveaways/airdrops. With regard to our personal
              collections, we will have a limit of 5 Foodies each (only 2 of us
              in the team). We will be taking part in the Foodies Launch with
              the community in order to ensure fairness!
            </p>
            <p className="question">
              Why Cardano instead of other blockchains?
            </p>
            <p>
              We have decided on{" "}
              <a
                rel="noopener"
                className="link"
                target="_blank"
                href="https://cardano.org/"
              >
                Cardano
              </a>{" "}
              for two reasons:
              <li>
                One, the low gas fees will not put a dent in your wallet. A
                lower barrier to purchasing NFTs also leads to greater liquidity
                in the markets!
              </li>
              <li>
                Two, the Cardano NFT ecosystem is still young and growing. We
                would love to contribute to this space with Foodies, and draw
                more people into CNFTs as a whole since we have greatly
                benefited from them too!
              </li>
            </p>
            <p className="question">How may I get in touch?</p>
            <p>
              You can contact us through chat in{" "}
              <a
                rel="noopener"
                className="link"
                target="_blank"
                href="https://discord.gg/9Qttw23Zs2"
              >
                Discord
              </a>{" "}
              or{" "}
              <a
                rel="noopener"
                className="link"
                target="_blank"
                href="https://twitter.com/Foodies_CNFT"
              >
                Twitter
              </a>
              . Our official email is <strong>foodiescnft@gmail.com</strong>
            </p>
          </SubPageSection>
          <SubPageSection>
            <h3>How will the roadmap be achieved?</h3>
            <p>
              We personally believe that the most exciting part of this project
              is in fulfilling each stage of the roadmap. This will ensure that
              all Foodies holders, regardless of how rare their Foodie is, will
              stand to gain much from Foodie Town. We aim to build an ecosystem
              that is intertwined across all stages.
            </p>
            <p className="question">Foodie Parties</p>
            <p>
              The moment the launch is over, we will start contacting various
              food outlets from different countries to secure food vouchers, and
              distribute the first set of Foodie Party NFTs{" "}
              <strong>the following month</strong> to 5% of all holders!
            </p>

            <p className="question">Suppliers Come to Town</p>
            <p>
              Each month we will be designing a set of new special traits (with
              limited supply) as separate NFTs, which will be available for
              minting. These traits will then be available for resale or
              recooking in the Foodie Kitchen.
            </p>
            <p className="question">Foodie Kitchen</p>
            <p>
              We will start working on the development of Foodie Kitchen using
              smart contracts. If needed the team will hire more developers
              after the launch to ensure that the Foodie Kitchen runs smoothly.
            </p>
            <p className="question">Foodie Wars</p>
            <p>
              After the launch, we will be hiring a game developer to bring
              Foodie Wars to life. Once the game itself has been sorted out, our
              development team will then implement more code and smart contracts
              in order for the NFTs to be received from, burnt, re-minted, and
              sent back to players.
            </p>
            <p className="question">Food for Good</p>
            <p>
              Once the launch ends, we will be donating 5% of our proceeds to
              the UN World Food Programme. Similarly, any profits that Foodies
              generate every month will continue to be donated to food-related
              charities.
            </p>
          </SubPageSection>
        </div>
      </Container>
    </SubPageContainer>
  )
}

export default FAQ
