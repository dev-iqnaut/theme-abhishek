import React from 'react';
import { Box, Typography, Container, Paper, Divider } from '@mui/material';
import { useContext } from 'react';
import MyContext from '../context/ContextApi.jsx';

const SchoolHistorySection = () => {

    const { siteData } = useContext(MyContext);
    console.log("Data at AboutUs", siteData);

  return (
    <Container sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our School History
        </Typography>
        <Typography variant="body1">
          { siteData?.aboutUs?.schoolHistory}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {/* Milestone 1 */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Paper elevation={3} sx={{ p: 2, width: '100%' }}>
            <Typography variant="h6">1920 - Foundation</Typography>
            <Typography variant="body2">
              Our school was founded in 1920 with a mission to provide quality education to children in the community. 
              It started as a small institution with only a handful of students and teachers.
            </Typography>
          </Paper>
        </Box>
        
        {/* Milestone 2 */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Paper elevation={3} sx={{ p: 2, width: '100%' }}>
            <Typography variant="h6">1950 - First Expansion</Typography>
            <Typography variant="body2">
              By 1950, the school expanded its infrastructure to accommodate a growing number of students. 
              New buildings were added, and we introduced more advanced learning facilities.
            </Typography>
          </Paper>
        </Box>

        {/* Milestone 3 */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Paper elevation={3} sx={{ p: 2, width: '100%' }}>
            <Typography variant="h6">2000 - Technological Advancements</Typography>
            <Typography variant="body2">
              Embracing the digital age, the school introduced computer labs and smart classrooms, allowing 
              students to benefit from the latest educational technologies.
            </Typography>
          </Paper>
        </Box>

        {/* Milestone 4 */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Paper elevation={3} sx={{ p: 2, width: '100%' }}>
            <Typography variant="h6">2020 - Centennial Celebration</Typography>
            <Typography variant="body2">
              In 2020, we celebrated 100 years of excellence in education. The school continues to uphold 
              its values and commitment to nurturing future leaders.
            </Typography>
          </Paper>
        </Box>
      </Box>

      <Divider sx={{ mt: 6 }} />

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h6">
          Our journey is one of growth, adaptation, and constant pursuit of educational excellence.
        </Typography>
      </Box>
    </Container>
  );
};

export default SchoolHistorySection;
