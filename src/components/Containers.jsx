import { Box, Typography, Container, Paper } from '@mui/material';
import { styled } from '@mui/system';

// Styling for the dotted bordered containers
const DottedContainer = styled(Paper)(({ theme }) => ({
  border: '2px dotted #E91E63',
  padding: theme.spacing(4),
  borderRadius: '12px',
  boxShadow: 'none',
  flex: '1 1 45%',
  minWidth: '280px', // Adjusted to accommodate small screens
  [theme.breakpoints.down('sm')]: {
    minWidth: '100%', // Full width on smaller screens
    padding: theme.spacing(3), // Reduced padding on small screens
  },
}));

export default function VisionMissionSection() {
  return (
    <Box
      sx={{
        backgroundImage:
          'url(https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', // Fixed URL and corrected typo
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        py: { xs: 6, md: 8 }, // Less padding for smaller screens
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
          fontSize: { xs: '1.8rem', md: '2.5rem' }, // Responsive font size
        }}
      >
        Our Vision & Mission
      </Typography>

      {/* Flexbox for Dotted Containers */}
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, row on larger screens
            justifyContent: 'space-around', // Space between the containers
            alignItems: 'center', // Align vertically in the center
            gap: 4, // Gap between the containers
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
              libero. Sed cursus ante dapibus diam.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
              libero. Sed cursus ante dapibus diam.
            </Typography>
          </DottedContainer>
        </Box>
      </Container>
    </Box>
  );
}
