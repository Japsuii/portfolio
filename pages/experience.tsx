"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

// Local animation styles to match neumorphic theme
const animationStyles = `
  @keyframes floatingShadow {
    0% { box-shadow: 0px 0px 0px #bebebe, 0px 0px 0px #ffffff; }
    100% { box-shadow: 20px 20px 30px #bebebe, -20px -20px 30px #ffffff; }
  }
`;

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

const itemUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function RevealOnView({ children, className = "", variants = fadeUp }: { children: React.ReactNode; className?: string; variants?: Variants; }) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.2, once: false }}
    >
      {children}
    </motion.div>
  );
}

export default function ExperiencePage() {
  return (
    <div className="bg-[#e8e8e8] min-h-screen w-full montserrat">
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      <main id="experience" className="px-0 lg:px-15 pt-8 lg:pt-20 pb-16">
        <RevealOnView className="w-full mx-auto px-8 sm:px-12 lg:px-15" variants={container}>
          <motion.div
            variants={itemUp}
            className="rounded-[32px] bg-[#e8e8e8] text-[#37353E] p-8 sm:p-10 md:p-12 shadow-[20px_20px_40px_#cfcfcf,-20px_-20px_40px_#ffffff]"
          >
            <h1 className="montserrat text-2xl md:text-3xl font-bold text-[#87C16B]">Experience — 2025</h1>
            <h2 className="mt-1 text-base md:text-lg font-medium">On-the-Job Training (OJT)</h2>
            <p className="mt-3 leading-relaxed">
              During my OJT, our team built a responsive website for our manager to streamline
              client engagement and appointment handling. I focused on crafting clean UI with
              modern motion, ensuring accessibility and mobile-first responsiveness while
              collaborating on key product and content sections.
            </p>

            <ul className="mt-5 space-y-3 text-sm">
              <li className="relative pl-8">
                <span className="absolute left-0 top-1 block w-3 h-3 rotate-45 bg-[#e8e8e8] shadow-[6px_6px_12px_#cfcfcf,-6px_-6px_12px_#ffffff] rounded-full" />
                Engineered a responsive appointment scheduling experience by embedding <span className="text-[#87C16B] font-medium">Calendly</span> within <span className="text-[#87C16B] font-medium">Next.js</span>/<span className="text-[#87C16B] font-medium">React</span>.
              </li>
              <li className="relative pl-8">
                <span className="absolute left-0 top-1 block w-3 h-3 rotate-45 bg-[#e8e8e8] shadow-[6px_6px_12px_#cfcfcf,-6px_-6px_12px_#ffffff] rounded-full" />
                Developed modular, accessible interfaces using <span className="text-[#87C16B] font-medium">React</span> hooks and <span className="text-[#87C16B] font-medium">Tailwind CSS</span> utility design.
              </li>
              <li className="relative pl-8">
                <span className="absolute left-0 top-1 block w-3 h-3 rotate-45 bg-[#e8e8e8] shadow-[6px_6px_12px_#cfcfcf,-6px_-6px_12px_#ffffff] rounded-full" />
                Orchestrated scroll-reveal and micro-interactions with <span className="text-[#87C16B] font-medium">Framer Motion</span> spring animations.
              </li>
              <li className="relative pl-8">
                <span className="absolute left-0 top-1 block w-3 h-3 rotate-45 bg-[#e8e8e8] shadow-[6px_6px_12px_#cfcfcf,-6px_-6px_12px_#ffffff] rounded-full" />
                Implemented filterable product taxonomy and category views using <span className="text-[#87C16B] font-medium">React</span> state and <span className="text-[#87C16B] font-medium">Next.js</span> routing.
              </li>
              <li className="relative pl-8">
                <span className="absolute left-0 top-1 block w-3 h-3 rotate-45 bg-[#e8e8e8] shadow-[6px_6px_12px_#cfcfcf,-6px_-6px_12px_#ffffff] rounded-full" />
                Built retirement and inflation calculators with <span className="text-[#87C16B] font-medium">TypeScript</span> and robust form validation.
              </li>
              <li className="relative pl-8">
                <span className="absolute left-0 top-1 block w-3 h-3 rotate-45 bg-[#e8e8e8] shadow-[6px_6px_12px_#cfcfcf,-6px_-6px_12px_#ffffff] rounded-full" />
                Delivered compliant contact workflows with explicit data privacy consent using <span className="text-[#87C16B] font-medium">React</span> forms and <span className="text-[#87C16B] font-medium">Tailwind CSS</span>.
              </li>
              <li className="relative pl-8">
                <span className="absolute left-0 top-1 block w-3 h-3 rotate-45 bg-[#e8e8e8] shadow-[6px_6px_12px_#cfcfcf,-6px_-6px_12px_#ffffff] rounded-full" />
                Optimized performance and SEO via <span className="text-[#87C16B] font-medium">Next.js</span> Image, route metadata, and lazy loading.
              </li>
              <li className="relative pl-8">
                <span className="absolute left-0 top-1 block w-3 h-3 rotate-45 bg-[#e8e8e8] shadow-[6px_6px_12px_#cfcfcf,-6px_-6px_12px_#ffffff] rounded-full" />
                Established CI/CD from <span className="text-[#87C16B] font-medium">GitHub</span> to <span className="text-[#87C16B] font-medium">Vercel</span> with preview environments and production releases.
              </li>
            </ul>
          </motion.div>
        </RevealOnView>
      </main>
    </div>
  );
}


