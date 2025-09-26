"use client";
import React, { useRef, useState, useEffect } from "react";
import { Icon } from "@iconify/react";

// Add the animation styles
const animationStyles = `
  /* Responsive variables on the carousel root */
  .carousel {
    --slide-width: 110px;
    --slide-height: 44px;
  }

  @media (min-width: 640px) {
    .carousel {
      --slide-width: 130px;
      --slide-height: 48px;
    }
  }

  @media (min-width: 1024px) {
    .carousel {
      --slide-width: 150px;
      --slide-height: 50px;
    }
  }

  @keyframes carouselScroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(var(--slide-width) * -11));
    }
  }
  
  @keyframes floatingShadow {
    0% {
      box-shadow: 0px 0px 0px #bebebe, 0px 0px 0px #ffffff;
    }
    100% {
      box-shadow: 20px 20px 30px #bebebe, -20px -20px 30px #ffffff;
    }
  }
  
  .carousel-scroll-container {
    animation: carouselScroll 20s linear infinite;
    display: flex;
    width: calc(var(--slide-width) * 22);
  }
  
  .carousel-slide {
    height: var(--slide-height);
    width: var(--slide-width);
    flex-shrink: 0;
  }
  
  .floating-shadow {
    animation: floatingShadow 1.5s ease-out forwards;
  }
`;

export default function TechStackCarousel() {
  const [isInView, setIsInView] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before fully in view
      }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  const technologies = [
    { name: "React", icon: "logos:react" },
    { name: "Next.js", icon: "logos:nextjs-icon" },
    { name: "TypeScript", icon: "logos:typescript-icon" },
    { name: "Tailwind", icon: "logos:tailwindcss-icon" },
    { name: "Node.js", icon: "logos:nodejs-icon" },
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "HTML", icon: "logos:html-5" },
    { name: "CSS", icon: "logos:css-3" },
    { name: "Java", icon: "logos:java" },
    { name: "Git", icon: "logos:git-icon" },
    { name: "MongoDB", icon: "logos:mongodb-icon" },
  ];

  return (
    <div className="flex flex-col items-center text-center space-y-8 sm:space-y-10 px-4 sm:px-8 lg:px-25 pt-5 w-full">
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      
      {/* Infinite Carousel Container */}
      <div 
        ref={carouselRef}
        className={`carousel relative w-full overflow-hidden rounded-full bg-[#e8e8e8] p-4 sm:p-6 lg:p-8 ${isInView ? 'floating-shadow' : ''}`}
      >
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 h-full w-12 sm:w-20 lg:w-30 bg-gradient-to-r from-[#e8e8e8] to-transparent z-10 pointer-events-none"></div>
        
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 h-full w-12 sm:w-20 lg:w-30 bg-gradient-to-l from-[#e8e8e8] to-transparent z-10 pointer-events-none"></div>
        
        <div className="carousel-scroll-container">
          {/* First set of technologies */}
          {technologies.map((tech, index) => (
            <div key={`first-${index}`} className="carousel-slide flex items-center justify-center group">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon icon={tech.icon} className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <span className="text-[#071F3B] text-sm sm:text-base font-medium">{tech.name}</span>
              </div>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {technologies.map((tech, index) => (
            <div key={`second-${index}`} className="carousel-slide flex items-center justify-center group">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon icon={tech.icon} className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <span className="text-[#071F3B] text-sm sm:text-base font-medium">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
