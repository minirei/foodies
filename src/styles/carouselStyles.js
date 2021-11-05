import styled from "styled-components"
import { motion } from "framer-motion"

export const HomeCarouselSection = styled(motion.div)`
  height: 120vh;
  width: 100vw;
  /* padding-bottom: 10vh; */
  position: relative;
  /* overflow: hidden; */
  .wrapper {
    height: 100%;
    width: 100%;
    .image {
      max-width: 100%;
      max-height: 100%;
    }
  }
`
