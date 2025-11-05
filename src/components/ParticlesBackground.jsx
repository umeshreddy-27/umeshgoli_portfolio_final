import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const ParticlesBackground = () => {
  const particlesInit = useCallback(async engine => { await loadFull(engine) }, [])
  return (
    <Particles init={particlesInit} options={{ fullScreen:{ enable:true, zIndex:-1 }, background:{ color:{ value: '#0a0a0a' } }, fpsLimit:60, interactivity:{ events:{ onHover:{ enable:true, mode:'grab' }, onClick:{ enable:true, mode:'push' }, resize:true }, modes:{ grab:{ distance:140, links:{opacity:0.3}}, push:{ quantity:2 } } }, particles:{ color:{ value:'#5C6BF2' }, links:{ color:'#4F8BFF', distance:140, enable:true, opacity:0.18, width:1 }, move:{ enable:true, speed:1, direction:'none', random:true, straight:false, outModes:'out' }, number:{ value:60, density:{ enable:true, area:900 } }, opacity:{ value:0.5 }, shape:{ type:'circle' }, size:{ value:{ min:1, max:3 } } }, detectRetina:true }} />
  )
}
export default ParticlesBackground
