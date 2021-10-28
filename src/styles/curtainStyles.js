import styled from "styled-components"
import { motion } from "framer-motion"

// Home Reveal

export const HomeRevealSection = styled.div`
  position: relative;
  width: 100%;
  height: 120vh;
  overflow: hidden;
  /* padding-bottom: 20vh; */
  background-color: palegoldenrod;
`
export const HomeCurtain = styled(motion.div)`
  position: relative;
  height: 130vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const CurtainContent = styled.div`
  position: relative;
  width: 50%;
  margin: 0 auto;
  z-index: 10;
`

export const CurtainHeading = styled(motion.div)`
  p {
    font-weight: 200;
    font-size: 2.4rem;
    margin: 0 auto 3rem;
  }
  h1 {
    font-weight: 600;
    font-size: 3.8rem;
    margin: 0 auto 1rem;
    letter-spacing: 0.1rem;
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
