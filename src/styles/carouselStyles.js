import styled from "styled-components"
import { motion } from "framer-motion"

export const HomeCarouselSection = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background-color: rgb(232, 253, 255);
  position: relative;
  overflow: hidden;
  /* .chapter {
    opacity: 0;
    transition: opacity 1000ms cubic-bezier(0.215, 0.61, 0.355, 1);
    &.visible {
      opacity: 1;
    }
  } */
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
  &.mobile {
  }
`

export const CarouselContent = styled(motion.div)`
  position: relative;
  left: 8.33%;
  top: 12%;
  width: 40%;
  z-index: 10;
  h3 {
    margin: 1rem auto;
    display: inline-block;
  }
  p {
    &.blockingOne {
      width: 95%;
    }
    &.blockingThree {
      width: 85%;
    }
    &.blockingFour {
      width: 90%;
    }
    &.blockingFive {
      width: 78%;
    }
    &.blockingSeven {
      width: 93%;
    }

    &.mobileBlockingThree {
      /* width: 90%; */
    }
    &.mobileBlockingSix {
      width: 80%;
    }
  }
  &.mobile {
    width: 85vw;
    margin: 0 auto;
    left: 0;
    top: 8%;
  }

  .link {
    position: relative;
    :before {
      left: 0;
      bottom: 0%;
      content: "";
      height: 3px;
      background: rgb(40, 10, 11);
      position: absolute;
      transform: scaleX(0);
      will-change: transform;
      transform-origin: right;
      width: 100%;
      transition: transform 0.4s ease-out, background 500ms linear;
    }

    :hover {
      :before {
        transform: scaleX(1);
        transform-origin: left;
      }
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

  &.mobile {
    left: 7.5vw;
    bottom: 15%;
    span {
      height: 18px;
      width: 18px;
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

  &.mobile {
    width: auto;
    bottom: 25%;
    left: 7.5vw;
    .prev,
    .next {
      width: 16vw;
      height: 16vw;
      margin: 0;
    }
    .next {
      margin-left: 1vw;
    }
  }
`
