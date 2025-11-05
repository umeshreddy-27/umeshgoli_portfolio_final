import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ParallaxWrapper from './ParallaxWrapper'

const Hero = ()=>{
  return (
    <ParallaxWrapper offset={80}>
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.8 }} className="z-10">
          <motion.h1 animate={{ y:[0,-10,0] }} transition={{ duration:4, repeat: Infinity, ease:'easeInOut' }} className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#5C6BF2] to-[#4F8BFF]">Umesh Reddy Goli</motion.h1>
          <motion.h2 animate={{ y:[0,8,0] }} transition={{ duration:5, repeat: Infinity, ease:'easeInOut' }} className="mt-4 text-xl md:text-2xl text-gray-300">Frontend Developer — React | Angular | TypeScript | Tailwind</motion.h2>
          <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ delay:1, duration:0.8 }} className="mt-8 flex gap-4 justify-center">
            <a href="/Umesh_React_H1B.docx" download className="px-5 py-3 rounded-full bg-gradient-to-r from-[#5C6BF2] to-[#4F8BFF] text-white font-semibold">Download Resume</a>
            <a href="https://github.com/umeshreddy-27" target="_blank" rel="noreferrer" className="px-5 py-3 border border-gray-700 rounded-full flex items-center gap-2"> <FaGithub /> GitHub</a>
            <a href="https://www.linkedin.com/in/umesh-reddy-goli-340a2a123" target="_blank" rel="noreferrer" className="px-5 py-3 border border-gray-700 rounded-full flex items-center gap-2"> <FaLinkedin /> LinkedIn</a>
          </motion.div>
        </motion.div>
        <motion.div className="absolute w-[520px] h-[520px] rounded-full bg-gradient-to-r from-[#5C6BF2]/20 to-[#4F8BFF]/20 blur-3xl" initial={{opacity:0}} animate={{opacity:1}} transition={{ duration:1.5 }} />
      </section>
    </ParallaxWrapper>
  )
}
export default Hero
