"use client";

import React from "react";
import Image from "next/image";
import { motion, useAnimation, Variants } from "framer-motion";

// Local animation styles to match existing floating-shadow usage
const animationStyles = `
  @keyframes floatingShadow {
    0% { box-shadow: 0px 0px 0px #bebebe, 0px 0px 0px #ffffff; }
    100% { box-shadow: 20px 20px 30px #bebebe, -20px -20px 30px #ffffff; }
  }
  .floating-shadow { animation: floatingShadow 1.2s ease-out forwards; }
`;

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
};

const itemUp: Variants = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } };
const fadeUp: Variants = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

function RevealOnView({ children, className = "", variants = fadeUp }: { children: React.ReactNode; className?: string; variants?: Variants; }) {
    const controls = useAnimation();
    return (
        <motion.div
            className={className}
            variants={variants}
            initial="hidden"
            animate={controls}
            viewport={{ amount: 0.2 }}
            onViewportEnter={() => controls.start("show")}
            onViewportLeave={() => controls.start("hidden")}
        >
            {children}
        </motion.div>
    );
}

export default function About() {
    return (
        <div className="bg-[#e8e8e8] min-h-screen w-full montserrat">
            <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
            <main id="about" className="px-0 lg:px-15 pt-5 lg:pt-20 pb-16">
                {/* Card */}
                <RevealOnView className="w-full mx-auto p-4 sm:p-10 md:p-12" variants={fadeUp}>
                    <RevealOnView className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center" variants={container}>
                        {/* Left: Avatar and quick info */}
                        <motion.div variants={itemUp} className="flex flex-col items-center text-center space-y-5 floating-shadow rounded-[22px] sm:rounded-[30px] md:rounded-[40px] bg-[#e8e8e8] p-16">
                            <Image
                                src="/img/man.png"
                                alt="Profile picture"
                                width={220}
                                height={220}
                                className="rounded-2xl drop-shadow drop-shadow-lg drop-shadow-black/50 w-28 sm:w-36 md:w-48 h-auto transition-transform duration-300 will-change-transform hover:scale-105"
                            />
                            <div>
                                <h1 className="montserrat text-2xl md:text-3xl font-bold text-[#87C16B]">About Me</h1>
                                <p className="text-[#37353E] mt-2">Passionate Developer • Problem Solver • Lifelong Learner</p>
                            </div>
                            {/* Highlights */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-md text-[#37353E]">
                                {[
                                    "Frontend",
                                    "Backend",
                                    "Fullstack",
                                ].map((h) => (
                                    <span key={h} className="neo-btn text-sm transition-transform duration-200 will-change-transform hover:-translate-y-0.5 hover:scale-[1.02]">
                                        {h}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right: Bio */}  
                        <motion.div variants={itemUp} className="text-[#37353E] leading-relaxed space-y-5">
                            <h2 className="montserrat text-xl md:text-2xl font-semibold text-[#87C16B]">Hi, I’m John Masahiro B. Shirai</h2>
                            <p>
                                I build clean, user-focused web applications with modern technologies. I enjoy
                                transforming ideas into reliable, performant, and accessible experiences using
                                frameworks like React and Next.js, backed by solid API and data design.
                            </p>
                            <p>
                                My work blends thoughtful UI/UX with maintainable engineering practices. I love
                                collaborating, learning new tools, and shipping features that make a difference.
                            </p>
                            {/* Skills */}
                            <div>
                                <h3 className="montserrat text-lg font-semibold mb-3 text-[#87C16B]">Skills & Tools</h3>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "React",
                                        "Next.js",
                                        "TypeScript",
                                        "TailwindCSS",
                                        "Node.js",
                                        "Java",
                                        "MongoDB",
                                        "Git",
                                    ].map((skill) => (
                                        <span key={skill} className="neo-btn text-xs sm:text-sm transition-transform duration-200 will-change-transform hover:-translate-y-0.5 hover:scale-[1.02]">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </RevealOnView>
                </RevealOnView>

                {/* Secondary section: What I do */}
                <RevealOnView className="w-full mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-12 lg:px-15" variants={container}>
                    {[
                        {
                            title: "Frontend Craft",
                            desc: "Responsive, accessible interfaces with attention to detail and motion.",
                        },
                        {
                            title: "Backend Foundations",
                            desc: "Robust APIs, clean data models, and pragmatic architecture decisions.",
                        },
                        {
                            title: "Team & Delivery",
                            desc: "Clear communication, iterative delivery, and continuous improvement.",
                        },
                    ].map((card) => (
                        <motion.div
                            key={card.title}
                            variants={itemUp}
                            whileHover={{ y: -4, scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 260, damping: 18 }}
                            className="rounded-3xl bg-[#e8e8e8] neo-btn neo-btn--active text-[#37353E] text-center py-6 px-5"
                        >
                            <h4 className="montserrat text-[#87C16B] font-semibold text-base sm:text-lg">{card.title}</h4>
                            <p className="mt-2 text-xs sm:text-sm">{card.desc}</p>
                        </motion.div>
                    ))}
                </RevealOnView>
                
            </main>
        </div>
    );
}