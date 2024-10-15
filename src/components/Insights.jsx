import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

const InsightsSection = () => {
  // Sample data for the content
  const insights = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'Sept 26, 2024',
      topic: 'Innovative Approaches to Teaching',
      content: 'Discover new methods to improve classroom learning experience for students of all levels.',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/4940642/pexels-photo-4940642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'Sept 15, 2024',
      topic: 'Enhancing Critical Thinking Skills',
      content: 'Learn strategies to enhance critical thinking and problem-solving abilities in students.',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/28683722/pexels-photo-28683722/free-photo-of-speaker-presenting-at-a-tech-conference.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'Sept 10, 2024',
      topic: 'Leveraging Technology in Education',
      content: 'Explore how modern technology can be leveraged to make education more engaging and effective.',
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/20787619/pexels-photo-20787619/free-photo-of-conference-with-people-in-chairs-and-presenters-on-stage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'Sept 1, 2024',
      topic: 'Creating Inclusive Learning Environments',
      content: 'Understand the importance of inclusivity in education and how to implement it effectively.',
    },
  ];

  return (
    <Box sx={{ padding: '2rem' }}>
      {/* Heading for the Section */}
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '2rem', fontWeight: 'bold', color: '#333' }}>
        Insights & Ideas for Educational Excellence
      </Typography>

      {/* Main Layout: Left and Right Containers */}
      <Box 
        sx={{ 
          display: { xs: 'block', md: 'flex' }, // Stack on small screens, row on medium and up
          gap: '2rem' 
        }}
      >
        {/* Left Container - Larger Single Item */}
        <Paper 
          sx={{
            border: '2px dotted pink', 
            borderRadius: '8px', 
            padding: '1rem', 
            flex: '1',
            mb: { xs: '2rem', md: 0 }, // Add bottom margin on small screens
          }}
        >
          <img src={insights[0].image} alt="Insight" style={{ width: '100%', borderRadius: '8px', height: 'auto' }} />
          <Typography variant="subtitle2" sx={{ color: 'gray', marginTop: '0.5rem' }}>
            {insights[0].date}
          </Typography>
          <Typography variant="h6" sx={{ marginTop: '0.5rem' }}>
            {insights[0].topic}
          </Typography>
          <Typography variant="body2" sx={{ marginTop: '0.5rem' }}>
            {insights[0].content}
          </Typography>
        </Paper>

        {/* Right Containers - Three Smaller Rectangular Boxes */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: '1' }}>
          {insights.slice(1).map((insight) => (
            <Paper 
              key={insight.id} 
              sx={{ 
                border: '2px dotted #4caf50', 
                borderRadius: '8px', 
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexDirection: { xs: 'column', sm: 'row' }, // Stack on xs, row on sm and up
              }}
            >
              {/* Image on the left */}
              <img 
                src={insight.image} 
                alt="Insight" 
                style={{ 
                  width: { xs: '100%', sm: '80px' }, // Full width on xs, fixed size on sm+
                  height: '80px', 
                  borderRadius: '8px', 
                  objectFit: 'cover' 
                }} 
              />
              
              {/* Content on the right */}
              <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: { xs: 'center', sm: 'left' } }}>
                <Typography variant="subtitle2" sx={{ color: 'gray', fontSize: { xs: '12px', sm: 'inherit' } }}>
                  {insight.date}
                </Typography>
                <Typography variant="h6" sx={{ fontSize: { xs: '16px', sm: 'inherit' } }}>
                  {insight.topic}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: '14px', sm: 'inherit' } }}>
                  {insight.content}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default InsightsSection;
