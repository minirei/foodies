import styled, { css } from "styled-components"

export const FooterSection = styled.div`
  position: relative;
  height: 70vh;
  width: 100vw;
  overflow: hidden;
  background: rgb(255, 248, 237);
  color: black;
  .line {
    &.short {
      height: 100%;
    }
    height: 100vh;
    left: 0;
    position: absolute;
    top: 0;
    width: 1px;
    display: block;
    background: black;
  }
  .horizontalLine {
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    bottom: 0;
    display: block;
    background: black;
  }
`

export const MobileFooterSection = styled.div`
  position: relative;
  /* height: 30vh; */
  padding-bottom: 5vh;
  width: 100vw;
  overflow: hidden;
  background: rgb(255, 248, 237);
  color: black;
  .socialsCaption {
    mix-blend-mode: difference;
    background: rgb(255, 248, 237);
  }
  .socials {
    width: 100%;
    height: 15vh;
    mix-blend-mode: difference;
    background: rgb(255, 248, 237);
  }
  .policy {
    width: 80%;
    margin: 1rem auto;
  }
  p {
    position: relative;
    width: 100%;
    font-size: 0.875rem;
    text-align: center;
    word-wrap: break-word;
    margin: 0;
    padding: 0.5rem 0;
  }
  .line {
    &.short {
      height: 100%;
    }
    height: 100vh;
    left: 0;
    position: absolute;
    top: 0;
    width: 1px;
    display: block;
    background: black;
  }
  .horizontalLine {
    position: absolute;
    width: 80%;
    transform-origin: center;
    height: 1px;
    bottom: 0;
    display: block;
    background: black;
    &.top {
      top: 0;
      bottom: auto;
      width: 100%;
    }
  }
`

export const FooterTop = styled.div`
  width: 100vw;
  height: 50%;
  background: rgb(255, 248, 237);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    font-size: calc(1.2rem + 0.2vw);
    font-weight: 400;
  }
  .link {
    font-weight: 600;
    color: black;
  }
`

export const Disclaimer = styled.div`
  height: 15%;
  width: 100vw;
  position: relative;
  padding-left: 2%;
  background: rgb(255, 248, 237);
  p {
    margin: 0;
    padding-right: calc(1rem + 2vw);
    color: rgb(29, 29, 29);
  }

  ${props =>
    props.mobile &&
    css`
      height: 15vh;
      padding: 0;
      p {
        padding-right: 0;
      }
    `}
`

export const CardanoInfo = styled.div`
  position: relative;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(255, 248, 237);

  .cardanoWrapper {
    height: 100%;
    max-height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;

    .cardanoSVG {
      height: 90%;
      object-fit: contain;
      user-select: none;
    }
  }

  p {
    text-align: center;
    margin: 0;
  }
`
