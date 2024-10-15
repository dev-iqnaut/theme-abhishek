import { Box, Typography, Paper, Container } from '@mui/material';
import { styled } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check'; // Import Check icon

// Styled dotted container with reduced padding for smaller height
const DottedContainer = styled(Paper)(({ borderColor }) => ({
  border: `2px dotted ${borderColor}`, // Dynamic border color
  padding: '16px',  // Adjusted padding for better spacing
  borderRadius: '8px',
  textAlign: 'left',
  marginBottom: '16px',  // Reduced margin between containers
  boxShadow: 'none',
}));

export default function TransformativeEducationalExperience() {
  const sections = [
    { title: 'Academic Excellence', borderColor: '#FF5722' },
    { title: 'Innovative Learning', borderColor: '#4CAF50' },
    { title: 'Student Success', borderColor: '#2196F3' },
    { title: 'Community and Technology', borderColor: '#9C27B0' },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Using Flexbox to align image and content side by side */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Column for small screens, row for larger
          alignItems: 'center',
          gap: { xs: 4, md: 0 }, // Gap between the content and image
        }}
      >
        {/* Left side (content) */}
        <Box sx={{ flex: 1, marginRight: { md: '24px' }, marginBottom: { xs: '24px', md: 0 } }}>
          <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
            Providing a Transformative Educational Experience
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </Typography>

          {/* Four dotted containers */}
          {sections.map((section, index) => (
            <DottedContainer key={index} borderColor={section.borderColor}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CheckIcon sx={{ color: section.borderColor, marginRight: '8px' }} /> {/* Tick icon */}
                <Typography variant="h6" component="h3" fontWeight="bold">
                  {section.title}
                </Typography>
              </Box>
            </DottedContainer>
          ))}
        </Box>

        {/* Right side (photo) */}
        <Box
          component="img"
          src="https://images.pexels.com/photos/8199187/pexels-photo-8199187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with actual image URL
          alt="Educational Experience"
          sx={{
            width: '100%',
            height: 'auto',
            borderRadius: '12px',
            maxWidth: '500px',  // Ensures image doesn't get too wide
            flex: 1,
          }}
        />
      </Box>
    </Container>
  );
}
