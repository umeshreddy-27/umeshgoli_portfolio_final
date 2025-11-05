import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Preloader = () => {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{ const t = setTimeout(()=> setLoading(false), 2200); return ()=> clearTimeout(t) },[])
  return (
    <AnimatePresence>
      {loading && (
        <motion.div key="pre" initial={{opacity:1}} exit={{opacity:0, transition:{duration:0.6}}} className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-50">
          <motion.h1 initial={{scale:0.8,opacity:0}} animate={{scale:[0.8,1.05,1], opacity:[0,1,1]}} transition={{duration:1.4}} className="text-6xl font-extrabold bg-gradient-to-r from-[#5C6BF2] to-[#4F8BFF] bg-clip-text text-transparent">UG</motion.h1>
          <motion.div className="absolute w-56 h-56 rounded-full bg-gradient-to-r from-[#5C6BF2]/20 to-[#4F8BFF]/20 blur-3xl" animate={{scale:[1,1.3,1], opacity:[0.5,0.9,0.5]}} transition={{duration:3, repeat:Infinity}} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default Preloader
