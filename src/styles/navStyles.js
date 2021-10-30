import styled from "styled-components"
import { motion } from "framer-motion"

export const SiteNavSection = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`

export const NavHeader = styled.div`
  position: fixed;
  height: 10vh;
  width: 100%;
  z-index: 99;
`

export const NavLogo = styled.div`
  position: relative;
  display: inline-block;

  @media screen and (min-width: 1024px) {
    position: absolute;
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    z-index: 1;
    display: inline;
    width: auto;
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 0.3rem;
    color: black;
    margin: 0 auto;
  }
`

export const NavContent = styled.div``
export const NavBottom = styled.div``
export const Socials = styled.div``
export const Icon = styled.div``
