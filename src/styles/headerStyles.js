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
  position: relative;
  display: inline-block;
  height: 10vh;
  top: 0;
  /* TODO add something to change position based on whether user has scrolled down */
  right: 10%;

  @media screen and (min-width: 1024px) {
    position: absolute;
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
  position: relative;
  display: flex;
  height: 10vh;
  top: 0;
  left: 3%;
  align-items: center;

  @media screen and (min-width: 1024px) {
    position: absolute;
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    transform-origin: center;
    z-index: 1;
    display: inline;
    width: auto;
    height: auto;
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 0.3rem;
    color: black;
    margin: 0 auto;
  }
`
// export const Socials = styled(motion.div)`
//   .icon {
//     height: 2.2rem;
//     width: 2.2rem;
//     display: block;
//     position: relative;
//     overflow: hidden;
//     margin-right: 1rem;
//     :last-child {
//       margin-right: 0;
//     }
//     svg {
//       position: absolute;
//     }
//     path {
//       fill: black;
//     }
//   }
// `
