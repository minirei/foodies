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
              1. Set up a Cardano (Shelley Era) Wallet (
              <a
                className="link"
                target="_blank"
                rel="noreferrer"
                href="https://daedaluswallet.io/"
              >
                Daedalus
              </a>
              ,{" "}
              <a
                className="link"
                target="_blank"
                rel="noreferrer"
                href="https://namiwallet.io/"
              >
                Nami
              </a>
              ,{" "}
              <a
                className="link"
                target="_blank"
                rel="noreferrer"
                href="https://yoroi-wallet.com/"
              >
                Yoroi
              </a>
              ,{" "}
              <a
                className="link"
                target="_blank"
                rel="noreferrer"
                href="https://adalite.io/"
              >
                AdaLite
              </a>
              ) and transfer at least 45 ADA from a crypto exchange into it.
            </p>
            <p>
              2. On launch <strong>(16 Dec, 3pm UTC)</strong>, our wallet
              address will <strong>ONLY</strong> be available on:
              <li>
                Our{" "}
                <a
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://foodiescnft.io"
                >
                  Website
                </a>
              </li>
              <li>
                Our{" "}
                <a
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://discord.gg/9Qttw23Zs2"
                >
                  Discord
                </a>{" "}
                server under the <em>#announcements</em> channel
              </li>
              <li>
                Our{" "}
                <a
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/Foodies_CNFT"
                >
                  Twitter
                </a>{" "}
                account @Foodies_CNFT
              </li>
            </p>
            <p>
              3. Send{" "}
              <strong>
                <em>exactly</em>
              </strong>{" "}
              45 ADA from your Cardano Wallet to the wallet address stated.{" "}
              <strong>Do not</strong> send any ADA from an exchange, your NFT
              will be lost{" "}
              <strong>
                <em>forever</em>
              </strong>
              .
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
              1. Please watch out for scammers. Do not rush or panic. If you
              have any doubts, our Foodies team will be working around the clock
              on launch to offer our support.
            </p>
            <p>
              2. We <strong>will not</strong> post the address in any open-chat
              areas on Discord. It will only be posted in the read-only
              <em>
                <strong> #announcements </strong>
              </em>
              channel.
            </p>
            <p>
              3. We <strong>will not</strong> DM you first regarding the mint on{" "}
              <strong>any</strong> platform.
            </p>
            <p>
              4. We <strong>cannot</strong> help you if you send ADA to an
              address which is not owned by us.
            </p>
          </SubPageSection>
        </div>
      </Container>
    </SubPageContainer>
  )
}

export default Guide
