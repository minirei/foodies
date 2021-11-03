import styled from "styled-components"
import { motion } from "framer-motion"

export const FooterSection = styled.div`
  position: relative;
  height: 25vh;
  width: 100vw;
  overflow: hidden;
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
  height: 20%;
  width: 100vw;
  position: relative;
`
