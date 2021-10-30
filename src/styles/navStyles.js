import styled, { css } from "styled-components"
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

export const NavContent = styled.div`
  position: relative;
  background-color: palegoldenrod;
  height: 100%;
  width: 100%;
  padding-left: 25vw;
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 1fr 1fr;

  .main {
    grid-column: 1/2;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    padding-bottom: 157px;
  }

  .roadmap {
    grid-column: 2/2;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    padding-bottom: 65px;
  }


`

export const Heading = styled.h1`
  font-size: calc(2.6rem + 1vw);
  color: black;
  font-weight: 400;
  letter-spacing: .1rem;
  font-family: "EB Garamond", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: calc(4.6rem + 1vw);
  margin: 0;
  padding-left: 50px;

  ${props =>
    props.large &&
    css`
      font-weight: 500;
    `}
`

export const NavBottom = styled.div`
  position: relative;
  background-color: lightcoral;
  width: 100%;
  height: 20vw;
`
export const Socials = styled.div``
export const Icon = styled.div``
