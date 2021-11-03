import styled from "styled-components"
import { motion } from "framer-motion"

export const FooterSection = styled.div`
  position: relative;
  height: 30vh;
  width: 100vw;
  overflow: hidden;
  background-color: rgb(235, 235, 235);
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

export const Disclaimer = styled.div`
  height: 25%;
  width: 100vw;
  position: relative;
  padding-left: 2%;
  /* background-color: rgb(235, 235, 235);
  mix-blend-mode: difference; */
  p {
    margin: 0;
    padding-right: calc(1rem + 2vw);
    color: rgb(29, 29, 29);
  }
`
