import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// Styles
import {
  SubPageContainer,
  SubPageSection,
  ImageArray,
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
            <h3>Foodie Kitchen</h3>
            <div className={`${isMobile && "mobile"} videoWrapper `}>
              <iframe
                className="video"
                src="https://www.youtube.com/embed/4wRVRSweX6c"
                title="Foodie Kitchen Demo"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
              />
            </div>
          </SubPageSection>
          <SubPageSection>
            <p className="addSpacing">
              <strong>Re-cook your Foodies!</strong>
            </p>
            <p>
              Here at the Foodie Kitchen, you will be able to dish up new
              recipes based on your Foodies, customising them according to your{" "}
              <strong>tastes and preferences!</strong>
            </p>
            <p>
              The chefs here at Foodie Town are really skilled and no recipe
              would be too tough for them! Do <strong>read on</strong> to see
              how the Kitchen functions!
            </p>
          </SubPageSection>
          <SubPageSection>
            <h3>Implementation</h3>
            <p className="kitchenStep">#1: Re-cooking 2 Foodies</p>
            <ImageArray kitchen>
              <div className="imageWrapper">
                <StaticImage
                  src="../assets/images/kitchen1-1.png"
                  alt="pre-cooked left"
                  objectFit="cover"
                />
              </div>
              <div className="imageWrapper">
                <StaticImage
                  src="../assets/images/kitchen1-2.png"
                  alt="pre-cooked right"
                  objectFit="cover"
                />
              </div>
              <div className="plus">+</div>
            </ImageArray>
            <p className="addSpacing">
              <ol>
                <li className={`${isMobile && "mobile"}`}>
                  Select the <strong>category</strong> you wish to swap traits
                  under (e.g. <em>headgear</em>)
                </li>
                <li className={`${isMobile && "mobile"}`}>
                  Send <strong>2 Foodie NFTs</strong>, along with the{" "}
                  <strong>Kitchen Gas Fee</strong> to the wallet address
                  specified{" "}
                </li>
                <li className={`${isMobile && "mobile"}`}>
                  Receive 2 Foodies freshly <em>re-cooked</em>!
                </li>
              </ol>
            </p>
            <ImageArray kitchen>
              <div className="imageWrapper">
                <StaticImage
                  src="../assets/images/kitchen1-3.png"
                  alt="pre-cooked left"
                  objectFit="cover"
                />
              </div>
              <div className="imageWrapper">
                <StaticImage
                  src="../assets/images/kitchen1-4.png"
                  alt="pre-cooked right"
                  objectFit="cover"
                />
              </div>
            </ImageArray>
          </SubPageSection>
          <SubPageSection>
            <p className="kitchenStep addSpacing">
              #2: Re-cooking 1 Foodie + 1 Ingredient
            </p>
            <ImageArray kitchen>
              <div className="imageWrapper">
                <StaticImage
                  src="../assets/images/kitchen1-1.png"
                  alt="pre-cooked left"
                  objectFit="cover"
                />
              </div>
              <div className="imageWrapper">
                <StaticImage
                  src="../assets/images/kitchentrait1.png"
                  alt="pre-cooked right"
                  objectFit="cover"
                />
              </div>
              <div className="plus">+</div>
            </ImageArray>
            <p className="addSpacing">
              <ol>
                <li className={`${isMobile && "mobile"}`}>
                  Select the <strong>category</strong> you wish to swap traits
                  under
                </li>
                <li className={`${isMobile && "mobile"}`}>
                  Send <strong>1 Foodie NFT</strong> and{" "}
                  <strong>1 Foodie Ingredient NFT</strong>, along with the{" "}
                  <strong>Kitchen Gas Fee</strong> to the wallet address
                  specified
                </li>
                <li className={`${isMobile && "mobile"}`}>
                  Receive 1 Foodie freshly <em>re-cooked</em>, and 1 Foodie
                  Ingredient that was <em>swapped out</em>!
                </li>
              </ol>
            </p>
            <ImageArray kitchen>
              <div className="imageWrapper">
                <StaticImage
                  src="../assets/images/kitchen1-3.png"
                  alt="pre-cooked left"
                  objectFit="cover"
                />
              </div>
              <div className="imageWrapper">
                <StaticImage
                  src="../assets/images/kitchentrait2.png"
                  alt="pre-cooked right"
                  objectFit="cover"
                />
              </div>
            </ImageArray>
            <p className="centered addSpacing">It's that simple!</p>
          </SubPageSection>
          <SubPageSection>
            <h3>Why Re-cook my Foodie?</h3>
            <p>
              While all Foodies are <em>beautifully and uniquely cooked</em>,
              some of you would want your Foodie to be as rare as can be.
            </p>
            <p>
              The Kitchen allows you to transfer the rarest traits in each
              category to a single Foodie by swapping the common ones out!
            </p>
            <p>
              Not only is this important for{" "}
              <strong>secondary market considerations</strong>, but traits also
              matter in{" "}
              <Link className="link" to="/war">
                Foodie Wars:
              </Link>{" "}
              where higher ingredient rarity gives you an edge in battle!
            </p>
            <p>
              Some holders do not care much about rarity and would just like
              their Foodies to look a certain way — the Foodie Kitchen would be
              perfect for them as well!
            </p>
          </SubPageSection>
        </div>
      </Container>
    </SubPageContainer>
  )
}

export default FoodieSupply
