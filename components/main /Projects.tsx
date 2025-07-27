"use client";
import React from "react";
import Projectcard from "../sub/Projectcard";
import { motion } from "framer-motion";
import {  slideInFromRight } from "@/utils/motion";


const Projects = () => {
  return (
    <div
    id="Projects"
    className="flex flex-col items-center justify-center pb-20">
  <div className="text-center mt-20 px-6">
        <motion.div
        variants={slideInFromRight(0.5)}
         initial="hidden"
         animate="visible"
        className="md:text-[35px] lg:text-[40px] sm:text-[16px] text-[24px] font-bold text-transparent bg-white bg-clip-text ">
          Explore <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Innovative Tech Projects</span>
        </motion.div>
        <p className="text-base text-gray-300 mt-3 max-w-3xl mx-auto">
          A collection of projects developed using various
          technologies.
        </p>
      </div>
      <div className="h-full w-full flex flex-col  justify-center items-center space-y-8 "> 
        <Projectcard
          src="/textify.png"
          tittle="Textify"
          description="Textify is a real-time communication app developed by Diwank Singh for the community to connect, share thoughts, and exchange images effortlessly. Designed with simplicity and ease of use in mind, the app allows users to chat instantly, share media, and foster meaningful conversations in a secure environment. "
          link="https://textify-hosted.onrender.com/"
          slideData={[
            {
              title: "Create Account Today!",
             src: "/textify1.png",
            },
            {
              title: "24 theme options",
            src: "/textify2.png",
            },
            {
              title: "Real-Time communication",
             src: "/textify3.png",
            },
            {
              title: "Make video-call room",
             src: "/textify4.png",
            },
            {
              title: "try out today!",
             src: "/textify5.png",
            },
          ]}
        />
         <Projectcard
          src="/mock-mate.png"
          tittle="Mock-Mate"
          description="platform for users to prepare for interviews, customize mock sessions, and gather actionable feedback for continuous growth. our tools are designed to support your journey toward success."
          link="https://mock-mate-three-gilt.vercel.app/"
          slideData={[
            {
              title: "Give Mock-Mate a try!",
             src: "/mm1.png",
            },
            {
              title: "Create your own mock interview",
            src: "/mm2.png",
            },
            {
              title: "Real-time interview with feedback!",
             src: "/mm-3.png",
            },
            {
              title: "Try it out today!",
             src: "/mm4.png",
            },
           
            
          ]}
        />
        <Projectcard
          src="/writeup.png"
          tittle="Writeup"
          description="Blog Writing Web App is a powerful platform designed to transform the way you create, manage, and maintain your blogs. With its sleek, user-friendly interface, the app makes it incredibly easy to create, edit, update, and delete posts—all with just a few clicks."
          link="https://writeup-t13u.onrender.com/"
          slideData={[
            {
              title: "Create Account today!",
             src: "/writeup4.png",
            },
            {
              title: "Blog writier",
            src: "/writeup1.png",
            },
            {
              title: "posts updated in real-time",
             src: "/writeup2.png",
            },
            {
              title: "Express yourself",
             src: "/writeup3.png",
            },
            
          ]}
        />
           <Projectcard
          src="/earthlogo.png"
          tittle="Three.js-Earth"
          description="Experience Earth  with a fully interactive, real-time 3D visualization from space. This immersive experience lets you explore our planet in stunning detail"
          link="https://3-d-earth-murex.vercel.app/"
          slideData={[
            {
              title: "3D earth!",
             src: "/earth1.png",
            },
            {
              title: "motion-effects",
            src: "/earth2.png",
            },
            {
              title: "",
             src: "/earth3.png",
            },
           
            
          ]}
        />
      
      </div>
    </div>
  );
};

export default Projects;
