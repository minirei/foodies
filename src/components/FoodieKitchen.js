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
            <h3>Foodie Kitchen</h3>
            <div className="videoWrapper">
              <iframe className="video" src="https://youtu.be/4wRVRSweX6c" title="Foodie Kitchen Demo"/>
            </div>
          </SubPageSection>
        </div>
      </Container>
    </SubPageContainer>
  )
}

export default FoodieSupply
