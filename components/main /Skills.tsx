import { Backend_skill, Frontend_skill, Languages_skill } from '@/constant'
import React from 'react'
import Skilldataprovider from '../sub/Skilldataprovider'
import Skilltext from '../sub/Skilltext'


const Skills = () => {
  return (
    
    <div
    id='Skills'
    style={{transform: "scale(0.9"}}
    
    className='flex flex-col justify-center items-center gap-4 relative overflow-hidden
    h-full py-14'>
      <Skilltext/>
   <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
  {Frontend_skill.map((image,index)=>(
    <Skilldataprovider
    key={index}
    src={image.Image}
    width={image.width}
    height={image.height}
    index={index}
    
    />
  ))}

   </div>
   <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
  {Backend_skill.map((image,index)=>(
    <Skilldataprovider
    key={index}
    src={image.Image}
    width={image.width}
    height={image.height}
    index={index}
    
    />
  ))}

   </div>

   <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
  {Languages_skill.map((image,index)=>(
    <Skilldataprovider
    key={index}
    src={image.Image}
    width={image.width}
    height={image.height}
    index={index}
    
    />
  ))}

   </div>
   <div className='w-full h-full absolute'>
    <div className='w-full h-full z-[-10] opacity-37  absolute md:flex lg:flex items-center justify-center '>
      <video
      className='w-full h-full '
      preload='false'
      playsInline
      loop
      muted
      autoPlay
      src="/cards-video.mp4"
      />
    </div>
   </div>



    </div>
  )
}

export default Skills