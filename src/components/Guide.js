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
                 
                href="https://daedaluswallet.io/"
              >
                Daedalus
              </a>
              ,{" "}
              <a
                className="link"
                target="_blank"
                 
                href="https://namiwallet.io/"
              >
                Nami
              </a>
              ,{" "}
              <a
                className="link"
                target="_blank"
                 
                href="https://yoroi-wallet.com/"
              >
                Yoroi
              </a>
              ,{" "}
              <a
                className="link"
                target="_blank"
                 
                href="https://adalite.io/"
              >
                AdaLite
              </a>
              ) and transfer at least 45 ADA from a crypto exchange into it.
            </p>
            <p>
              2. On launch <strong>(16 Dec, 4pm UTC)</strong>, our wallet
              address will <strong>ONLY</strong> be available on:
              <li>
                Our{" "}
                <a
                  className="link"
                  target="_blank"
                   
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
              5. Once minting is over, <strong>do not</strong> send any ADA to
              the wallet address as it will no longer be monitored.
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
          <SubPageSection>
            <h3>Useful Tools</h3>
            <p>
              <strong>Crypto Exchanges</strong>: Where you can purchase ADA, and
              transfer the ADA to your Cardano Wallet!
            </p>
            <p>
              <li>
                <a
                  className="link"
                  target="_blank"
                   
                  href="https://coinbase.com"
                >
                  coinbase.com
                </a>
              </li>
              <li>
                <a
                  className="link"
                  target="_blank"
                   
                  href="https://kucoin.com"
                >
                  kucoin.com
                </a>
              </li>
              <li>
                <a
                  className="link"
                  target="_blank"
                   
                  href="https://binance.com/en"
                >
                  binance.com
                </a>
              </li>
              <li>
                <a
                  className="link"
                  target="_blank"
                   
                  href="https://crypto.com"
                >
                  crypto.com
                </a>
              </li>
            </p>
            <p className="addSpacing">
              <strong>Cardano Wallets</strong>: Set up one or multiple cardano
              wallets for free! Send ADA from here to the minting address to
              receive a Foodie NFT in your wallet!
            </p>
            <p>
              <li>
                <a
                  className="link"
                  target="_blank"
                   
                  href="https://daedaluswallet.io/"
                >
                  Daedalus
                </a>
              </li>
              <li>
                <a
                  className="link"
                  target="_blank"
                   
                  href="https://namiwallet.io/"
                >
                  Nami
                </a>
              </li>
              <li>
                <a
                  className="link"
                  target="_blank"
                   
                  href="https://yoroi-wallet.com/"
                >
                  Yoroi
                </a>
              </li>
              <li>
                <a
                  className="link"
                  target="_blank"
                   
                  href="https://adalite.io/"
                >
                  AdaLite
                </a>
              </li>
            </p>
            <p className="addSpacing">
              <a
                className="link"
                target="_blank"
                 
                href="https://pool.pm"
              >
                pool.pm
              </a>
              : Where you can view the NFTs in your Cardano wallets!
            </p>
            <p>
              Once you have received your NFT, view it on{" "}
              <a
                className="link"
                target="_blank"
                 
                href="https://pool.pm"
              >
                pool.pm
              </a>{" "}
              by clicking on the magnifying glass icon on the top-right. Then
              paste your wallet (receiving) address into the search bar.
            </p>
            <p className="addSpacing">
              <a
                className="link"
                target="_blank"
                 
                href="https://cnft.tools"
              >
                cnft.tools
              </a>{" "}
              &{" "}
              <a
                className="link"
                target="_blank"
                 
                href="https://www.tokenref.com/"
              >
                tokenref
              </a>
              : Check out the rarity stats for each trait of your Foodie here!
            </p>
            <p>
              You can even check out the rarity rank of each Foodie, which might
              be useful when deciding which to buy or sell on the secondary
              market!
            </p>
            <p className="addSpacing">
              <strong>CNFT Markets</strong>: You can sell your Foodies here!
            </p>
            <p>
              Missed out on the mint or wish to buy more Foodies? Once minting
              is over, you can also buy more Foodies on the secondary market at
              the links below!
            </p>
            <p>
              <li>
                <a
                  className="link"
                  target="_blank"
                   
                  href="https://cnft.io"
                >
                  cnft.io
                </a>
              </li>
              <li>
                <a
                  className="link"
                  target="_blank"
                   
                  href="https://www.tokhun.io"
                >
                  tokhun.io
                </a>
              </li>
            </p>
          </SubPageSection>
        </div>
      </Container>
    </SubPageContainer>
  )
}

export default Guide
