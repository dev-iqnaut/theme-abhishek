import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import OurExpertLecturer from '../components/Lecturer.jsx'
import StudentTestimonial from '../components/StudentSays.jsx'
import FAQPage from '../components/FAQPage.jsx'


function Professional() {
  return (
    <>
    <HeroSection
        heading="Professional"
        breadcrumb="Professional"
        subHeading="Learn from the best and build a successful career in a highly competitive world."
        imageSrc="https://images.pexels.com/photos/5905440/pexels-photo-5905440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        buttonText="Join Us Now"
      />
      <OurExpertLecturer/>
      <StudentTestimonial/>
      <FAQPage/>
   </> 
  )
}

export default Professional