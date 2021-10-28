import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"

// Launch Section
export const HomeLaunchSection = styled.div`
  position: relative;
  width: 100%;
  background-color: palegoldenrod;
`

export const HomeLaunchContent = styled.div`
  width: 100%;
  /* padding: 10vh 0; */
  height: 70vh;
  margin: 0 auto;
  display: flex;

  .launchInfo {
    width: 75%;
    right: 0;
    position: absolute;
    h3 {
      width: 100%;
      font-weight: 600;
      font-size: 4.6rem;
      line-height: 10rem;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
      text-align: right;
      margin: 0 auto;
    }
    p {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.4rem;
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

export const Marquee = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;

  .rowTitle,
  .rowLetter {
    font-size: 22rem;
    font-weight: 700;
    letter-spacing: -0.8rem;
    display: inline-block;
    white-space: nowrap;
  }

  .rowTitle {
    padding: 0 5vw;
  }

  .marqueeInner {
    display: flex;
    padding-top: 10vh;
    width: fit-content;
    transform: translate3d(calc(-25%), 0, 0);
    animation: ${roll} 6s linear infinite;
    animation-play-state: paused;
  }

  .animate {
      animation-play-state: running;
  }


`

// Gallery
export const HomeLaunchGallery = styled.div`
  position: relative;
  width: 100%;
  background-color: lightcoral;
  padding: 5vh 0;

  h3 {
    font-weight: 400;
    font-size: 2rem;
    text-align: start;
    line-height: 3rem;
    margin: 0 auto;
    padding: 2rem 0;
  }
`

export const GalleryImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 10vw;
`

export const HomeLaunchImage = styled.div`
  width: 100%;
  @media (min-width: 1408px) {
    width: 23%;
  }

  p {
    font-weight: 500;
    font-size: 2rem;
    text-align: center;
    margin: 1rem auto 10vh;
  }

  .image {
    border: 3px solid black;
  }
`
