"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import Navbar from "@/components/navbar";
import GetInTouchButton from "@/components/get_in_touch_button";

export default function Home() {
  return (
    <div
      className="bg-[linear-gradient(to_right,#293438,#242C30,#1D2429,#0F1314,#010000)] 
        flex flex-col min-h-screen relative overflow-auto"
    >
      <Navbar />
      <main className="flex-grow grid grid-cols-2 items-center justify-center px-4">
        <div className="flex flex-col items-center text-center text-[#D3DAD9] space-y-10 p-16 bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl m-16 relative z-10">
          <Image
            src="/img/logo.png"
            alt="web-icon"
            width={180}
            height={180}
            className="mx-auto my-6 rounded-xl shadow-lg shadow-black/30 border-4 border-[#B5A642]/30"
          />
          <h1 className="oswald text-2xl text-[#B5A642] md:text-5xl font-bold">
            John Masahiro B. Shirai
          </h1>
          <h2 className="text-lg md:text-2xl font-light text-[#B5A642]">
            <ReactTyped
              strings={[
                "Web Developer",
                "Frontend Developer",
                "Backend Developer",
                "Fullstack Developer",
                "Software Developer",
                "Programmer",
                "Tech Enthusiast",
                "Learner",
                "Innovator",
                "Problem Solver",
                "Creative Thinker",
                "Team Player",
                "Passionate Coder",
                "Continuous Improver",
                "Tech Explorer",
                "Collaborator",
                "Critical Thinker",
                "Efficient Worker",
              ]}
              typeSpeed={30}
              backSpeed={40}
              loop
            />
          </h2>
          <GetInTouchButton />
        </div>
        <div className="relative flex items-center justify-center h-full w-full"></div>
      </main>
    </div>
  );
}
