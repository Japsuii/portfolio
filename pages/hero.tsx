"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import GetInTouchButton from "@/components/get_in_touch_button";
import Technology from "@/components/Technology.json";

// Add the floating shadow animation styles
const floatingShadowStyles = `
  @keyframes floatingShadow {
    0% {
      box-shadow: 0px 0px 0px #bebebe, 0px 0px 0px #ffffff;
    }
    100% {
      box-shadow: 20px 20px 30px #bebebe, -20px -20px 30px #ffffff;
    }
  }
  
  .floating-shadow {
    animation: floatingShadow 1.5s ease-in forwards;
  }
`;

export default function Home() {

  return (
    <div
      className="bg-[#e8e8e8] flex flex-col min-h-screen relative overflow-auto"
    >
      <style dangerouslySetInnerHTML={{ __html: floatingShadowStyles }} />
      <main className="flex-grow grid grid-cols-2 items-center justify-center px-4">
        <div className="rounded-[50px] bg-[#e8e8e8] floating-shadow flex flex-col items-center text-center space-y-5 py-20 mt-20 mx-25">
          <Image
            src="/img/logo.png"
            alt="web-icon"
            width={150}
            height={150}
            className="mx-auto my-6 rounded-xl shadow-lg shadow-black/30 border-4 border-[#114077]"
          />
          <h1 className="montserrat text-2xl text-[#114077] md:text-3xl font-bold">
            John Masahiro B. Shirai
          </h1>
          <h2 className="text-lg md:text-2xl font-light text-[#114077]">
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
        
        {/* Lottie Animation Column */}
        <div className="relative flex items-center justify-center h-full w-full">
          <div className="flex flex-col items-center text-center space-y-10 p-16 mt-25">            
            <div className="relative w-full h-96 flex items-center justify-center">
              <motion.div 
                className="w-130"
                initial={{ 
                  opacity: 0, 
                  x: -100 
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0 
                }}
                transition={{ 
                  duration: 1.5, 
                  ease: "easeOut",
                  delay: 0.5 
                }}
              >
                <Lottie
                  animationData={Technology}
                  loop={true}
                  autoplay={true}
                  style={{ width: '100%', height: '100%' }}
                  rendererSettings={{
                    preserveAspectRatio: 'xMidYMid slice'
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
