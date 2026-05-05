"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Experience as ExperienceType, Experiences } from "@/constant";
import { slideInFromLeft } from "@/utils/motion";
import { Timeline } from "../ui/timeline";

const ExperienceCard = ({ exp }: { exp: ExperienceType }) => {
  return (
    <div className="group relative w-full">
      <div
        aria-hidden
        className="absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500/40 via-blue-500/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]"
      />
      <div className="relative w-full rounded-2xl border border-white/10 bg-[#0a0118]/80 backdrop-blur-xl p-5 md:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.35)]">
        <div className="flex items-start gap-4">
          <div className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/25 to-blue-500/25 ring-1 ring-white/10">
            <Briefcase className="h-5 w-5 text-purple-200" />
          </div>

          <div className="flex flex-col gap-1.5 min-w-0">
            <h4 className="text-lg md:text-xl font-semibold text-white leading-tight">
              {exp.role}
            </h4>

            <p className="text-sm md:text-base text-gray-300">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300 font-medium">
                {exp.company}
              </span>
              <span className="text-gray-500"> &middot; {exp.type}</span>
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs md:text-sm text-gray-400">
              <span className="md:hidden inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-gray-500" />
                {exp.dates}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="hidden md:inline-block h-3.5 w-3.5 text-gray-500" />
                <span className="hidden md:inline">{exp.duration}</span>
                <span className="md:hidden">&middot; {exp.duration}</span>
              </span>
              <span className="inline-flex items-start gap-1.5">
                <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0 text-gray-500" />
                <span>{exp.location}</span>
              </span>
            </div>
          </div>
        </div>

        {exp.bullets.length > 0 && (
          <ul className="mt-5 space-y-2.5 pl-1">
            {exp.bullets.map((bullet, i) => (
              <li
                key={i}
                className="relative pl-5 text-sm md:text-[15px] leading-relaxed text-gray-300"
              >
                <span className="absolute left-0 top-2.5 h-px w-3 bg-gradient-to-r from-purple-400 to-blue-400" />
                {bullet}
              </li>
            ))}
          </ul>
        )}

        {exp.skills && exp.skills.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {exp.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs md:text-sm px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-gray-300 hover:border-purple-400/50 hover:text-white transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Experience = () => {
  const data = Experiences.map((exp) => ({
    title: exp.dates,
    content: <ExperienceCard exp={exp} />,
  }));

  return (
    <section id="Experience" className="relative z-10 w-full py-16">
      <div className="w-full flex flex-col items-center justify-center">
        <motion.div
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="md:text-[40px] lg:text-[44px] sm:text-[26px] text-[26px] font-bold text-transparent bg-white bg-clip-text text-center"
        >
          My professional{" "}
          <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            experience
          </span>
        </motion.div>
        <p className="text-base text-gray-300 mt-3 max-w-2xl mx-auto px-6 text-center">
          A timeline of roles where I shipped real product, scaled systems, and
          collaborated across teams.
        </p>
      </div>

      <Timeline data={data} />
    </section>
  );
};

export default Experience;
