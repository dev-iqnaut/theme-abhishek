import React, { Component } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  
} from '@mui/material';
import WelcomeSection from '../components/WelcomeToCommunity.jsx'
import VisionMissionSection from '../components/Containers.jsx';
import PopularFacultyAreas from '../components/Faculty.jsx';
import EducationalExperience from '../components/EdExperience.jsx';
import OptimizeYourLearning from '../components/optimizeLearning.jsx';
import OurExpertLecturer from '../components/Lecturer.jsx';
import StudentTestimonial from '../components/StudentSays.jsx';
import FAQPage from '../components/FAQPage.jsx'
import InsightsSection from '../components/Insights.jsx'
import SubscribeSection from '../components/SubscribeSection.jsx'
import AchievementsSection from '../components/Achievements.jsx'

// Icons for Faculty Areas
const facultyIcons = ["🎓", "🔬", "🖥️", "📊", "🎨", "🏛️", "⚖️", "📚"];

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box
  sx={{
    py: 8,
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    gap: 4,
  }}
>
  <Box flex={1}>
    <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
      Empowering Minds, Shaping Futures.
    </Typography>
    <Typography variant="body1" sx={{ mb: 4 }}>
      Learn from the best and achieve academic excellence by exploring a range of world-class
      resources and facilities.
    </Typography>
    <Button
      variant="contained"
      sx={{ backgroundColor: '#d81b60', '&:hover': { backgroundColor: '#d81b60' } }}
    >
      Get Started
    </Button>
  </Box>

  <Box
    flex={1}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: 200,
          height: 300,
          borderRadius: '45%',
          overflow: 'hidden',
          backgroundColor: '#f0f0f0',
        }}
      >
        <img
          src="https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with your image source
          alt="Description of image 1"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>
      <Box
        sx={{
          width: 200,
          height: 300,
          borderRadius: '45%',
          overflow: 'hidden',
          backgroundColor: '#f0f0f0',
        }}
      >
        <img
          src="https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with your image source
          alt="Description of image 2"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>
    </Box>
    <Box
      sx={{
        width: 200,
        height: 300,
        borderRadius: '45%',
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',
      }}
    >
      <img
        src="https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with your image source
        alt="Description of image 3"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </Box>
  </Box>
</Box>


      {/* Welcome to Our Academic Community Section */}
      <WelcomeSection/>

      {/* Vision and Mission Section */}
      <VisionMissionSection />


      {/* Popular Faculty Areas of Study */}
      <PopularFacultyAreas/>

      {/* Providing a Transformative Educational Experience */}
      <EducationalExperience/>

      {/* Statistical Data Section */}
      <AchievementsSection/>

      {/* Optimize Your Learning Approach Section */}
      <OptimizeYourLearning/>

      {/* Our Expert Lecturers Section */}
      <OurExpertLecturer/>
      <StudentTestimonial/>
      <FAQPage/>
      <InsightsSection/>
      <SubscribeSection/>

    </Container>
  );
};

export default HomePage;
