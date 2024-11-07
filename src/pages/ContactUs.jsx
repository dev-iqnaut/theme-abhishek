import React from 'react'
import ContactModule from '../components/ContactModule.jsx'
import HeroSection from '../components/HeroSection.jsx'
import { useContext} from 'react';
import MyContext from '../context/ContextApi.jsx';

function ContactUs() {

  const { siteData } = useContext(MyContext);
  console.log("Data at Contact Us", siteData);

  return (
    <>
     <HeroSection
        heading="Contact Us"
        breadcrumb="Contact Us"
        subHeading="Learn from the best and build a successful career in a highly competitive world."
        imageSrc="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        buttonText="Join Us Now"
      />
    <ContactModule/>
    </>
  )
}

export default ContactUs