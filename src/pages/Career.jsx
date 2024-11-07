import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import EducationalExperience from '../components/EdExperience.jsx';
import EdProfessionals from '../components/EdProfessionals.jsx';
import { useContext } from 'react';
import MyContext from '../context/ContextApi.jsx';

function Career() {

  const { siteData } = useContext(MyContext);
  console.log("Data at Career", siteData);

  return (
    <>
     <HeroSection
        heading="Career"
        breadcrumb="Career"
        subHeading="Learn from the best and build a successful career in a highly competitive world."
        imageSrc="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        buttonText="Join Us Now"
      />
      <EdProfessionals/>
      <EducationalExperience/>
    </>
  )
}

export default Career
