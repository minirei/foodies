import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"

// Launch Section
export const HomeLaunchSection = styled(motion.div)`
  position: relative;
  width: 100%;
  /* background-color: rgb(222, 183, 153); */
  /* background-color:rgb(243,228,195); */
  background-color: rgb(241, 202, 137);
  cursor: default;
`

export const HomeLaunchContent = styled.div`
  width: 100%;
  height: 70vh;
  margin: 0 auto;
  display: flex;
  position: relative;

  &.mobile {
    height: fit-content;
  }

  .launchInfo {
    width: 75%;
    right: 0;
    position: absolute;
    h3 {
      width: 100%;
      letter-spacing: 0.1rem;
      text-align: left;
    }
    p {
      text-align: justify;
      padding-bottom: 1rem;
    }
    &.mobile {
      width: 100%;
      padding-top: 5vh;
      position: relative;
      h3 {
        margin-top: 0;
      }
    }
  }
`

// Marquee
const roll = keyframes`
from {
    transform: translate3d(calc(-25%), 0, 0);
}  
to {
    transform: translate3d(calc(-50%), 0, 0);
}
`

export const Marquee = styled(motion.div)`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;

  .rowTitle,
  .rowLetter {
    /* color: rgb(222, 183, 153); */
    /* color:rgb(243,228,195); */
    /* color: rgb(241, 202, 137); */
    color: transparent;
    -webkit-text-stroke-color: rgb(40, 10, 11);
    -webkit-text-stroke-width: calc(4px + 0.4vw);
    font-size: calc(2rem + 15vw);
    font-weight: 700;
    /* letter-spacing: -0.8rem; */
    display: inline-block;
    white-space: nowrap;
  }

  .rowTitle {
    padding: 0 4vw;
  }

  .marqueeInner {
    display: flex;
    padding-top: 10vh;
    width: fit-content;
    transform: translate3d(calc(-25%), 0, 0);
    animation: ${roll} 5s linear infinite;
    animation-play-state: paused;
    &.mobile {
      padding-top: 5vh;
    }
  }

  .animate {
    animation-play-state: running;
  }
`
