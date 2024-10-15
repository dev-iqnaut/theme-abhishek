import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import EducationalExperience from '../components/EdExperience.jsx';
import FAQPage from '../components/FAQPage.jsx'
import PopularFacultyAreas from '../components/Faculty.jsx';


function Faculty() {
  return (
    <>
    <HeroSection
        heading="Faculty"
        breadcrumb="Faculty"
        subHeading="Learn from the best and build a successful career in a highly competitive world."
        imageSrc="https://images.pexels.com/photos/6217805/pexels-photo-6217805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        buttonText="Join Us Now"
      />
      <EducationalExperience/>
      <PopularFacultyAreas/>
      <FAQPage/>
   </> 
  )
}

export default Faculty
