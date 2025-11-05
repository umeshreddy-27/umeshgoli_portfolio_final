import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNode, FaAws, FaHtml5, FaCss3Alt, FaJsSquare, FaDocker, FaGitAlt } from 'react-icons/fa'
import { SiAngular, SiTailwindcss, SiRedux, SiMongodb, SiPostman, SiVite, SiFigma } from 'react-icons/si'
import ParallaxWrapper from './ParallaxWrapper'
import { sectionVariant } from './motionVariants'

const icons = [
  { Icon: FaReact, color: '#61DAFB', name: 'React' },
  { Icon: SiAngular, color: '#DD0031', name: 'Angular' },
  { Icon: FaJsSquare, color: '#F7DF1E', name: 'JavaScript' },
  { Icon: SiTailwindcss, color: '#38BDF8', name: 'Tailwind' },
  { Icon: SiRedux, color: '#764ABC', name: 'Redux' },
  { Icon: FaNode, color: '#68A063', name: 'Node.js' },
  { Icon: SiMongodb, color: '#4DB33D', name: 'MongoDB' },
  { Icon: FaAws, color: '#FF9900', name: 'AWS' },
  { Icon: FaDocker, color: '#2496ED', name: 'Docker' },
  { Icon: FaGitAlt, color: '#F1502F', name: 'Git' },
  { Icon: SiPostman, color: '#FF6C37', name: 'Postman' },
  { Icon: SiFigma, color: '#F24E1E', name: 'Figma' },
]

const Skills = ()=>{
  return (
    <ParallaxWrapper offset={50}>
      <motion.section id="skills" variants={sectionVariant} initial="hidden" whileInView="show" viewport={{ once:true, amount:0.3 }} className="min-h-screen">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#5C6BF2] to-[#4F8BFF]">Tools & Technologies</h2>
          <motion.div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            {icons.map((it, idx)=>{
              const Icon = it.Icon
              return (
                <motion.div key={idx} initial={{ opacity:0, scale:0.9 }} whileInView={{ opacity:1, scale:1 }} transition={{ delay: idx*0.06 }} className="card-glass p-4 flex flex-col items-center justify-center gap-2 hover:scale-105">
                  <Icon size={36} color={it.color} />
                  <div className="text-sm text-gray-200 mt-2">{it.name}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.section>
    </ParallaxWrapper>
  )
}
export default Skills
