"use client";
import React, { useMemo } from "react";
import { Progress } from "@/components/ui/progress";
import { WobbleCard } from "../ui/wobble-card";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromRight } from "@/utils/motion";

const skills = [
  { name: "Frontend Development", value: 96 },
  { name: "Backend Development", value: 46 },
  { name: "Database Management", value: 78 },
  { name: "UI/UX Design", value: 100 },
];

const hobbies = [
  "📚 Reading Books",
  "🏋️ Strength Training",
  "🦸‍♂️ Anime & Marvel",
  "🏊 Swimming",
  "🎨 Art & Craft",
  "🥊 Boxing",
];

const About = () => {
  const skillElements = useMemo(
    () =>
      skills.map((skill) => (
        <div key={skill.name} className="w-full mb-4">
          <h2 className="text-xs sm:text-sm text-white font-medium mb-1">{skill.name}</h2>
          <Progress value={skill.value} className="w-full h-2 bg-[#5bc0be] rounded-full" />
        </div>
      )),
    []
  );

  const hobbyElements = useMemo(
    () =>
      hobbies.map((hobby, index) => (
        <button
          key={index}
          className="px-4 py-2 text-xs sm:text-sm font-semibold border border-[#5bc0be] text-[#5bc0be] bg-transparent rounded-lg transition-all transform hover:-translate-y-1 hover:bg-[#6fffe9] hover:text-[#0b132b] duration-300 shadow-md"
        >
          {hobby}
        </button>
      )),
    []
  );

  return (
    <div
      
      className="flex flex-col items-center w-full justify-start pb-16 px-2 sm:px-2  relative"
    >
      {/* Intro Section */}
      <div className="text-center">
        <motion.div
          variants={slideInFromRight(0.5)}
          initial="hidden"
          animate="visible"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-white bg-clip-text"
        >
          A little more <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">About me</span>
        </motion.div>
        <p className="text-sm sm:text-base text-gray-300 mt-2 max-w-2xl mx-auto">
          Passionate developer turning ideas into reality with innovative solutions in web technologies.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row md:mt-20 lg:mt-20 items-center justify-center w-full gap-2">
        {/* Skills & Hobbies Section */}
        <div className="flex flex-col w-full md:w-[50%] space-y-6">
          {/* Technical Skills */}
          <WobbleCard containerClassName="p-2">
            <h1 className="text-lg sm:text-xl text-white font-semibold mb-4 text-center">🚀 Skills-Progress</h1>
            {skillElements}
          </WobbleCard>

          {/* Hobbies Section */}
          <WobbleCard containerClassName="bg-black/80 rounded-2xl overflow-hidden">
            <h2 className="text-lg text-white font-semibold text-center mb-4">🎯 Hobbies & Interests</h2>
            <div className="flex flex-wrap justify-center gap-3">{hobbyElements}</div>
          </WobbleCard>
        </div>

        {/* Image Section */}
        <div className="w-[80%] md:w-[40%] flex flex-col items-center">
          <h2 className="text-lg text-white font-semibold mb-4">📍 Located at</h2>
          <div className="relative flex justify-center items-center rounded-full opacity-90 shadow-md shadow-white ">
            <Image
              src="/delhi.png"
              alt="Diwank's Location"
              width={250}
              height={250}
              className=" w-full h-[180px] md:h-full object-contain rounded-full lg:h-full "
              priority
            />
            <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 bg-purple-300 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
