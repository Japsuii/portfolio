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
      <main id="home" className="flex-grow grid grid-cols-1 lg:grid-cols-2 items-center justify-center px-4 sm:px-10 lg:px-25 lg:gap-12">
        <div className="rounded-[32px] sm:rounded-[40px] md:rounded-[50px] bg-[#e8e8e8] floating-shadow flex flex-col items-center text-center space-y-4 lg:space-y-5 py-10 sm:py-14 md:py-20 mt-24 lg:mt-20 w-full mx-auto">
          <Image
            src="/img/logo.png"
            alt="web-icon"
            width={150}
            height={150}
            className="mx-auto my-4 sm:my-6 rounded-xl shadow-lg shadow-black/30 border-4 border-[#87C16B] w-24 sm:w-28 md:w-36 h-auto"
          />
          <h1 className="montserrat text-2xl text-[#87C16B] md:text-3xl font-bold">
            John Masahiro B. Shirai
          </h1>
          <h2 className="text-lg md:text-2xl font-light text-[#87C16B]">
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
        <div className="relative flex items-center justify-center w-full">
          <div className="flex flex-col items-center text-center space-y-8 sm:space-y-10 p-6 sm:p-10 lg:p-16 mt-6 md:mt-0 w-full">            
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] flex items-center justify-center">
              <motion.div 
                className="w-full max-w-[520px] md:max-w-[520px] lg:max-w-[800px]"
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
