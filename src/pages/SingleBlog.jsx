import { Box, Typography, Card, CardMedia, TextField, Button, Divider, InputAdornment } from '@mui/material';
import { AccessTime, Comment, School, Search } from '@mui/icons-material';
import HeroSection from '../components/HeroSection';
import StayUpToDate from '../components/StayUpToDate';

function SingleBlog() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        heading="Single Blog"
        breadcrumb="Single Blog"
        subHeading="Learn from the best and build a successful career in a highly competitive world."
        imageSrc="https://images.pexels.com/photos/6217805/pexels-photo-6217805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        buttonText="Join Us Now"
      />

      {/* Blog Content */}
      <Box display={{ xs: 'block', md: 'flex' }} justifyContent="space-between" p={4}>
        {/* Left Section - Blog Content */}
        <Box width={{ xs: '100%', md: '65%' }} mb={{ xs: 4, md: 0 }}>
          {/* Image */}
          <Card>
            <CardMedia
              component="img"
              image="https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg"
              alt="Student Life"
              sx={{ borderRadius: '10px', height: '250px', objectFit: 'cover' }}  // Reduced size and maintained aspect ratio
            />
          </Card>

          {/* Blog Title */}
          <Typography variant="h4" mt={2} align="center">  {/* Centered the title */}
            Balancing Student Life: Academics and Extracurriculars
          </Typography>

          {/* Meta Information */}
          <Box display="flex" alignItems="center" justifyContent="center" mt={1}>
            <AccessTime style={{ color: 'pink', marginRight: '5px' }} />
            <Typography variant="body2" mr={2}>July 24, 2023</Typography>

            <School style={{ color: 'pink', marginRight: '5px' }} />
            <Typography variant="body2" mr={2}>Student Life</Typography>

            <Comment style={{ color: 'pink', marginRight: '5px' }} />
            <Typography variant="body2">No Comments</Typography>
          </Box>

          {/* Blog Content */}
          <Typography variant="body1" mt={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </Typography>
        </Box>

        {/* Right Section - Sidebar */}
        <Box width={{ xs: '100%', md: '30%' }}>
          {/* Search Bar with Pink Icon */}
          <TextField
            variant="outlined"
            placeholder="Search"
            fullWidth
            sx={{ mb: 4 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search style={{ color: 'pink' }} />
                </InputAdornment>
              ),
            }}
          />

          {/* Recent Blog Section */}
          <Box border="1px dashed pink" borderRadius="10px" p={2} mb={4}>
            <Typography variant="h6" mb={2}>Recent Blog</Typography>
            <Typography variant="body2" mb={1}>July 24, 2023 - The Role of Education Technology...</Typography>
            <Divider />
            <Typography variant="body2" mt={1}>Navigating Career Paths: Finding Your Passion...</Typography>
          </Box>

          {/* Subscribe Section with Background Image */}
          <Box
            p={2}
            borderRadius="10px"
            sx={{
              backgroundImage: 'url(https://your-image-url.com)',  // Add the actual URL of the background image here
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white'
            }}
          >
            <Typography variant="h6" mb={2} align="center">Subscribe Our Newsletter</Typography>
            <TextField
              variant="outlined"
              placeholder="Your Email"
              fullWidth
              sx={{
                mb: 2,
                backgroundColor: 'white',  // Ensures the email input is visible
                borderRadius: '5px',
              }}
            />
            <Button variant="contained" fullWidth sx={{ backgroundColor: 'pink', color: 'white' }}>
              Subscribe Here
            </Button>
          </Box>
        </Box>
      </Box>
      <StayUpToDate />
    </>
  );
}

export default SingleBlog;
