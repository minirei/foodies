import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const SiteNavSection = styled(motion.div)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  overflow: hidden;
  background-color: #de8979;
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

export const NavHeader = styled.div`
  position: fixed;
  height: 10vh;
  width: 100%;
  z-index: 101;
`

export const NavContent = styled.div`
  position: relative;
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
    position: relative;
    mix-blend-mode: hard-light;
  }

  .roadmap {
    grid-column: 2/2;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    padding-bottom: 65px;
    position: relative;
  }
`

export const Heading = styled.h1`
  font-size: calc(2.6rem + 1vw);
  color: black;
  font-weight: 400;
  letter-spacing: 0.1rem;
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
  width: 100%;
  height: 15vw;
  &.footer {
    height: 75%;
    mix-blend-mode: difference;
    /* background-color: rgb(235, 235, 235); */
    background: rgb(255, 248, 237);
    color: auto;
  }
  .leftInfo {
    position: absolute;
    height: 100%;
    width: 25vw;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    .imageWrapper {
      height: 100%;
      max-height: 100%;
      width: 100%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      .image {
        max-height: 100%;
        max-width: 45%;
        object-fit: contain;
      }
    }
    p {
      text-align: center;
      font-size: 1.3rem;
      margin: 0;
      padding-bottom: 1rem;
    }
  }
  .wrapper {
    padding-left: 25vw;
    display: grid;
    box-sizing: border-box;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    overflow: hidden;
    .info {
      grid-column: 1/2;
      height: 100%;
      overflow: hidden;
    }
    .infoWrapper {
      display: flex;
      height: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      position: relative;
      overflow: hidden;
    }
    h3 {
      text-align: center;
      font-size: 1.8rem;
      font-weight: 500;
      font-family: "EB Garamond", "Segoe UI", Tahoma, Geneva, Verdana,
        sans-serif;
      margin: 0;
      padding-bottom: 4rem;
    }
    p {
      text-align: center;
      font-size: 1rem;
      font-weight: 400;
      margin: 0;
      padding-bottom: 1rem;
    }
  }

  .socials {
    grid-column: 2/2;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
  }
`
export const Icon = styled.div`
  height: 100%;
  width: 100%;
  /* border: 1px solid black; */
  overflow: hidden;
  .svgWrapper {
    position: relative;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  a {
    height: 40%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
