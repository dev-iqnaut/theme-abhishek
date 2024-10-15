import { Box, Typography, Button, Paper, Avatar, Container } from '@mui/material';
import { styled } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';  // Star icon for the rating
import SchoolIcon from '@mui/icons-material/School';  // Icon for lessons

// Styled container with dotted border and padding
const DottedContainer = styled(Paper)(({ borderColor }) => ({
  border: `2px dotted ${borderColor}`,
  padding: '16px',
  borderRadius: '12px',
  position: 'relative',
  margin: '16px',
  width: '100%', // Make the width responsive
  maxWidth: '300px', // Maximum width for larger screens
  boxShadow: 'none',
  textAlign: 'center', // Center the text inside the container
}));

// Join Now button with rounded style
const RoundedButton = styled(Button)(() => ({
  borderRadius: '50px',
  padding: '8px 24px',
  backgroundColor: '#FF4081',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#E91E63',
  },
}));

export default function OptimizeYourLearning() {
  const sections = [
    {
      title: 'Mastering Interview Basics',
      teacher: 'John Doe',
      lessons: 10,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual teacher image
      coverPhoto: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual cover photo
      borderColor: '#FF5722',
    },
    {
      title: 'Time Management Tips',
      teacher: 'Jane Smith',
      lessons: 15,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual teacher image
      coverPhoto: 'https://images.pexels.com/photos/10646600/pexels-photo-10646600.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with actual cover photo
      borderColor: '#4CAF50',
    },
    {
      title: 'Effective Study Techniques',
      teacher: 'Mark Evans',
      lessons: 12,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual teacher image
      coverPhoto: 'https://images.pexels.com/photos/12719358/pexels-photo-12719358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual cover photo
      borderColor: '#2196F3',
    },
    {
      title: 'Public Speaking Skills',
      teacher: 'Alice Brown',
      lessons: 8,
      image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual teacher image
      coverPhoto: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual cover photo
      borderColor: '#9C27B0',
    },
    {
      title: 'Creative Writing Workshop',
      teacher: 'Tom White',
      lessons: 7,
      image: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual teacher image
      coverPhoto: 'https://images.pexels.com/photos/12719358/pexels-photo-12719358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual cover photo
      borderColor: '#FFC107',
    },
    {
      title: 'Leadership Skills for Students',
      teacher: 'Emily Clark',
      lessons: 11,
      image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual teacher image
      coverPhoto: 'https://images.pexels.com/photos/10646600/pexels-photo-10646600.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with actual cover photo
      borderColor: '#009688',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Centered heading */}
      <Typography variant="h4" component="h2" fontWeight="bold" textAlign="center" gutterBottom>
        Optimize Your Learning Approach
      </Typography>

      {/* Flexbox for 6 horizontally aligned boxes */}
      <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {sections.map((section, index) => (
          <DottedContainer key={index} borderColor={section.borderColor}>
            {/* Cover photo at the top */}
            <img 
              src={section.coverPhoto} 
              alt={section.title} 
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />

            {/* 5 Small Stars */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              {[...Array(5)].map((_, starIndex) => (
                <StarIcon 
                  key={starIndex} 
                  sx={{ fontSize: '16px', color: '#FFD700', mx: 0.5 }} 
                />
              ))}
            </Box>

            {/* Title, Join Now Button */}
            <Box sx={{ padding: '16px 0' }}>
              <Typography variant="h6" component="h3" fontWeight="bold" gutterBottom>
                {section.title}
              </Typography>

              <RoundedButton>
                Join Now
              </RoundedButton>
            </Box>

            {/* Teacher info at the bottom */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
              <Avatar src={section.image} alt={section.teacher} sx={{ width: 50, height: 50, marginRight: '12px' }} />
              <Box>
                <Typography variant="body1" fontWeight="bold">
                  {section.teacher}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <SchoolIcon sx={{ fontSize: '16px', marginRight: '4px', color: '#757575' }} />
                  <Typography variant="body2">{section.lessons} Lessons</Typography>
                </Box>
              </Box>
            </Box>
          </DottedContainer>
        ))}
      </Box>
    </Container>
  );
}
