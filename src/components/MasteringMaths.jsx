import React from 'react';
import { Box, Typography, Button, Chip, Rating, TextField, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const MasteringMathematics = () => {
  return (
    <Box sx={{ padding: '2rem', display: { xs: 'block', md: 'flex' }, justifyContent: 'space-between' }}>
      {/* Left Section (Photo + Content) */}
      <Box sx={{ width: { xs: '100%', md: '65%' }, mb: { xs: '2rem', md: 0 } }}>
        {/* Course Title and Icons */}
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2, flexWrap: 'wrap' }}>
          <Chip icon={<SchoolIcon sx={{ color: 'pink' }} />} label="Mathematics" sx={{ backgroundColor: '#ffe3e9', color: 'pink' }} />
          <Chip icon={<PeopleIcon sx={{ color: 'pink' }} />} label="25+ Students" sx={{ backgroundColor: '#ffe3e9', color: 'pink' }} />
          <Chip icon={<AccessTimeIcon sx={{ color: 'pink' }} />} label="2 Years" sx={{ backgroundColor: '#ffe3e9', color: 'pink' }} />
          <Chip icon={<PlayCircleOutlineIcon sx={{ color: 'pink' }} />} label="6 Lectures" sx={{ backgroundColor: '#ffe3e9', color: 'pink' }} />
          <Rating value={5} readOnly />
        </Box>

        {/* Course Heading */}
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
          Mastering Mathematics
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 4 }}>
          From Basics to Advanced
        </Typography>

        {/* Main Image */}
        <Box component="img" src="https://images.pexels.com/photos/8197544/pexels-photo-8197544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Lecturer" sx={{ width: '100%', height: 'auto', mb: 4 }} />

        {/* About The Course */}
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          About The Course
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          This course covers everything from the basics of algebra to advanced calculus. The lectures provide in-depth knowledge and a step-by-step guide to mastering mathematical concepts.
        </Typography>

        {/* What You'll Learn */}
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          What You'll Learn
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
          {/* Left Points */}
          <List sx={{ width: { xs: '100%', md: '45%' }, mb: { xs: 2, md: 0 } }}>
            {[
              "Understanding Algebra",
              "Solving Equations",
              "Graphing Functions",
              "Trigonometry Basics",
              "Advanced Calculus",
            ].map((text) => (
              <ListItem key={text}>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: 'green' }} />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>

          {/* Right Points */}
          <List sx={{ width: { xs: '100%', md: '45%' } }}>
            {[
              "Derivatives and Integrals",
              "Complex Numbers",
              "Probability and Statistics",
              "Geometrical Theorems",
              "Real-world Applications",
            ].map((text) => (
              <ListItem key={text}>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: 'green' }} />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      {/* Right Section (Dotted Boxes) */}
      <Box sx={{ width: { xs: '100%', md: '30%' }, pl: { xs: 0, md: 2 } }}>
        {/* Self-Paced Box */}
        <Box sx={{ border: '2px dotted pink', padding: '1rem', mb: 4, borderRadius: '8px' }}>
          <Typography variant="h6" sx={{ color: 'pink', fontWeight: 'bold', mb: 1 }}>
            July 26, 2023
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Self-Paced
          </Typography>
          <Button variant="contained" sx={{ mt: 2, backgroundColor: 'pink', color: 'white', '&:hover': { backgroundColor: '#ff66a3' } }}>
            Enroll Now
          </Button>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            Start anytime and learn at your own pace.
          </Typography>
        </Box>

        {/* Related Courses Box */}
        <Box sx={{ border: '2px dotted orange', padding: '1rem', mb: 4, borderRadius: '8px' }}>
          <Typography variant="h6" sx={{ color: 'orange', fontWeight: 'bold', mb: 1 }}>
            Related Courses
          </Typography>
          <List>
            {[
              "Effective Study Habits for Academic Success",
              "Science in Everyday Life",
              "The Art of Writing",
              "Discover strategies to balance your academic and personal life effectively.",
              "Learn how to approach challenges with logic and creativity for better outcomes.",
              "Focus on essential skills and knowledge that support long-term success.",
              "Explore the role of science in daily problem-solving and innovation."
              
            ].map((text) => (
              <ListItem key={text}>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: 'orange' }} />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Newsletter Box with Background Image */}
        <Box
          sx={{
            backgroundImage: 'url(https://media.istockphoto.com/id/1351416161/photo/female-teachers-teaching-students-in-library-at-school.jpg?s=1024x1024&w=is&k=20&c=66NH30EsyJFQrt10Yx640cYwaDRwNXO80FuQQzmhFSw=)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '20%',
            padding: '2rem',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            mb: 4,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Subscribe to Our Newsletter
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Enter your email"
            sx={{
              width: '100%',
              maxWidth: '300px',
              mb: 2,
              backgroundColor: 'white',
              borderRadius: '4px',
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'pink',
              color: 'white',
              '&:hover': { backgroundColor: '#ff66a3' },
              width: '100%',
              maxWidth: '300px',
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MasteringMathematics;
