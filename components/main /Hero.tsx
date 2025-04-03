
import React from 'react'
import Herocontent from '../sub/Hero-content'
import { Vortex } from '../ui/vortex'

function Hero() {
  return (
    <div 
    id='Home'
    className='relative flex justify-center flex-col h-full w-full'>
   <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={500}
          baseHue={300}
          className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
        >
   <Herocontent/>
   </Vortex>
 </div>
  )
}

export default Hero