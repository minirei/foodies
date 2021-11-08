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
    z-index: 20;
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

export const CarouselContent = styled(motion.div)`
  position: relative;
  left: 8.33%;
  top: 15%;
  width: 40%;
  h3 {
    font-size: calc(2.2rem + 1vw);
    font-weight: 500;
    font-family: "EB Garamond", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    margin-top: 1rem;
  }
  p {
    font-size: calc(1.2rem + 0.2vw);
    line-height: calc(1.2rem + 0.6vw);
    text-align: justify;
    &.blockingOne {
      width: 95%
    }
    &.blockingFour {
      width: 90%;
    }
    &.blockingFive {
      width: 78%;
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
      transition: opacity 500ms cubic-bezier(0.215, 0.61, 0.355, 1);
      transition-delay: 500ms;
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
      transition: opacity 500ms cubic-bezier(0.215, 0.61, 0.355, 1);
      transition-delay: 500ms;
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
  width: 100%;
  bottom: 50%;
  display: flex;
  justify-content: space-between;
  user-select: none;
  z-index: 10;
  .prev,
  .next {
    width: 4vw;
    height: 4vw;
    border-radius: 100%;
    display: inline-block;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2%;
    cursor: pointer;

  }

  .prev {
    margin-left: 2%;
    svg {
      transform: rotate(180deg);
    }
  }

  svg {
    height: 25%;
  }
`
