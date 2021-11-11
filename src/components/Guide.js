import React from "react"

// Styles
import { SubPageContainer, SubPageSection } from "../styles/subPageStyles"
import { Container } from "../styles/globalStyles"

// Context
import { useGlobalStateContext } from "../context/globalContext"

const Guide = () => {
  const { isMobile } = useGlobalStateContext()
  return (
    <SubPageContainer className={`${isMobile && "mobile"}`}>
      <Container>
        <div className={`wrapper`}>
          <SubPageSection>
            <h3>How to Mint</h3>
            <p>
              1. Set up a Cardano (Shelley Era) Wallet (e.g. Daedalus, Nami,
              Yoroi, Adalite) and transfer ADA from a crypto exchange into your
              Cardano wallet of choice.
            </p>
            <p>
              2. At launch (16 Dec, 3pm UTC), our wallet address will ONLY be
              available on:
              <li>This Website</li>
              <li>Our Discord server under the #announcements channel</li>
              <li>Our Twitter account @Foodies_CNFT</li>
            </p>
            <p>
              3. Send exactly 45 ADA from your Cardano Wallet to the wallet
              address stated. DO NOT send any ADA from an exchange, your NFT
              will be lost forever.
            </p>
            <p>
              4. Minting will take place shortly after, where a Foodie will be
              sent to your wallet.
            </p>
            <p>
              5. Once minting is over, our wallet address will stay up for 24
              hours. This is solely for issuing refunds. DO NOT send any ADA to
              this address after the mint as it will no longer be monitored.
            </p>
          </SubPageSection>
          <SubPageSection>
            <h3>Take Note:</h3>
            <p>
              1. Please watch out for scammers. Do not do not rush or panic. If
              you have any doubts, our Foodies team will be working around the
              clock on launch to offer our support.
            </p>
            <p>
              2. We will not post the address in any open-chat areas in Discord.
              It will only be posted in the read-only #announcements channel.
            </p>
            <p>
              3. We will not DM you first regarding the mint on{" "}
              <strong style={{ fontWeight: 600 }}>any</strong> platform.
            </p>
            <p>
              4. We cannot help you if you send ADA to an address which is not
              owned by us.
            </p>
          </SubPageSection>
        </div>
      </Container>
    </SubPageContainer>
  )
}

export default Guide
