import styled from "styled-components"
import { motion } from "framer-motion"

export const HomeCarouselSection = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background-color: rgb(232, 253, 255);
  position: relative;
  overflow: hidden;
  .chapter {
    position: absolute;
    top: 5%;
    left: 8.33%;
    opacity: 0;
    z-index: 100;
    transition: opacity 1000ms cubic-bezier(0.215, 0.61, 0.355, 1);
    h3 {
      font-size: 2rem;
      font-weight: 400;
      font-family: "EB Garamond", "Segoe UI", Tahoma, Geneva, Verdana,
        sans-serif;
    }
    &.visible {
      opacity: 1;
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
      bottom: 0;
      left: 0;
    }
  }
`

export const CarouselBullets = styled(motion.div)`
  position: absolute;
  left: 1%;
  bottom: 18%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    height: 25px;
    width: 25px;
    .dot {
      width: 4px;
      height: 4px;
      opacity: 0.4;
      display: block;
      background: black;
      border-radius: 100%;
      transition: opacity 1000ms cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    ::after {
      opacity: 0;
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: 100%;
      border: 1px solid black;
      transform-origin: center;
      transition: opacity 2000ms cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    &.isActive {
      ::after,
      .dot {
        opacity: 1;
      }
    }
  }
`

export const CarouselNav = styled(motion.div)`
  position: absolute;
  bottom: 20%;
  right: 1%;
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
    border: 1px solid black;
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
