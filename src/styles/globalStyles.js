import styled, { css, createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

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

  body {
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #EBEBEB;
    color: rgb(29,29,29);
    overscroll-behavior: none;
    overflow-x: hidden;
    ${'' /* cursor: default; */}
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
  overflow: hidden;

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
  height: 100%;

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
    props.center &&
    css`
      justify-content: center;
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
