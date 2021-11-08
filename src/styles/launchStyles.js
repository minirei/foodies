import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"

// Launch Section
export const HomeLaunchSection = styled(motion.div)`
  position: relative;
  width: 100%;
  background-color: rgb(222, 183, 153);
  cursor: default;
`

export const HomeLaunchContent = styled.div`
  width: 100%;
  height: 70vh;
  margin: 0 auto;
  display: flex;

  .launchInfo {
    width: 75%;
    right: 0;
    position: absolute;
    h3 {
      width: 100%;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
      text-align: left;
    }
    p {
      text-align: justify;
      margin: 0 auto 2rem;
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
    color: rgb(222, 183, 153);
    -webkit-text-stroke-color: rgb(40, 10, 11);
    -webkit-text-stroke-width: calc(2px + 0.2vw);
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
  }

  .animate {
    animation-play-state: running;
  }
`
