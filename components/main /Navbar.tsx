import React from 'react'
import Image from 'next/image'
import { Socials } from '@/constant'

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg  bg-[#030000147]  z-15 px-10'>
      <div className='w-full h-full flex flex-row items-center justify-center m-auto p-10'>
        <a href='#about-me'
        className='h-auto w-auto flex flex-row items-center left-0 px-2 absolute lg:px-9 md:px-9'        
        >
          <Image
          src="/logo.png"
          alt="logo"
          width={70}
          height={70}
          className='cursor-pointer  '
          />
          <span className='font-bold ml-[10px] hidden lg:block text-gray-300'>
            Diwank Singh
          </span>
        </a>
        <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
          <div className='flex items-center w-full h-auto text-xs md:text-[14px] lg:text-[14px] justify-between border border-[#7042f861] bg-[#0300145e]   py-[10px] rounded-full px-[20px] text-gray-200'>
            <a href='#Home' className='text-gray-200 cursor-pointer hover:text-gray-300'>Home </a>
            <a href='#Skills' className='text-gray-200 cursor-pointer hover:text-gray-300'>Skills </a>
            <a href='#Projects' className='text-gray-200 cursor-pointer hover:text-gray-300'>Projects </a>
            <a href='#about-me' className='text-gray-200 cursor-pointer hover:text-gray-300'>About </a>
          </div>
        </div>
      <div className='flex flex-row fixed px-2 lg:px-9 md:px-9 right-0 gap-2 lg:gap-5 md:gap-5'>
      {Socials.map((social) => (
      <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
      <Image
       src={social.src}
       alt={social.name}
       width={30}
       height={30}
       />
      </a>
       ))}

      </div>
      
      
</div></div>
  )
}

export default Navbar;