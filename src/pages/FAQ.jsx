import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import FAQPage from '../components/FAQPage.jsx'
import EducationBenefits from '../components/Accordions.jsx'
function FAQ() {
  return (
    <>
    <HeroSection
        heading="FAQ"
        breadcrumb="FAQ"
        subHeading="Learn from the best and build a successful career in a highly competitive world."
        imageSrc="https://images.pexels.com/photos/6209566/pexels-photo-6209566.jpeg"
        buttonText="Join Us Now"
      />
      <FAQPage/>
      <EducationBenefits/>
   </> 
  )
}

export default FAQ