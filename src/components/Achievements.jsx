import { Box, Typography } from '@mui/material';

const AchievementsSection = () => {
  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        backgroundImage: 'url(https://images.pexels.com/photos/10646606/pexels-photo-10646606.jpeg?auto=compress&cs=tinysrgb&w=600)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', md: '2.5rem' } }}>
        School Achievements
      </Typography>

      {/* Flex container for achievements */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 4,
          flexWrap: 'wrap',
          mt: 4,
        }}
      >
        {/* Mapping over the items */}
        {[
          { label: '49 Years of Experience', value: 49 },
          { label: '9,999 Students Enrolled', value: 9999 },
          { label: '500 Courses Available', value: 500 },
          { label: '39 Awards Won', value: 39 },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: '1 1 100px',
              maxWidth: '150px',
              textAlign: 'center',
              padding: { xs: '1rem', sm: '1.5rem' }, // Responsive padding for mobile/tablet
            }}
          >
            <Typography
              variant="h3"
              sx={{ 
                fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, // Responsive font size
                fontWeight: 'bold',
              }}
            >
              {item.value}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', md: '1.2rem' } }}>
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AchievementsSection;
