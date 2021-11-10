import React from "react"

// Styles
import { SubPageContainer, SubPageSection } from "../styles/subPageStyles"
import { Container } from "../styles/globalStyles"

// Context
import { useGlobalStateContext } from "../context/globalContext"

const FAQ = () => {
  const { isMobile } = useGlobalStateContext()
  return (
    <SubPageContainer className={`${isMobile && "mobile"}`}>
      <Container>
        <div className={`wrapper`}>
          <SubPageSection>
            <h3>Who are we?</h3>
            <p>
              Hey There, we’re Soong and Rei, two crypto-enthusiasts from
              Singapore!
            </p>
          </SubPageSection>
        </div>
      </Container>
    </SubPageContainer>
  )
}

export default FAQ
