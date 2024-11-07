import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import Testimonial from '../components/AboutBridge.jsx'
import { useContext } from 'react';
import MyContext from '../context/ContextApi.jsx';


function Testimonials() {

  const { siteData } = useContext(MyContext);
  console.log("Data at Testimonials", siteData);
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