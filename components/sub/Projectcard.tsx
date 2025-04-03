import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "../ui/background-gradient";
import { Carousel } from "../ui/carousel";


interface Props {
  src: string;
  tittle: string;
  description: string;
  link:string;
  slideData:{
    title:string;
    src:string;
  }[];
}

const Projectcard = ({ src, tittle, description,link,slideData }: Props) => {
  return (
    <div
      className="flex w-full h-full flex-row items-center gap-6"
    >
    <div className="flex flex-col items-center justify-center   w-full  p-4 text-center ">
      <div className="relative overflow-hidden w-full h-full py-12 ">
      <Carousel slides={slideData} />
       </div> <BackgroundGradient>
        <Image
          src={src}
          alt={tittle}
          width={45} // Adjusted for rectangular shape
          height={4} // Reduced height for better aspect ratio
          className="rounded-full  "
        />
      </BackgroundGradient>
        <h1 className="text-xl sm:text-2xl items-center justify-center font-semibold text-white">{tittle}</h1>
        <p className="mt-2 text-sm lg:max-w-1/2 md:max-w-1/2 w-full sm:text-base text-gray-300">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-4">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl">
              View Project
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Projectcard;
