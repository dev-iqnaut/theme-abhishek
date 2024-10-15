import { Box, Typography, Card, CardMedia, Grid } from '@mui/material';

function StayUpToDate() {
  return (
    <>
      {/* Stay Up to Date Section */}
      <Box p={4}>
        {/* Heading and Two Lines */}
        <Box display="flex" justifyContent="space-between" mb={4} flexDirection={{ xs: 'column', md: 'row' }}>
          {/* Heading on the Left */}
          <Typography variant="h4" fontWeight="bold" mb={{ xs: 2, md: 0 }}>
            Stay Up to Date With Bridge
          </Typography>

          {/* Two Lines on the Right */}
          <Box textAlign="right">
            <Typography variant="body1">Explore the latest updates</Typography>
            <Typography variant="body1">and opportunities in education</Typography>
          </Box>
        </Box>

        {/* Responsive Grid for Boxes */}
        <Grid container spacing={2}>
          {/* Box 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                border: '1px dotted pink',
                borderRadius: '10px',
                padding: '16px',
              }}
            >
              {/* Photo */}
              <CardMedia
                component="img"
                image="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg"
                alt="Update 1"
                sx={{ borderRadius: '10px', height: '150px', objectFit: 'cover' }}
              />

              {/* Date and Content Type */}
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Typography variant="body2" color="textSecondary">
                  Oct 5, 2024
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  News
                </Typography>
              </Box>

              {/* Heading */}
              <Typography variant="h6" mt={2}>
                New Education Reforms Announced
              </Typography>

              {/* Content */}
              <Typography variant="body2" mt={1}>
                The government recently announced new education reforms aimed at improving access to quality education...
              </Typography>
            </Card>
          </Grid>

          {/* Box 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                border: '1px dotted lightblue',
                borderRadius: '10px',
                padding: '16px',
              }}
            >
              {/* Photo */}
              <CardMedia
                component="img"
                image="https://images.pexels.com/photos/4147743/pexels-photo-4147743.jpeg"
                alt="Update 2"
                sx={{ borderRadius: '10px', height: '150px', objectFit: 'cover' }}
              />

              {/* Date and Content Type */}
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Typography variant="body2" color="textSecondary">
                  Sept 28, 2024
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Event
                </Typography>
              </Box>

              {/* Heading */}
              <Typography variant="h6" mt={2}>
                Virtual Education Summit 2024
              </Typography>

              {/* Content */}
              <Typography variant="body2" mt={1}>
                Join us at the Virtual Education Summit to explore the future of online education and how to navigate challenges...
              </Typography>
            </Card>
          </Grid>

          {/* Box 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                border: '1px dotted green',
                borderRadius: '10px',
                padding: '16px',
              }}
            >
              {/* Photo */}
              <CardMedia
                component="img"
                image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Update 3"
                sx={{ borderRadius: '10px', height: '150px', objectFit: 'cover' }}
              />

              {/* Date and Content Type */}
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Typography variant="body2" color="textSecondary">
                  Sept 15, 2024
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Blog
                </Typography>
              </Box>

              {/* Heading */}
              <Typography variant="h6" mt={2}>
                The Impact of Technology on Modern Education
              </Typography>

              {/* Content */}
              <Typography variant="body2" mt={1}>
                Technology has revolutionized education in recent years. In this blog, we explore how digital tools are enhancing the learning experience...
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default StayUpToDate;
