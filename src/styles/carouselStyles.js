import styled from "styled-components"
import { motion } from "framer-motion"
import { GatsbyImage } from "gatsby-plugin-image"

export const HomeCarouselSection = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  /* padding-bottom: 10vh; */
  position: relative;
  overflow: hidden;
  .wrapper {
    height: 100%;
    width: 100%;
    background-color: red;
    .image {
      /* max-width: 100%; */
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .behind {
      z-index: 5;
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
