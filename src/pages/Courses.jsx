import HeroSection from '../components/HeroSection.jsx'
import OptimizeYourLearning from '../components/optimizeLearning.jsx';
import SubscribeSection from '../components/SubscribeSection.jsx'
import { useContext } from 'react';
import MyContext from '../context/ContextApi.jsx';


import React from 'react'

function Courses() {

  const { siteData } = useContext(MyContext);
  console.log("Data at Courses", siteData);

  return (
    <>
       <HeroSection
        heading="Courses"
        breadcrumb="Courses"
        subHeading="Learn from the best and build a successful career in a highly competitive world."
        imageSrc="https://images.pexels.com/photos/6217805/pexels-photo-6217805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        buttonText="Join Us Now"
      />
      <OptimizeYourLearning/>
      <SubscribeSection/>
    </>
  )
}

export default Courses