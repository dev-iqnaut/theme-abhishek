import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';

const testimonials = [
  {
    name: 'Jessica Miller',
    designation: 'Business Management Student',
    text: 'Attending Bridge has been a transformative experience...',
    image: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Alex Turner',
    designation: 'Marketing Graduate',
    text: 'I am grateful for the support and guidance I received at Bridge...',
    image: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Sarah Johnson',
    designation: 'Parent',
    text: 'As a parent, I am thrilled with my child’s progress at Bridge...',
    image: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Mark Foster',
    designation: 'Social Science Student',
    text: 'Bridge provides a vibrant and inclusive community...',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Emily Davis',
    designation: 'Psychology Researcher',
    text: 'Choosing Bridge for my postgraduate studies was a wise decision...',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Michael Brown',
    designation: 'Computer Science Graduate',
    text: 'I owe my success to Bridge and its exceptional faculty...',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const Testimonial = () => {
  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h3" align="center" gutterBottom>
        What People Say About Bridge
      </Typography>
      <Box 
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Box 
            key={index} 
            sx={{
              border: '2px dotted',
              borderColor: getRandomColor(),
              borderRadius: '8px',
              padding: '1.5rem',
              width: { xs: '100%', sm: '45%', md: '30%' },  // Responsive width
              textAlign: 'center',
              margin: { xs: '0.5rem', sm: '1rem' },         // Add margin for mobile/tablet
            }}
          >
            <Avatar 
              src={testimonial.image} 
              alt={testimonial.name}
              sx={{ width: 60, height: 60, margin: 'auto' }}
            />
            <Typography variant="body1" gutterBottom sx={{ fontSize: { xs: '14px', md: '16px' } }}>
              "{testimonial.text}"
            </Typography>
            <Typography variant="h6" color="textSecondary" sx={{ fontSize: { xs: '16px', md: '18px' } }}>
              {testimonial.name}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {testimonial.designation}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

// Function to return a random pastel color for the dotted border
const getRandomColor = () => {
  const colors = ['#FECACA', '#C7D2FE', '#A7F3D0', '#FED7AA', '#FDE68A', '#D8B4FE'];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default Testimonial;
