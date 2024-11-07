import React from 'react';
import { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


// Custom styles for dotted border
const DottedBox = styled(Box)(({ theme }) => ({
  border: '2px dotted #FF4081',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
}));

// Custom styles for input fields
const DarkInput = styled(TextField)(({ theme }) => ({
  backgroundColor: '#f0f0f0',
}));

// Custom styles for contact info boxes
const DottedContentBox = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  border: '2px dotted',
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -0.789275, // Example: Latitude for Indonesia
  lng: 113.921327, // Example: Longitude for Indonesia
};

const ContactModule = () => {

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
    <Box sx={{ padding: { xs: '1rem', md: '2rem' }, height: '100%' }}>
      {/* Main container using flex layout */}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        alignItems="stretch"
        sx={{ height: '100%' }}
      >
        {/* Left side: Contact Form */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <DottedBox>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
            >
              Contact Our Education Experts Now!
            </Typography>
            <form
              noValidate
              autoComplete="off"
              style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
            >
              <DarkInput fullWidth label="Name" variant="outlined" margin="normal" />
              <DarkInput fullWidth label="Email" variant="outlined" margin="normal" />
              <DarkInput fullWidth label="Phone" variant="outlined" margin="normal" />
              <DarkInput fullWidth label="Subject" variant="outlined" margin="normal" />
              <DarkInput
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                margin="normal"
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#FF4081',
                  color: '#fff',
                  marginTop: '1rem',
                  borderRadius: '20px',
                  width: { xs: '100%', sm: '60%', md: '40%' },
                  alignSelf: { xs: 'center', md: 'flex-start' },
                }}
              >
                Send Your Question
              </Button>
            </form>
          </DottedBox>
        </Box>

        {/* Right side: Contact Info */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontSize: { xs: '2rem', md: '3rem' }, textAlign: { xs: 'center', md: 'left' } }}
          >
            Get in Touch with Us Today!
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '0.9rem', md: '1rem' } }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </Typography>

          {/* Phone Number */}
          <DottedContentBox sx={{ borderColor: '#FF7043' }}>
            <PhoneIcon sx={{ marginRight: '1rem', color: '#FF7043' }} />
            <Box>
              <Typography variant="h6">Phone Number</Typography>
              <Typography variant="body2">Call Us: (123) 234 1234</Typography>
            </Box>
          </DottedContentBox>

          {/* Location Address */}
          <DottedContentBox sx={{ borderColor: '#29B6F6' }}>
            <LocationOnIcon sx={{ marginRight: '1rem', color: '#29B6F6' }} />
            <Box>
              <Typography variant="h6">Location Address</Typography>
              <Typography variant="body2">
                Pekanbaru, Indonesia, 99 Roving St, Big City, PKU 23466
              </Typography>
            </Box>
          </DottedContentBox>

          {/* Email Address */}
          <DottedContentBox sx={{ borderColor: '#66BB6A' }}>
            <EmailIcon sx={{ marginRight: '1rem', color: '#66BB6A' }} />
            <Box>
              <Typography variant="h6">Email Address</Typography>
              <Typography variant="body2">hello@awesomesite.com</Typography>
            </Box>
          </DottedContentBox>
        </Box>
      </Stack>

      {/* Map Section */}
      <Box sx={{ marginTop: '2rem' }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ textAlign: 'center', marginBottom: '1rem', fontSize: { xs: '1.5rem', md: '2rem' } }}
        >
          Find Us On The Map
        </Typography>
        <LoadScript googleMapsApiKey="AIzaSyCtdAhuEP0MFaLGnO3WlXgak0QLe3T5V3A">
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </Box>
    </Box>
  );
};

export default ContactModule;
