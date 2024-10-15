import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const professions = [
  { title: 'Teacher / Educator', time: 'Part Time', location: 'New York, USA', description: 'Teach and educate students at various levels, from primary schools to universities, in different subjects and disciplines.' },
  { title: 'Guidance Counselor', time: 'Part Time', location: 'Chicago, USA', description: 'Provide counseling to students and help them in achieving their academic and career goals throughout.' },
  { title: 'Educational Consultant', time: 'Part Time', location: 'San Francisco, USA', description: 'Offer guidance to schools and educational institutions on curriculum development and teaching methods.' },
  { title: 'College Admissions Officer', time: 'Part Time', location: 'Boston, USA', description: 'Assist students with the college admissions process and ensure they meet the necessary requirements.' },
  { title: 'Curriculum Developer', time: 'Part Time', location: 'Los Angeles, USA', description: 'Design and develop educational programs and lesson plans for schools and universities throughout.' },
  { title: 'College Professor', time: 'Part Time', location: 'Houston, USA', description: 'Teach specialized courses at the university level and conduct research in your field of expertise.' },
];

const Career = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Education Professionals Wanted
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between', // Changed to space-between for better alignment
          gap: 4,
          mt: 4,
        }}
      >
        {professions.map((profession, index) => (
          <Box
            key={index}
            sx={{
              border: '2px dashed',
              borderColor: index % 2 === 0 ? 'primary.main' : 'secondary.main',
              width: { xs: '100%', sm: '300px' }, // Full width on small screens
              padding: 3,
              borderRadius: 2,
              textAlign: 'center',
              transition: 'transform 0.2s', // Added transition for scale effect
              '&:hover': {
                transform: 'scale(1.02)', // Scale effect on hover
                boxShadow: 4, // Shadow effect on hover
              },
            }}
          >
            <Typography variant="h6" gutterBottom>
              {profession.title}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 1,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <WorkOutlineIcon fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="body2" color="textSecondary">
                  {profession.time}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="body2" color="textSecondary">
                  {profession.location}
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
              {profession.description}
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                width: '100%', // Full width button
                backgroundColor: '#FF4081', // Pink color
                borderRadius: '50px', // Rounded corners
                transition: 'background-color 0.2s ease-in-out, transform 0.2s ease-in-out', // Smooth transition
                '&:hover': {
                  backgroundColor: '#ff6699', // Slightly darker pink on hover
                  transform: 'scale(1.05)', // Slightly scale the button on hover
                },
              }}
            >
              Apply Now
            </Button>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Career;
