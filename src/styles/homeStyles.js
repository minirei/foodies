import styled from "styled-components"
import { motion } from "framer-motion"

// Landing Section
export const BackgroundSection = styled(motion.div)`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  .wrapper {
    width: 100%;
    min-height: 100vh;
    background-attachment: fixed;
  }
`

export const LandingImage = styled(motion.div)`
  width: 100vw;
  /* height needs a media query for mobile */
  height: 100vh;
  position: relative;
  z-index: -1;
  background-image: url("images/hero.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
`

// About Section
export const HomeAboutSection = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  padding-top: 10vh;
  padding-bottom: 10vh;
  cursor: default;
  background-color: rgb(255, 248, 237);
  overflow: hidden;
`
export const HomeAboutContent = styled(motion.div)`
  width: 55%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  h3 {
    font-family: "EB Garamond", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;
    font-size: 3rem;
    line-height: 3rem;
    /* padding-top: calc(5rem + 5vh); */
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
  position: relative;
  .imageWrapper {
    width: 140%;
    position: relative;
  }
  .mask {
    background-color: rgb(255, 248, 237);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`
