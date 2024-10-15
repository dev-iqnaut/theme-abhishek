import { Box, Typography, Paper, Avatar, IconButton, Container } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Container for the lecturer cards
const DottedContainer = styled(Paper)(({ borderColor }) => ({
  border: `2px dotted ${borderColor}`,
  padding: '16px', 
  borderRadius: '12px',
  position: 'relative',
  margin: '16px',
  width: '100%', // Use full width to make it responsive
  maxWidth: '220px', // Set a max width to ensure uniformity
  boxShadow: 'none',
  textAlign: 'center',
  flexShrink: 0, 
}));

const SocialIconButton = styled(IconButton)({
  color: '#FF4081',
});

export default function OurExpertLecturer() {
  const lecturers = [
    {
      name: 'John Doe',
      designation: 'Senior Lecturer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      borderColor: '#FF5722',
    },
    {
      name: 'Jane Smith',
      designation: 'Associate Professor',
      image: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      borderColor: '#4CAF50',
    },
    {
      name: 'Mark Evans',
      designation: 'Assistant Professor',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      borderColor: '#2196F3',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex-start' }}>
      {/* Heading and content on the left */}
      <Box sx={{ flex: 1, pr: { xs: 0, md: 4 }, mb: { xs: 4, md: 0 } }}>
        <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
          Our Expert Lecturers
        </Typography>
        <Typography variant="body1" paragraph>
          Meet our highly qualified and experienced faculty who are committed to providing transformative learning experiences.
        </Typography>
      </Box>

      {/* Lecturer cards on the right */}
      <Box sx={{ flex: 3, display: 'flex', justifyContent: 'space-between', flexWrap: { xs: 'wrap', md: 'nowrap' }, gap: '16px' }}>
        {lecturers.map((lecturer, index) => (
          <DottedContainer key={index} borderColor={lecturer.borderColor}>
            {/* Lecturer's Photo */}
            <Avatar 
              src={lecturer.image} 
              alt={lecturer.name} 
              sx={{ width: 120, height: 120, margin: '0 auto', mb: 2 }} 
            />

            {/* Lecturer's Name and Designation */}
            <Typography variant="h6" component="h3" fontWeight="bold" gutterBottom>
              {lecturer.name}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {lecturer.designation}
            </Typography>

            {/* Social Media Icons in Pink */}
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: '8px' }}>
              <SocialIconButton>
                <FacebookIcon />
              </SocialIconButton>
              <SocialIconButton>
                <TwitterIcon />
              </SocialIconButton>
              <SocialIconButton>
                <LinkedInIcon />
              </SocialIconButton>
            </Box>
          </DottedContainer>
        ))}
      </Box>
    </Container>
  );
}
