import React from 'react'
import { motion } from 'framer-motion'
import { sectionVariant } from './motionVariants'
import ParallaxWrapper from './ParallaxWrapper'

const About = ()=>{
  return (
    <ParallaxWrapper offset={60}>
      <motion.section id="about" variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once:true, amount:0.3 }} className="min-h-screen flex items-center">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#5C6BF2] to-[#4F8BFF]">About Me</h2>
          <p className="text-gray-300 leading-relaxed">Senior Frontend Developer with experience building responsive, high-performance web applications using React, Angular, and TypeScript. Skilled in creating reusable UI components, optimizing performance, and integrating front-end apps with cloud services. Open to H1B-C2C opportunities and remote/onsite roles in the US.</p>
        </div>
      </motion.section>
    </ParallaxWrapper>
  )
}

export default About
