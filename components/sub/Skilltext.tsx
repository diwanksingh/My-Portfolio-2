"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

const Skilltext = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center">
    
      <motion.div
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
        className="text-[30px] text-gray-400 font-semibold font-medium mt-4 text-center"
      >
        My{" "}
        <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          evolving
        </span>{" "}
        skillset
      </motion.div>

    </div>
  );
};

export default Skilltext;
