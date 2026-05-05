"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export type TimelineEntry = {
  title: string;
  content: React.ReactNode;
};

export const Timeline = ({
  data,
  className,
}: {
  data: TimelineEntry[];
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const update = () => {
      const rect = ref.current!.getBoundingClientRect();
      setHeight(rect.height);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 15%", "end 55%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className={cn("w-full font-sans md:px-10", className)}
    >
      <div ref={ref} className="relative max-w-6xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-24 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-32 self-start max-w-xs lg:max-w-sm md:w-full">
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-purple-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-10 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-purple-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-4 top-0 overflow-hidden w-px bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-white/10 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-px bg-gradient-to-t from-purple-500 via-blue-400 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
