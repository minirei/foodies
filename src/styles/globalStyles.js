import styled, { css, createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

// Font
const PoppinsFont = css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
`

// Global style wrapper
export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    text-decoration: none;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    font-smooth: always;
  }

  ${PoppinsFont}
  body {
    ${
      "" /* font-family: Roboto, Ubuntu, 'Helvetica', -apple-system, BlinkMacSystemFont, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
    }
    font-family: "Poppins";
    background: #EBEBEB;
    color: black;
    overscroll-behavior: none;
    overflow-x: hidden;
  }
`

// General components
export const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  position: relative;
  height: 100%;
  width: auto;
  flex-grow: 1;

  max-width: 300px;

  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }

  ${props =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100%;
    `}

  ${props =>
    props.flex &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  ${props =>
    props.vertical &&
    css`
      flex-direction: column;
    `}

  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `}

  ${props =>
    props.spaceAround &&
    css`
      justify-content: space-around;
    `}

  ${props =>
    props.spaceEvenly &&
    css`
      justify-content: space-evenly;
    `}

  ${props =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `}

  ${props =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `}

  ${props =>
    props.wrap &&
    css`
      flex-wrap: wrap;
    `}

  ${props =>
    props.noHeight &&
    css`
      height: 0;
    `}
`

// Themes (is there a need for it?)
