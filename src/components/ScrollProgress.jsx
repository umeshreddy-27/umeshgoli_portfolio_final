import React from 'react'
import { motion, useScroll } from 'framer-motion'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  return <motion.div style={{ scaleX: scrollYProgress }} className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#5C6BF2] via-[#4F8BFF] to-[#FF77CC] origin-left z-50" />
}

export default ScrollProgress
