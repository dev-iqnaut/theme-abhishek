import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const SubscribeSection = () => {
  return (
    <Box sx={styles.subscribeSection}>
      {/* Left Side: Image */}
      <Box 
        component="img" 
        src="https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="Education" 
        sx={styles.image} 
      />

      {/* Right Side: Heading and Input */}
      <Box sx={styles.textContainer}>
        <Typography variant="h4" sx={styles.heading}>
          Subscribe for Education Insights!
        </Typography>
        <Box sx={styles.inputContainer}>
          <TextField
            variant="outlined"
            placeholder="Enter your email"
            sx={styles.input}
          />
          <Button variant="contained" sx={styles.button}>
            Subscribe
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  subscribeSection: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' }, // Column on small screens, row on medium and up
    alignItems: 'center',
    border: '3px dotted #FF69B4',
    padding: '20px',
    margin: '20px 0',
    borderRadius: '8px',
  },
  image: {
    width: { xs: '100%', md: '50%' }, // Full width on small screens, half on medium and up
    height: { xs: '150px', md: '200px' }, // Adjust height for smaller screens
    borderRadius: '8px',
    objectFit: 'cover',
    marginBottom: { xs: '20px', md: 0 }, // Add margin at the bottom for small screens
  },
  textContainer: {
    flex: 1,
    paddingLeft: { md: '20px' }, // Add padding only on medium and larger screens
    textAlign: 'center', // Center text on small screens
    alignItems: 'center', // Center align text on small screens
  },
  heading: {
    marginBottom: '16px',
    color: '#333',
    fontWeight: 'bold',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' }, // Stack on small screens, row on larger
    alignItems: 'center',
    width: '100%', // Ensure it takes full width
  },
  input: {
    flex: 1,
    marginRight: { sm: '10px' }, // Right margin only on larger screens
    marginBottom: { xs: '10px', sm: 0 }, // Bottom margin on small screens
  },
  button: {
    backgroundColor: '#FF69B4', 
    '&:hover': {
      backgroundColor: '#e75480',
    },
  },
};

export default SubscribeSection;
