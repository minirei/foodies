import React from "react"

// Styles
import {
  SubPageContainer,
  SubPageSection,
} from "../styles/subPageStyles"
import { Container } from "../styles/globalStyles"

// Context
import { useGlobalStateContext } from "../context/globalContext"

const FoodieWars = () => {
  const { isMobile } = useGlobalStateContext()
  return (
    <SubPageContainer className={`${isMobile && "mobile"}`}>
      <Container>
        <SubPageSection>
          <h3>Foodie Wars</h3>
          <p>
            Hello nice to see you here. We're in the midst of finalising our
            plan for Foodie Wars!
          </p>
          <p>Watch this space.</p>
        </SubPageSection>
      </Container>
    </SubPageContainer>
  )
}

export default FoodieWars
