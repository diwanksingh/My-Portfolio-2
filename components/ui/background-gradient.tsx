"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion"; // Corrected import from 'motion/react' to 'framer-motion'

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    },
  };

  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: "300% 300%",
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-0 opacity-70 group-hover:opacity-90 transition-opacity duration-700 blur-lg will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0%_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0%_0,#1ca0fb,#141316)]"
        )}
      />
      
      <div className={cn("relative z-10 p-2", className)}>{children}</div>
    </div>
  );
};
