import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [visible, setVisible] = useState(true)
  const [lastScroll, setLastScroll] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(()=>{
    const handleScroll = ()=>{
      const current = window.scrollY
      if (current > lastScroll && current > 100) setVisible(false); else setVisible(true)
      setScrolled(current > 50)
      setLastScroll(current)
    }
    window.addEventListener('scroll', handleScroll)
    return ()=> window.removeEventListener('scroll', handleScroll)
  },[lastScroll])

  const handleLinkClick = ()=> setMenuOpen(false)
  const items = ['Home','About','Skills','Projects','Contact']

  const menuVariants = { hidden:{ x:'100%' }, show:{ x:0, transition:{ type:'spring', stiffness:80, damping:15 } }, exit:{ x:'100%', transition:{ duration:0.4 } } }

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav key="nav" initial={{ y:-80, opacity:0 }} animate={{ y:0, opacity:1 }} exit={{ y:-80, opacity:0 }} transition={{ duration:0.5 }} className={`fixed top-0 left-0 w-full z-50 ${scrolled? 'backdrop-blur-md bg-[#0a0a0a]/70 border-b border-gray-800':'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-gray-100">
            <motion.h1 initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2 }} className="text-lg md:text-xl font-semibold bg-gradient-to-r from-[#5C6BF2] to-[#4F8BFF] bg-clip-text text-transparent">Umesh Reddy Goli</motion.h1>
            <ul className="hidden md:flex gap-10 text-sm font-medium">
              {items.map((it,i)=>(<li key={i}><Link to={it.toLowerCase()} smooth duration={600} offset={-70} className="cursor-pointer hover:text-[#4F8BFF] transition-colors">{it}</Link></li>))}
            </ul>
            <div className="md:hidden">
              <button onClick={()=> setMenuOpen(!menuOpen)} className="focus:outline-none">
                { menuOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} /> }
              </button>
            </div>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.div variants={menuVariants} initial="hidden" animate="show" exit="exit" className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-screen bg-[#0a0a0a]/96 backdrop-blur-md flex flex-col items-center justify-center gap-10 text-xl text-gray-100 border-l border-gray-800 md:hidden">
                {items.map((it,i)=>(<Link key={i} to={it.toLowerCase()} smooth duration={600} offset={-70} onClick={handleLinkClick} className="cursor-pointer hover:text-[#4F8BFF] transition-colors">{it}</Link>))}
                <a href="/Umesh_React_H1B.docx" download className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-[#5C6BF2] to-[#4F8BFF] text-white font-semibold">Download Resume</a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default Navbar
