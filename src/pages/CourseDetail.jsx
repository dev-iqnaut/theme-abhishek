import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import MasteringMathematics from '../components/MasteringMaths.jsx'
import { useContext } from 'react';
import MyContext from '../context/ContextApi.jsx';

function CourseDetail() {

  const { siteData } = useContext(MyContext);
  console.log("Data at Course Detail", siteData);
 
  return (
    <>
    <HeroSection
        heading="Course Details"
        breadcrumb="Course Details"
        subHeading="Learn from the best and build a successful career in a highly competitive world."
        imageSrc="https://images.pexels.com/photos/6217805/pexels-photo-6217805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        buttonText="Join Us Now"
      />
      <MasteringMathematics/>
   </> 
  )
}

export default CourseDetail