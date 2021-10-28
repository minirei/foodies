import React from "react"
import { motion } from "framer-motion"

const TestPage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  return (
    <motion.ul variants={container} initial="hidden" animate="show">
      <motion.li variants={item} />
      <motion.li variants={item} />
    </motion.ul>
  )
}

export default TestPage
