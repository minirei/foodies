import styled from "styled-components"
import { motion } from "framer-motion"

export const HomeCarouselSection = styled(motion.div)`
  height: 80vh;
  width: 100vw;
  position: relative;
  background-color: blue;
  .wrapper {
    height: 100%;
    width: 100%;
    .image {
      width: 100%;
      max-height: 100%;
    }
  }
`
