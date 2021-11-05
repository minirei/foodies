import styled from "styled-components"
import { motion } from "framer-motion"
import { GatsbyImage } from "gatsby-plugin-image"

export const HomeCarouselSection = styled(motion.div)`
  height: 110vh;
  width: 100vw;
  background-color: rgb(232, 253, 255);
  position: relative;
  overflow: hidden;
  .chapter {
    position: absolute;
    top: 5%;
    left: 8.33%;
    z-index: 100;
    h3 {
      font-size: 2rem;
      font-weight: 400;
      font-family: "EB Garamond", "Segoe UI", Tahoma, Geneva, Verdana,
        sans-serif;
    }
  }
  .wrapper {
    height: 100%;
    width: 100%;
    position: absolute;
    .image {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`

export const CarouselNav = styled(motion.div)`
  position: absolute;
  bottom: 5%;
  right: 5%;
  display: flex;
  cursor: pointer;
  user-select: none;
  z-index: 10;
  .prev,
  .next {
    width: 4vw;
    height: 4vw;
    border-radius: 100%;
    display: inline-block;
    border: 1px solid rgb(235, 235, 235);
    margin-right: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .prev {
    svg {
      transform: rotate(180deg);
    }
  }

  .next {
    margin-right: 0;
  }

  svg {
    height: 25%;
  }
`
