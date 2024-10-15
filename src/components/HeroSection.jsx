import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const HeroSection = ({ heading, breadcrumb, imageSrc }) => {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 4,
        backgroundColor: '#FFFFF',
        minHeight: '400px',
      }}
    >
      {/* Left side: Heading and Breadcrumb */}
      <Box sx={{ flex: 1, ml: { xs: 0, md: 5 }, textAlign: { xs: 'center', md: 'left' } }}>
        {/* Heading */}
        <Typography 
          variant="h2" 
          sx={{ fontWeight: 'bold', mb: 2, color: '#333', fontSize: { xs: '2rem', md: '3rem' } }} // Responsive font size
        >
          {heading}
        </Typography>

        {/* Breadcrumb */}
        <Box>
          <Link href="/" sx={{ color: '#FF4081', textDecoration: 'none', fontWeight: 'bold' }}>
            Home
          </Link>
          {" / "}
          <Typography 
            component="span" 
            sx={{ color: '#333', fontWeight: 'medium' }}
          >
            {breadcrumb}
          </Typography>
        </Box>
      </Box>

      {/* Right side: Image */}
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', mt: { xs: 2, md: 0 } }}>
        <Box 
          component="img" 
          src={imageSrc} 
          alt="Hero Image" 
          sx={{ 
            width: { xs: '100%', md: '520px' }, // Responsive width
            height: 'auto', // Maintain aspect ratio
            borderRadius: '48%', 
            objectFit: 'cover',
          }} 
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
