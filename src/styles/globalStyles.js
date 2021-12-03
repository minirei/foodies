import styled, { css, createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

// Global style wrapper
export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    text-decoration: none;
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    font-smooth: always;
    scroll-behavior: smooth;
  }

  body {
    box-sizing: border-box;
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: rgb(255,248,237);
    color: rgb(40,10,11);
    overscroll-behavior: none;
    overflow-x: hidden;
    /* removes scrollbar */
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    ${"" /* cursor: default; */}
  }

  ${"" /* chapters */}
  .chapter {
    position: absolute;
    top: 5%;
    left: 8.33%;
    z-index: 20;
    &.mobile {
      top: 3%;
      left: 7.5%;
    }
    h1 {
      margin: 0;
    }
  }
  h1 {
      font-size: calc(1.6rem + 1vw);
      font-weight: 400;
      font-family: 'Butler ', "Segoe UI", Tahoma, Geneva, Verdana,
        sans-serif;
    }

  h3 {
    font-size: calc(1.2rem + 2.2vw);
    line-height: calc(1.2rem + 2.6vw);
    font-weight: 700;
    font-family: 'Butler ', "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  p {
    font-size: calc(1rem + 0.4vw);
    line-height: calc(1.4rem + 0.6vw);
    font-weight: 400;
    text-align: justify;
  }

  a {
    font-weight: 600;
    color: inherit;
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

  max-width: 85vw;

  ${props =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      width: 100vw;
      max-width: 100vw !important;
    `}

  ${props =>
    props.flex &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  ${props =>
    props.overflowVisible &&
    css`
      overflow: visible;
    `}

  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }
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
    props.overflowVisible &&
    css`
      overflow: visible;
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
