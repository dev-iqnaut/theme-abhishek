import React from 'react';
import { Box, Typography, Paper, Button, Avatar, Container } from '@mui/material';
import { styled } from '@mui/system';

// Styled components for various elements
const BackgroundSection = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(https://cdn.pixabay.com/photo/2014/08/13/20/16/school-417612_1280.jpg)',  // Placeholder for background image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  height: '350px',
  display: 'flex',
  alignItems: 'center',
  padding: '20px',
  [theme.breakpoints.down('sm')]: {
    height: 'auto', // Adjust height on small screens
    padding: '10px', // Reduce padding on smaller screens
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column', // Default to column for small screens
  alignItems: 'center',
  width: '100%',
  height: '100%',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row', // Change to row for medium and larger screens
    justifyContent: 'space-between',
  },
}));

const TextContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',  // Center text for small screens
  color: '#fff',
  maxWidth: '100%', // Occupies full width on small screens
  paddingLeft: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left', // Align text to the left on medium and larger screens
  },
}));

const DottedContainer = styled(Paper)(({ borderColor, theme }) => ({
  border: `2px dotted ${borderColor}`,
  padding: '16px',
  borderRadius: '12px',
  position: 'relative',
  margin: '0 auto',
  marginTop: '30px', // Adjust margin for better spacing
  width: '100%',     // Set to 100% to fill available space
  maxWidth: '300px', // Limit maximum width for larger screens
  height: 'auto',    // Allow height to adjust based on content
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 'none',
  [theme.breakpoints.up('md')]: {
    marginTop: '0', // Remove margin on larger screens
    marginLeft: theme.spacing(4), // Add left margin for spacing on larger screens
  },
}));

const MoreMembersButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FF4081',  // Pink color for the button
  color: '#fff',
  borderRadius: '20px',
  padding: '10px 24px',
  marginTop: '16px',
  '&:hover': {
    backgroundColor: '#E91E63',  // Slightly darker on hover
  },
}));

export default function StudentTestimonial() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Background Section with Testimonial */}
      <BackgroundSection>
        <ContentWrapper>
          {/* Left Content Section */}
          <TextContainer>
            <Avatar 
              src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  // Profile picture
              alt="Student Name" 
              sx={{ width: { xs: 80, sm: 100 }, height: { xs: 80, sm: 100 }, marginBottom: 2 }}
            />
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              John Doe
            </Typography>
            <Typography variant="body1" gutterBottom>
              Software Engineering Graduate
            </Typography>
            <Typography variant="h6" fontStyle="italic">
              "Bridge has transformed my learning experience, providing me with the knowledge and skills I needed to succeed."
            </Typography>
          </TextContainer>

          {/* Dotted Container with More Members Button */}
          <DottedContainer borderColor="#3F51B5">
              {/* Blue dotted border */}
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              What Student Says <br /> About Bridge
            </Typography>
  
            <Typography variant="body1" gutterBottom>
              We have more inspiring stories from students like John who have benefited from our transformative educational approach.
            </Typography>
            <MoreMembersButton>
              More Members
            </MoreMembersButton>
          </DottedContainer>
        </ContentWrapper>
      </BackgroundSection>
    </Container>
  );
}
