import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderSection = styled.div`
  position: fixed;
  height: 10vh;
  width: 100%;
  z-index: 99;
`

export const Navigation = styled(motion.ul)`
  .navLink {
    color: black;
    margin-right: 1.4rem;
    :last-child {
      margin-right: 0;
    }
  }
  h3 {
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    text-decoration: none;
    margin-right: 1.4rem;
    :last-child {
      margin-right: 0;
    }
  }
`

export const Menu = styled(motion.div)`
  position: absolute;
  top: 0;

  @media (min-width: 1024px) {
    left: -1vw;
  }

  @media (min-width: 1216px) {
    left: -3vw;
  }

  @media (min-width: 1408px) {
    left: -8vw;
  }

  button {
    transform-origin: center;
    border: none;
    background: none;
    outline: none;
    height: 10vh;

    span {
      width: 36px;
      height: 8px;
      display: block;
      margin: 8px;
      background-color: black;
    }
  }
`

export const Logo = styled(motion.div)`
  position: absolute;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  z-index: -1;
  h1 {
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 0.3rem;
    color: black;
    margin: 0 auto;
  }
`
export const Socials = styled(motion.div)`
  .icon {
    height: 2.2rem;
    width: 2.2rem;
    display: block;
    position: relative;
    overflow: hidden;
    margin-right: 1rem;
    :last-child {
      margin-right: 0;
    }
    svg {
      position: absolute;
    }
    path {
      fill: black;
    }
  }
`
