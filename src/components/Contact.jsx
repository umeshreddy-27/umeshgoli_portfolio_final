import React from 'react'
import { motion } from 'framer-motion'
import { HiMail } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import ParallaxWrapper from './ParallaxWrapper'
import { sectionVariant } from './motionVariants'

const Contact = ()=>{
  return (
    <ParallaxWrapper offset={30}>
      <motion.section id="contact" variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once:true, amount:0.3 }} className="min-h-screen flex items-center">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#5C6BF2] to-[#4F8BFF]">Let&apos;s Connect</h2>
          <p className="text-gray-300 mb-6">I&apos;m open to new opportunities and collaborations. Reach out directly and I&apos;ll respond as soon as possible.</p>
          <motion.a href="mailto:ugoli2710@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#5C6BF2] to-[#4F8BFF] text-white font-semibold" whileHover={{ scale:1.03 }}>
            <HiMail size={20} /> Mail Me Directly
          </motion.a>
          <div className="flex gap-6 justify-center mt-8 text-2xl">
            <a href="https://www.linkedin.com/in/umesh-reddy-goli-340a2a123" target="_blank" rel="noreferrer" className="hover:text-[#4F8BFF]"><FaLinkedin /></a>
            <a href="https://github.com/umeshreddy-27" target="_blank" rel="noreferrer" className="hover:text-[#4F8BFF]"><FaGithub /></a>
          </div>
        </div>
      </motion.section>
    </ParallaxWrapper>
  )
}
export default Contact
