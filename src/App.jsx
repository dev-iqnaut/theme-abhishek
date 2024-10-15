// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar component
import Footer from './components/Footer'
import Home from './pages/HomePage'; // Home page component
import AboutUs from './pages/AboutUs'; // About Us page component
import Courses from './pages/Courses'; // Courses page component
import SingleBlog from './pages/SingleBlog';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Testimonials from './pages/Testimonials';
import Faculty from './pages/Faculty';
import Professional from './pages/Professional';
import Career from './pages/Career';
import ContactUs from './pages/ContactUs'; // Contact Us page component
import CourseDetail from './pages/CourseDetail';

const App = () => {
  return (
    <div>
      {/* Navbar will be displayed on all pages */}
      <Navbar />
      {/* Define routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/courses/courses" element={<Courses />} />
        <Route path="/courses/course-details" element={<CourseDetail />} />
        <Route path="/blog/single-blog" element={<SingleBlog />} />
        <Route path="/blog/blog" element={<Blog />} />
        <Route path="/pages/FAQ" element={<FAQ />} />
        <Route path="/pages/testimonials" element={<Testimonials />} />
        <Route path="/pages/faculty" element={<Faculty />} />
        <Route path="/pages/professional" element={<Professional />} />
        <Route path="/pages/Career" element={<Career />} />
        <Route path="/pages/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;

