import { Box, Typography, Container, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { useEffect, useState } from 'react';
import { getSiteData } from '../firebase/fetchFirebase';


const DottedContainer = styled(Paper)(({ theme }) => ({
  border: '2px dotted #E91E63',
  padding: theme.spacing(4),
  borderRadius: '12px',
  boxShadow: 'none',
  flex: '1 1 45%',
  minWidth: '280px', 
  [theme.breakpoints.down('sm')]: {
    minWidth: '100%', 
    padding: theme.spacing(3), 
  },
}));

export default function VisionMissionSection() {

  const [siteData, setSiteData] = useState({});

  useEffect(()=>{
    const fetchdata=async()=>{
      const data= await getSiteData()
      setSiteData(data.siteData)
      console.log(data);
    }
    fetchdata()
    console.log("from Component",siteData);
    
},[])
  return (
    <Box
      sx={{
        backgroundImage:
          'url(https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: { xs: 6, md: 8 },
        position: 'relative',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{
          mb: 4,
          fontSize: { xs: '1.8rem', md: '2.5rem' }, 
        }}
      >
        Our Vision & Mission
      </Typography>

      {/* Flexbox for Dotted Containers */}
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-around', 
            alignItems: 'center', 
            gap: 4, 
          }}
        >
          {/* Vision Section */}
          <DottedContainer elevation={0}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} // Responsive heading
            >
              Our Vision
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }} // Responsive body text
            >
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
              libero. Sed cursus ante dapibus diam.  */}
              { siteData?.aboutUs?.vision}
              
            </Typography>
          </DottedContainer>

          {/* Mission Section */}
          <DottedContainer elevation={0}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} // Responsive heading
            >
              Our Mission
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }} // Responsive body text
            >
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
              libero. Sed cursus ante dapibus diam. */}
               { siteData?.aboutUs?.mission}
            </Typography>
          </DottedContainer>
        </Box>
      </Container>
    </Box>
  );
}
