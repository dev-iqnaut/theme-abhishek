import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

const EducationBenefits = () => {
  const accordionStyles = {
    border: '2px dotted #d3d3d3', 
    borderRadius: '8px',
    marginBottom: '16px',
    padding: '8px',
  };

  return (
    <Box sx={{ padding: '32px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Discovering Education Benefits
      </Typography>
      
      {/* Responsive Flexbox Container */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'row' }, // Stack vertically on mobile/tablet and in two columns on desktop
          gap: '16px',
        }}
      >
        {/* Left Side Accordions */}
        <Box
          sx={{
            flex: '1 1 100%',
            maxWidth: { md: '48%' }, // For larger screens, take up 48% width
          }}
        >
          <Accordion sx={accordionStyles}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>What are the key benefits of University & School Education?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Bridge offers a wide range of programs, including undergraduate and postgraduate degrees,
                as well as certificate and diploma courses in various disciplines.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={accordionStyles}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>How does Education contribute to personal growth?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Education plays a crucial role in personal development, fostering skills, and enhancing career prospects.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={accordionStyles}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>What role does Education play in society?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Education is essential for societal progress, shaping individuals and improving collective knowledge.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={accordionStyles}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>How does Education enhance career prospects?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Education opens up a wider range of career opportunities and helps individuals improve their skillsets.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={accordionStyles}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>What impact does Education have on economic growth?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Education drives economic growth by fostering innovation and creating a more skilled workforce.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* Right Side Accordions */}
        <Box
          sx={{
            flex: '1 1 100%',
            maxWidth: { md: '48%' }, 
          }}
        >
          <Accordion sx={accordionStyles}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Can Education lead to personal fulfillment?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Education can lead to personal fulfillment by fostering creativity, critical thinking, and intellectual curiosity.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={accordionStyles}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>How does Education promote critical thinking?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Education encourages critical thinking by challenging students to think deeply and analyze various viewpoints.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={accordionStyles}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Does Education encourage creativity?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Education fosters creativity by exposing students to new ideas and encouraging innovative thought.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={accordionStyles}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Does Education foster lifelong learning?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Education instills a lifelong love for learning, making individuals more adaptable in the face of change.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={accordionStyles}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>What long-term advantages does Education offer?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Education provides long-term benefits, including improved social standing, economic stability, and personal satisfaction.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
};

export default EducationBenefits;
