import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import Testimonial from '../components/AboutBridge.jsx'


function Testimonials() {
  return (
   <>
    <HeroSection
        heading="Testimonials"
        breadcrumb="Testimonials"
        subHeading="Learn from the best and build a successful career in a highly competitive world."
        imageSrc="https://images.pexels.com/photos/8197533/pexels-photo-8197533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        buttonText="Join Us Now"
      />
      <Testimonial/>
   </> 
  )
}

export default Testimonials