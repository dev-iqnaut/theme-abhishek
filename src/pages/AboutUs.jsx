import React from 'react';
import WelcomeSection from '../components/WelcomeToCommunity.jsx';
import EducationalExperience from '../components/EdExperience.jsx';
import SubscribeSection from '../components/SubscribeSection.jsx';
import AchievementsSection from '../components/Achievements.jsx';
import FAQPage from '../components/FAQPage.jsx';
import OurExpertLecturer from '../components/Lecturer.jsx';
import VisionMissionSection from '../components/Containers.jsx';
import HeroSection from '../components/HeroSection.jsx';
import PrincipleMessageSection from '../components/PrincipleMessageSection.jsx';
import SchoolHistorySection from '../components/SchoolHistorySection.jsx';
import { useContext } from 'react';
import MyContext from '../context/ContextApi.jsx';

function AboutUs() {

  const { siteData } = useContext(MyContext);
  console.log("Data at AboutUs", siteData);
  


  return (
    <>
     <HeroSection
        heading= "About Us"
        breadcrumb="About Us"
        subHeading="Learn from the best and build a successful career in a highly competitive world."
        imageSrc="https://images.unsplash.com/photo-1580974852861-c381510bc98a?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        buttonText="Join Us Now"
      />  
      
    <WelcomeSection/>
    <SchoolHistorySection/>
    <PrincipleMessageSection/>
    <VisionMissionSection />
    <EducationalExperience/>
    <AchievementsSection/>
    <OurExpertLecturer/>
    <FAQPage/>
    <SubscribeSection/>
    </>
  )
}

export default AboutUs