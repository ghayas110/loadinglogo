
import React from 'react'
import Hero from './sections/Hero'
import Features from './sections/Features'
import ProjectSection from './sections/ProjectSection'
import PostCarousel from './sections/SwiperSection'
import ClientSection from './sections/Clients'
import BrandingSection from './sections/BrandingSection'
import HeroSection from './sections/Journey'


const Home = () => {
  return (
    <div className="custom-cursor">
      <Hero />
    <Features/>
    <ProjectSection/>
    <PostCarousel/>
    <ClientSection/>
    <BrandingSection/>
    <HeroSection/>
    </div>
  )
}

export default Home
