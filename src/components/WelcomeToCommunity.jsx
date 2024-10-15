import React from 'react';
import { Box, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const WelcomeSection = () => {
  return (
    <Box sx={styles.section}>
      {/* Left Side: Image */}
      <Box
        component="img"
        src="https://cdn.pixabay.com/photo/2016/01/19/01/42/library-1147815_960_720.jpg" 
        alt="Community"
        sx={styles.image}
      />

      {/* Right Side: Heading, Content, and Icons */}
      <Box sx={styles.content}>
        <Typography variant="h4" sx={styles.heading}>
          Welcome to Our Community
        </Typography>
        <Typography sx={styles.description}>
          Join a vibrant community of learners and educators who are passionate
          about sharing knowledge and growing together. Experience the best
          education environment with support, collaboration, and innovation at
          its core.
        </Typography>

        {/* Icons with Different Colors */}
        <Box sx={styles.iconsWrapper}>
          <Box sx={styles.iconItem}>
            <SchoolIcon sx={{ ...styles.icon, color: '#4A90E2' }} />
            <Typography>Academic Excellence</Typography>
          </Box>
          <Box sx={styles.iconItem}>
            <GroupIcon sx={{ ...styles.icon, color: '#7ED321' }} />
            <Typography>Community Support</Typography>
          </Box>
        </Box>

        <Box sx={styles.iconsWrapper}>
          <Box sx={styles.iconItem}>
            <EmojiEventsIcon sx={{ ...styles.icon, color: '#F5A623' }} />
            <Typography>Achievement Awards</Typography>
          </Box>
          <Box sx={styles.iconItem}>
            <LightbulbIcon sx={{ ...styles.icon, color: '#D0021B' }} />
            <Typography>Innovative Learning</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  section: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, row on medium and up
    alignItems: 'center',
    padding: '20px',
    margin: '20px 0',
  },
  image: {
    width: { xs: '100%', md: '45%' }, // Full width on small screens, 45% on medium and up
    height: 'auto',
    borderRadius: '8px',
    objectFit: 'cover',
    marginBottom: { xs: '20px', md: 0 }, // Add margin at the bottom for small screens
    marginRight: { md: '20px' }, // Right margin only on medium screens
  },
  content: {
    flex: 1,
    textAlign: 'center', // Center align text on small screens
  },
  heading: {
    marginBottom: '16px',
    fontWeight: 'bold',
  },
  description: {
    marginBottom: '20px',
    color: '#555',
  },
  iconsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Allow items to wrap in smaller screens
    marginBottom: '16px',
  },
  iconItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center align items in icon wrapper
    textAlign: 'center', // Center align text
    flex: { xs: '1 0 45%', md: '1' }, // Take 45% width on small screens, auto on larger
    margin: '10px', // Add some margin for spacing
  },
  icon: {
    fontSize: '40px',
    marginBottom: '8px',
  },
};

export default WelcomeSection;
