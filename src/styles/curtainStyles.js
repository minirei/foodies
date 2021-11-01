import styled from "styled-components"
import { motion } from "framer-motion"

// Home Reveal

export const HomeRevealSection = styled.div`
  position: relative;
  width: 100%;
  height: 120vh;
  margin-top: 20vh;
  overflow: hidden;
  /* padding-bottom: 20vh; */
  background-color: palegoldenrod;
  cursor: default;
`
export const HomeCurtain = styled(motion.div)`
  position: relative;
  height: 130vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .heading {
    position: absolute;
    margin: 0;
    top: 15%;
    width: 50%;
    z-index: 10;
    h3 {
      font-size: 2rem;
      font-weight: 400;
      font-family: "EB Garamond", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
  }
`

export const CurtainContent = styled.div`
  position: relative;
  top: 10%;
  width: 50%;
  margin: 0 auto;
  z-index: 10;
`

export const CurtainHeading = styled(motion.div)`
  p {
    font-weight: 200;
    font-size: calc(2rem + 0.5vw);
    font-family: "EB Garamond", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    margin: 0 auto 3rem;
  }
  h1 {
    font-family: "EB Garamond", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    font-size: calc(3rem + 1vw);
    color: #292929;
    margin: 0 auto 1rem;
    letter-spacing: 0.1rem;
    white-space: nowrap;
  }
  margin-bottom: 3rem;
`

export const CurtainCover = styled(motion.div)`
  height: auto;
  width: auto;
  position: relative;
`

export const CurtainText = styled(motion.div)`
  p {
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 2.6rem;
    text-align: left;
  }
`
export const CurtainContentMask = styled(motion.div)`
  background-color: palegoldenrod;
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`

// Curtain Image
export const CurtainImage = styled(motion.div)`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  .image {
    height: 100%;
    z-index: 2;
  }
`
export const CurtainImageMask = styled(motion.div)`
  position: absolute;
  display: block;
  background-color: palegoldenrod;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 9;
`
