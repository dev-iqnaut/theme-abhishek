import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { useContext } from 'react';
import MyContext from '../context/ContextApi.jsx';

const PrincipleMessageSection = () => {

    const { siteData } = useContext(MyContext);
    console.log("Data at AboutUs", siteData);
  return (
    <Container sx={{ py: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: 4,
        }}
      >
        {/* Left Side - Photo */}
        <Paper
          component="img"
          src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Library"
          sx={{
            width: { xs: '100%', md: '50%' },
            borderRadius: 2,
            boxShadow: 3,
            objectFit: 'cover',
          }}
        />

        {/* Right Side - Content */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Welcome to Our Community
          </Typography>
          <Typography variant="body1" paragraph>
            {/* Join a vibrant community of learners and educators who are passionate about sharing
            knowledge and growing together. Experience the best education environment with support,
            collaboration, and innovation at its core. */}
            {siteData?.aboutUs?.principalMessage?.principalMessage}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <Box>
              <Typography variant="h6">Academic Excellence</Typography>
            </Box>
            <Box>
              <Typography variant="h6">Community Support</Typography>
            </Box>
            <Box>
              <Typography variant="h6">Achievement Awards</Typography>
            </Box>
            <Box>
              <Typography variant="h6">Innovative Learning</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default PrincipleMessageSection;
