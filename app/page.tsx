import React from 'react';
import Navbar from "@/components/navbar";
import Hero from '@/pages/hero';
import About from '@/pages/about';
import Projects from '@/pages/projects'
import TechStackCarousel from "@/components/carousel";

const page = () => {

  return (
    <div className='bg-[#e8e8e8]'>

      <Navbar />
      <section id='home'>
        <Hero />
      </section>

      <TechStackCarousel />

      <section id='about'>
        <About />
      </section>

      <section id='projects'>
        <Projects />
      </section>
    </div>
  )
}

export default page
