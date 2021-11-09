import { motion, AnimatePresence } from "framer-motion"
import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

// Styles
import {
  HomeCarouselSection,
  CarouselContent,
  CarouselBullets,
  CarouselNav,
} from "../../styles/carouselStyles"

// Context
import { useGlobalStateContext } from "../../context/globalContext"

// Animation
const cardAnimation = {
  enter: direction => {
    return {
      x: direction > 0 ? `100vw` : `-100vw`,
    }
  },
  center: {
    zIndex: 10,
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.8,
      ease: "easeInOut",
    },
  },
  exit: direction => {
    return {
      zIndex: 0,
      x: direction < 0 ? `100vw` : `-100vw`,
      transition: {
        duration: 0.8,
        delay: 0.8,
        ease: "easeInOut",
      },
    }
  },
}

const textAnimation = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 1.4,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const HomeCarousel = () => {
  const { isMobile } = useGlobalStateContext()
  const { launch, party, kitchen, supply, wars, future, charity } =
    useStaticQuery(
      graphql`
        query {
          launch: file(relativePath: { eq: "roadmap-launch.png" }) {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                width: 2420
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          party: file(relativePath: { eq: "roadmap-party.png" }) {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                width: 2420
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          kitchen: file(relativePath: { eq: "roadmap-kitchen.png" }) {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                width: 2420
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          supply: file(relativePath: { eq: "roadmap-supply.png" }) {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                width: 2420
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          wars: file(relativePath: { eq: "roadmap-wars.png" }) {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                width: 2420
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          future: file(relativePath: { eq: "roadmap-future.png" }) {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                width: 2420
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          charity: file(relativePath: { eq: "roadmap-charity.png" }) {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                width: 2420
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      `
    )

  const images = [
    getImage(launch),
    getImage(party),
    getImage(kitchen),
    getImage(supply),
    getImage(wars),
    getImage(future),
    getImage(charity),
  ]

  const content = {
    title: [
      "The Launch (Dec '21)",
      "Foodie Parties (Jan '22)",
      "Suppliers Come to Town (Q1 '22)",
      "Foodie Kitchen (Q2 '22)",
      "Foodie Wars (Q3 '22)",
      "Future Drops & Collabs",
      "Bonus: Food For Good",
    ],
    paragraph: [
      "10,000 unique Foodies arrive at Foodie Town. They begin to find their worth as they behold the rapid development of their town. Meanwhile, fun initiatives such as contests and giveaways will be carried out on socials. Along the way, royalties that the team receives from the sale of Foodies on the secondary market will be distributed to Foodie holders as well.",
      "Once a month, 500 Foodies will be airdropped an NFT which can be used to redeem a food voucher at outlets around the world. There will be a list of outlets generated for Foodies to choose from, so meet your fellow foodies for a meal on the last day of each month! If it so happens that none of the food outlets on the list that month interest you, you can either sell the NFT, or keep it for future Foodie Parties (no expiry date!)",
      "Once a month, ingredient suppliers will visit Foodie Town, bringing limited edition traits each month! These limited edition traits will be in the form of NFTs, and are available for minting ONLY for those holding onto Foodies. The traits can then be added into your recipe to re-cook your Foodie, resold on the secondary market or kept for future use!",
      "Re-cook your Foodies! For a small “gas” fee, the Foodie Kitchen will allow you to either swap traits that belong to the same category between 2 Foodies or swap out a trait in your Foodie with another trait in the same category. By doing so, you receive the new Foodie NFT as well as a new trait NFT. Just send us your new recipe and NFTs, and we'll return them freshly re-cooked!",
      "A monthly, free-for-all 24h war where Foodies battle each other for a chance to upgrade themselves! 2 Foodies will randomly be matched with each other in a game and play until the HP of one goes to 0. The winner of each battle will win one trait from the loser. The trait can either be kept as an NFT, or added into your Foodie recipe for re-cooking in the Kitchen!",
      "Depending on the overall sentiment of the community, we may launch new Foodies series and collaborate with various food chains or NFT projects, which Foodie holders will be given priority access to. The possibilities are endless here at Foodie Town!",
      `Throughout the entirety of this project, we will be donating 5% of all proceeds to the UN World Food Programme. We recognise the potential of this project in contributing directly to those suffering in society, in an area close to our hearts. We feel that it would be incredibly meaningful for food art to make a difference and take decisive action against the causes and effects of hunger.`,
    ],
  }

  const [[card, direction], setCard] = useState([0, 0])
  const paginate = newDirection => {
    if (card + newDirection < 0) setCard([6, newDirection])
    else if (card + newDirection === images.length) setCard([0, newDirection])
    else setCard([card + newDirection, newDirection])
  }

  return (
    <>
      <HomeCarouselSection
        style={{ height: isMobile ? "90vh" : "" }}
        id="roadmap"
      >
        <div className={`${card === 0 && "visible"} chapter`}>
          <h1>003 - Roadmap</h1>
        </div>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={card}
            className="wrapper"
            custom={direction}
            variants={cardAnimation}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <GatsbyImage
              className="image"
              image={images[card]}
              alt=""
              objectPosition="50% 100%"
              loading="eager"
              key={card}
              style={{ height: isMobile ? "75%" : "" }}
            ></GatsbyImage>
            <CarouselContent
              key="carouselContentKey"
              variants={textAnimation}
              className={`${isMobile && "mobile"}`}
            >
              <h3>{content.title[card]}</h3>
              <p
                className={`
                ${card === 0 && !isMobile && "blockingOne"} 
                ${card === 3 && !isMobile && "blockingFour"} 
                ${card === 4 && !isMobile && "blockingFive"}
                ${card === 6 && !isMobile && "blockingSeven"}
                ${card === 2 && isMobile && "mobileBlockingThree"}
                ${card === 5 && isMobile && "mobileBlockingSix"}
                `}
              >
                {content.paragraph[card]}
              </p>
            </CarouselContent>
          </motion.div>
        </AnimatePresence>
        <CarouselBullets className={`${isMobile && "mobile"}`}>
          <span className={`${card === 0 && "isActive"}`}>
            <div className="dot"></div>
          </span>
          <span className={`${card === 1 && "isActive"}`}>
            <div className="dot"></div>
          </span>
          <span className={`${card === 2 && "isActive"}`}>
            <div className="dot"></div>
          </span>
          <span className={`${card === 3 && "isActive"}`}>
            <div className="dot"></div>
          </span>
          <span className={`${card === 4 && "isActive"}`}>
            <div className="dot"></div>
          </span>
          <span className={`${card === 5 && "isActive"}`}>
            <div className="dot"></div>
          </span>
          <span className={`${card === 6 && "isActive"}`}>
            <div className="dot"></div>
          </span>
        </CarouselBullets>
        <CarouselNav className={`${isMobile && "mobile"}`}>
          <motion.div
            className="prev"
            onClick={() => {
              paginate(-1)
            }}
            whileHover={{ scale: 1.1 }}
          >
            <svg
              xmlns="http://www.w3.org/2420/svg"
              x="0px"
              y="0px"
              viewBox="450.284 152.487 391.604 290.307"
              enableBackground="new 450.284 152.487 391.604 290.307"
            >
              <g transform="translate(0 -37)">
                <polygon
                  fill="#000"
                  points="450.284,311.096 755.958,311.096 667.735,208.821 690.465,189.487 841.889,323.405 
		841.889,345.875 690.465,479.794 667.735,460.459 755.958,357.836 450.284,357.836 	"
                />
              </g>
            </svg>
          </motion.div>
          <motion.div
            className="next"
            onClick={() => {
              paginate(1)
            }}
            whileHover={{ scale: 1.1 }}
          >
            <svg
              xmlns="http://www.w3.org/2420/svg"
              x="0px"
              y="0px"
              viewBox="450.284 152.487 391.604 290.307"
              enableBackground="new 450.284 152.487 391.604 290.307"
            >
              <g transform="translate(0 -37)">
                <polygon
                  fill="#000"
                  points="450.284,311.096 755.958,311.096 667.735,208.821 690.465,189.487 841.889,323.405 
		841.889,345.875 690.465,479.794 667.735,460.459 755.958,357.836 450.284,357.836 	"
                />
              </g>
            </svg>
          </motion.div>
        </CarouselNav>
      </HomeCarouselSection>
    </>
  )
}

export default HomeCarousel
