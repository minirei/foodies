import React from "react"

// Styles
import { SubPageContainer, SubPageSection } from "../styles/subPageStyles"
import { Container } from "../styles/globalStyles"

// Context
import { useGlobalStateContext } from "../context/globalContext"

const FoodieParties = () => {
  const { isMobile } = useGlobalStateContext()
  return (
    <SubPageContainer className={`${isMobile && "mobile"}`}>
      <Container>
        <div className="wrapper">
          <SubPageSection>
            <h3>
              <strong>Foodie Parties</strong>
            </h3>
            <p>
              <strong>Foodie Parties</strong> is an integral part of Foodie
              Town! The Foodie Rulers love fun and laughter over hearty meals.
              Hence, they distribute <strong>Foodie Ticket NFTs</strong> to{" "}
              <strong>5%</strong> of Foodies{" "}
              <strong>every month</strong>!
            </p>
            <p>
              <strong>Foodie Tickets</strong> will be airdropped to wallets
              holding Foodie NFTs, which are used to claim{" "}
              <strong>real food vouchers</strong> at outlets all around the
              world!
            </p>
            <p>
              <strong>
                The more Foodies you have, the higher the chances of receiving a
                Foodie Ticket!
              </strong>{" "}
              If you’re lucky, you might receive more than one depending on how
              many Foodies you have in your wallet!
            </p>
          </SubPageSection>
          <SubPageSection>
            <h3>Implementation</h3>
            <p className="question firstChild">Global Coverage</p>
            <p>
              Closer to launch, we will survey the Foodie community for your
              countries of origin, as well as suggestions for food outlets you'd
              like us to partner with!
              <p>
                Us Head Chefs will personally contact these food outlets to{" "}
                <strong>ensure a wide spread of cuisines</strong> for all
                Foodies to choose from and enjoy!
              </p>
              <p>
                {" "}
                Furthermore, if your country isn't an option for the month's
                Foodie Party, we'll{" "}
                <strong>ensure that it'll be available</strong> in the next
                party!
              </p>
            </p>
            <p className="question">The Redemption Process</p>
            <p>
              Every month, we will release a list of food outlets that we
              partner with. Those holding onto <strong>Foodie Tickets</strong>{" "}
              are to send them to a <strong>wallet address provided</strong>. On
              a separate Google Form, fill in the following fields:
              <ol>
                <li>
                  <strong>Transaction ID</strong>
                </li>
                <li>
                  Which <strong>food outlet</strong> from the month’s list you'd
                  like to redeem a food voucher from
                </li>
                <li>
                  <strong>Email</strong>
                </li>
                <li>
                  <strong>Discord Handle</strong>
                </li>
              </ol>
            </p>
            <p>
              Once done, we will process the information and send you the online
              food voucher via email!
            </p>
            <p className="question">No Expiry</p>
            <p>
              Foodie Tickets <strong>do not expire!</strong> Even if:
              <ul>
                <li>
                  All the outlets provided in the month’s list are not available
                  in your country
                </li>
                <li>You do not feel like using your Foodie Ticket</li>{" "}
              </ul>
              Feel free to keep it for <strong>future use</strong>, or{" "}
              <strong>sell it </strong>on the secondary market!
            </p>
            <p className="addSpacing">
              We hope you’re excited to receive your Foodie Tickets to
              participate in Foodie Parties and{" "}
              <strong>connect with other Foodies over hearty meals</strong>!
            </p>
          </SubPageSection>
        </div>
      </Container>
    </SubPageContainer>
  )
}

export default FoodieParties
