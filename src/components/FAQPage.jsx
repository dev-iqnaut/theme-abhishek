import React from 'react';
import { TextField, Button, Box, Paper, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQPage = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        flexWrap: 'wrap', 
        gap: '2rem', 
        padding: '2rem',
        '@media (max-width: 900px)': { // Ensures vertical stacking on smaller screens
          flexDirection: 'column',
        }
      }}
    >
      {/* Have Question Form - Left Section */}
      <Paper 
        sx={{
          p: 3, 
          border: '2px dotted pink', 
          borderRadius: '8px',
          width: '100%',
          maxWidth: '400px',
          flex: '1 1 40%',
          '@media (max-width: 900px)': {
            maxWidth: '100%', // Full width on smaller screens
          }
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom>Have a Question?</Typography>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Your Name" variant="outlined" fullWidth />
          <TextField label="Your Email" variant="outlined" fullWidth />
          <TextField label="Your Question" variant="outlined" multiline rows={4} fullWidth />
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ 
              borderRadius: '50px', 
              mt: 2, 
              backgroundColor: 'pink', 
              color: '#fff', 
              '&:hover': { backgroundColor: '#ff4081', transform: 'scale(1.05)' }, // Hover effect added
              transition: 'transform 0.3s ease-in-out',
            }}
          >
            Send Question
          </Button>
        </Box>
      </Paper>

      {/* FAQ Section - Right Section */}
      <Box 
        sx={{ 
          flex: '1 1 50%', 
          maxWidth: '600px',
          '@media (max-width: 900px)': {
            maxWidth: '100%', // Full width on smaller screens
          }
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom>Frequently Asked Questions</Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What is your refund policy?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our refund policy is as follows...
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>How do I access the courses?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can access the courses by...
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What is the course duration?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The course duration depends on...
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* Add more accordions if needed */}
      </Box>
    </Box>
  );
};

export default FAQPage;
