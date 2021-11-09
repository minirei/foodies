import styled from "styled-components"
import { motion } from "framer-motion"

// Gallery
export const HomeGallerySection = styled(motion.div)`
  position: relative;
  height: 120vh;
  padding-top: 20vh;
  padding-bottom: 20vh;
  width: 100vw;
  background-color: rgb(255, 248, 237);
  cursor: default;
  overflow: hidden;
  .chapter {
    position: absolute;
    margin: 0;
    top: 3%;
    left: 8.33%;
    z-index: 10;
  }
`

export const GalleryCategory = styled(motion.div)`
  width: 100%;
  height: 100%;
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    h1 {
      font-size: calc(0.5rem + 6vw);
      font-weight: 400;
      font-family: "EB Garamond", "Segoe UI", Tahoma, Geneva, Verdana,
        sans-serif;
      margin: 0;
      text-align: center;
      white-space: nowrap;
      z-index: 2;
    }
  }
  .floatingBackground, .floatingFoodie {
    pointer-events: none;
    position: absolute;
    overflow: hidden;
    top: -30%;
    left: -5%;
    width: 65%;
    z-index: 1;
    opacity: 1;
  }

  .floatingFoodie {
    top: -10%;
    width: 45%;
    left: auto;
    right: 0%;
  }
`
