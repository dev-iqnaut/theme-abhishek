import { Box, Typography, Button, Paper, Container } from '@mui/material';
import { styled } from '@mui/system';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import GavelIcon from '@mui/icons-material/Gavel';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PaletteIcon from '@mui/icons-material/Palette';
import ComputerIcon from '@mui/icons-material/Computer';

// Styled dotted container with dynamic border color
const DottedContainer = styled(Paper)(({ borderColor }) => ({
  border: `2px dotted ${borderColor}`,
  padding: '20px',
  borderRadius: '12px',
  textAlign: 'center',
  boxShadow: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

// Custom icon wrapper to control icon color
const IconWrapper = styled(Box)(({ iconColor }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50px',
  height: '50px',
  backgroundColor: iconColor,
  borderRadius: '50%',
  margin: '0 auto 16px',
  color: '#fff',
}));

export default function PopularFacultyAreas() {
  const faculties = [
    { name: 'Engineering', icon: <SchoolIcon />, iconColor: '#FF5722', borderColor: '#FF9800' },
    { name: 'Business Studies', icon: <BusinessIcon />, iconColor: '#673AB7', borderColor: '#9C27B0' },
    { name: 'Health Sciences', icon: <HealthAndSafetyIcon />, iconColor: '#2196F3', borderColor: '#03A9F4' },
    { name: 'Legal Studies', icon: <GavelIcon />, iconColor: '#4CAF50', borderColor: '#8BC34A' },
    { name: 'Education', icon: <MenuBookIcon />, iconColor: '#FFC107', borderColor: '#FFEB3B' },
    { name: 'Social Sciences', icon: <PsychologyIcon />, iconColor: '#FF4081', borderColor: '#F50057' },
    { name: 'Arts & Humanities', icon: <PaletteIcon />, iconColor: '#607D8B', borderColor: '#455A64' },
    { name: 'Computer Science', icon: <ComputerIcon />, iconColor: '#009688', borderColor: '#00BCD4' },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" textAlign="center" mb={6}>
        Popular Faculty Areas of Study
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)', // 1 column on extra-small screens (mobile)
            sm: 'repeat(2, 1fr)', // 2 columns on small screens
            md: 'repeat(3, 1fr)', // 3 columns on medium screens
            lg: 'repeat(4, 1fr)', // 4 columns on large screens
          },
          gap: 4,
        }}
      >
        {faculties.map((faculty, index) => (
          <DottedContainer key={index} borderColor={faculty.borderColor}>
            <IconWrapper iconColor={faculty.iconColor}>
              {faculty.icon}
            </IconWrapper>
            <Typography variant="h6" component="h3" gutterBottom>
              {faculty.name}
            </Typography>
            <Typography variant="body2" mb={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet accumsan lorem.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#FF4081',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#ff6699',
                  transform: 'scale(1.05)', // Scale effect on hover
                },
              }}
            >
              Learn More
            </Button>
          </DottedContainer>
        ))}
      </Box>
    </Container>
  );
}
