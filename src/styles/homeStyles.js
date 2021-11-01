import styled from "styled-components"
import { motion } from "framer-motion"

// Landing Section
export const LandingImage = styled(motion.div)`
  width: 100vw;
  /* height needs a media query for mobile */
  height: 100vh;
  position: relative;
  /* bottom: 10vh; */
  z-index: -1;
  .hero {
    height: auto;
    max-height: 100%;
    width: 100%;
    overflow: hidden;
    position: absolute;
  }
`

// About Section
export const HomeAboutSection = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding-top: 10vh;
  padding-bottom: 10vh;
  cursor: default;
  background-color: #ebebeb;
  overflow: visible;
`
export const HomeAboutContent = styled(motion.div)`
  width: 60%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  h3 {
    font-family: "EB Garamond", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    font-size: 3rem;
    line-height: 3rem;
    padding-top: calc(5rem + 10vh);
  }

  p {
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 1.8rem;
    padding-bottom: 1rem;
    text-align: justify;
  }
`
export const HomeAboutImage = styled.div`
  width: 35%;
  overflow: visible;
  .image {
    /* border: 2px solid black; */
    width: 145%;
  }
`

// IDK if i'm going to use this
export const HomeLaunchFiller = styled.div`
  width: 100%;
  background-color: rgb(222,183,153);
  p {
    font-weight: 500;
    font-size: 2rem;
    text-align: center;
    /* color: red; */
  }
`
