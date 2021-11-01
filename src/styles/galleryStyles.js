import styled from "styled-components"
import { motion } from "framer-motion"

// Gallery
export const HomeGallerySection = styled.div`
  position: relative;
  height: 120vh;
  padding-top: 20vh;
  padding-bottom: 20vh;
  width: 100vw;
  background-color: #ebebeb;
  cursor: default;
  .chapter {
    position: absolute;
    margin: 0;
    top: 5%;
    left: 8.33%;
    z-index: 10;
    h3 {
      font-size: 2rem;
      font-weight: 400;
      font-family: "EB Garamond", "Segoe UI", Tahoma, Geneva, Verdana,
        sans-serif;
    }
  }
`

export const GalleryCategory = styled(motion.div)`
  background-color: #ebebeb;
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
      z-index: 1;
    }
  }
  .floatingBackground, .floatingFoodie {
    pointer-events: none;
    position: absolute;
    overflow: hidden;
    top: -10%;
    left: 10%;
    width: 55%;
    z-index: 0;
  }

  .floatingFoodie {
    top: 20%;
    width: 40%;
    left: 50%;
    z-index: 2;
  }
`
