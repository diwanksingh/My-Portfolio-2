
import About from '@/components/main /About';
import Hero from '@/components/main /Hero'
import Projects from '@/components/main /Projects'
import Skills from '@/components/main /Skills'
import { StarsBackground } from "@/components/ui/stars-background";
import React from 'react';
import { WavyBackground } from '@/components/ui/wavy-background';

function Page() {
  return (
    <main className="h-auto w-full relative">
      
      <div className="flex h-full flex-col">
        <div className="h-screen relative">
       
          <Hero />
          
        </div>

        
        <div className="w-full h-[1px] bg-white"></div>

      
        <div className="bg-black relative z-10">
          <Skills />
          
          <Projects />
          <StarsBackground className='-z-10 pointer-events-none' />
        </div>
        <div  id="about-me"
        className="w-full mb-8 h-[1px] bg-white"></div>
        <div className='bg-black max-h-screen relative z-10'>
       <WavyBackground className='h-full mt-12 '><About /></WavyBackground> </div>
      </div>
    </main>
  );
}

export default Page;
