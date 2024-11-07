import React from 'react'
import InsightsSection from '../components/Insights'
import StayUpToDate from '../components/StayUpToDate'
import HeroSection from '../components/HeroSection'
import { useContext } from 'react';
import MyContext from '../context/ContextApi';

function Blog() {

  const { siteData } = useContext(MyContext);
  console.log("Data at Blog", siteData);
  return (
    <>
      <HeroSection
        heading="Blog"
        breadcrumb="Blog"
        subHeading="Learn from the best and build a successful career in a highly competitive world."
        imageSrc="https://images.pexels.com/photos/5905440/pexels-photo-5905440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        buttonText="Join Us Now"
      />
     <InsightsSection/>
     <StayUpToDate/>
    </>
  )
}

export default Blog