import React from 'react'
import Navbar from "@/components/navbar";
import Hero from '@/pages/hero'
import TechStackCarousel from "@/components/carousel";

const page = () => {
  return (
    <div className='bg-[#e8e8e8]'>
      <Navbar />
      <Hero />
      <TechStackCarousel />
    </div>
  )
}

export default page
